import {
  defineComponent,
  ref,
  provide,
  onMounted,
  onUnmounted,
  h,
  PropType,
  watch,
  isVue2,
} from 'vue-demi';
import useEventListener from './composables/useEventListener';
import { prefix } from './config';

type ControlConfig = { position: string; className: string; numVisible?: boolean };
type ControlKey = 'zoom' | 'scale' | 'rotation';

const props = {
  // 腾讯位置服务开发Key
  apiKey: {
    type: String,
    default: '',
  },
  // 地图附加库
  libraries: {
    type: String,
    default: 'visualization,geometry,vector,tools',
  },
  // 地图中心点经纬度
  center: {
    type: Object as PropType<TMap.LatLng>,
    default: () => ({ lat: 40.040452, lng: 116.273486 }),
  },
  // 地图缩级别
  zoom: {
    type: Number,
    default: 17,
  },
  // 地图最小缩放级别
  minZoom: {
    type: Number,
    default: 3,
  },
  // 地图最大缩放级别
  maxZoom: {
    type: Number,
    default: 20,
  },
  // 地图控件配置
  control: {
    type: Object as PropType<{
      zoom: ControlConfig | boolean;
      scale: ControlConfig | boolean;
      rotation: ControlConfig | boolean;
    }>,
    default: () => ({ zoom: true, scale: true, rotation: true }),
  },
  // 除了上述属性其他初始化属性
  options: {
    type: Object as PropType<TMap.MapOptions>,
    default: () => ({}),
  },
};

if (!isVue2) {
  // @ts-ignore
  props.class = {
    type: String,
    default: '',
  };
  // @ts-ignore
  props.style = {
    type: Object as PropType<Record<string, never>>,
    default: () => ({}),
  };
}


export default defineComponent({
  name: `${prefix}Map`,
  inheritAttrs: isVue2,
  props,
  setup(props, context) {
    const ele = ref<HTMLDivElement | null>(null);
    const map = ref<TMap.Map | null>(null);
    let mapInstance: TMap.Map;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    onMounted(async () => {
      // 如果传了apiKey则拉取地图引擎
      if (props.apiKey) {
        await loadScript(props.apiKey, props.libraries);
      }
      if (ele.value) {
        // 初始化地图实例
        mapInstance = new TMap.Map(ele.value, {
          ...props.options,
          center: new TMap.LatLng(props.center.lat, props.center.lng),
          zoom: props.zoom,
          minZoom: props.minZoom,
          maxZoom: props.maxZoom,
        });
        map.value = mapInstance;
        // 绑定地图事件
        useEventListener(mapInstance, context);
        // 设置地图控件显示
        (Object.keys(props.control) as ControlKey[]).forEach((key: ControlKey) => {
          let controlId: TMap.constants.DEFAULT_CONTROL_ID;
          switch (key) {
            case 'rotation':
              controlId = TMap.constants.DEFAULT_CONTROL_ID.ROTATION;
              break;
            case 'scale':
              controlId = TMap.constants.DEFAULT_CONTROL_ID.SCALE;
              break;
            case 'zoom':
              controlId = TMap.constants.DEFAULT_CONTROL_ID.ZOOM;
              break;
          }
          if (!props.control[key]) {
            mapInstance.removeControl(controlId);
            return;
          }
          if (typeof props.control[key] === 'object') {
            const control = mapInstance.getControl(controlId);
            const { position, className, numVisible } = props.control[key] as ControlConfig;
            const CONTROL_POSITION: {
              [key: string]: TMap.constants.CONTROL_POSITION;
            } = {
              topLeft: TMap.constants.CONTROL_POSITION.TOP_LEFT,
              topCenter: TMap.constants.CONTROL_POSITION.TOP_CENTER,
              topRight: TMap.constants.CONTROL_POSITION.TOP_RIGHT,
              centerLeft: TMap.constants.CONTROL_POSITION.CENTER_LEFT,
              center: TMap.constants.CONTROL_POSITION.CENTER,
              centerRight: TMap.constants.CONTROL_POSITION.CENTER_RIGHT,
              bottomLeft: TMap.constants.CONTROL_POSITION.BOTTOM_LEFT,
              bottomCenter: TMap.constants.CONTROL_POSITION.BOTTOM_CENTER,
              bottomRight: TMap.constants.CONTROL_POSITION.BOTTOM_RIGHT,
            };
            CONTROL_POSITION[position] && control.setPosition(CONTROL_POSITION[position]);
            className && control.setClassName(className);
            numVisible && (control as TMap.ZoomControl).setNumVisible(numVisible);
          }
        });
      }
    });
    // 调用地图实例销毁方法
    onUnmounted(() => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    });
    // 属性变化则调用方法改变地图效果
    watch(
      () => props.center,
      (value) => {
        if (mapInstance) {
          mapInstance.setCenter(value);
        }
      },
    );
    watch(
      () => props.zoom,
      (value) => {
        if (mapInstance) {
          mapInstance.setZoom(value);
        }
      },
    );
    // 提供给子组件地图实例
    provide('map', map);
    return {
      map,
      ele,
    };
  },
  render() {
    const props = isVue2 ? { ref: 'ele' } : {
      ref: 'ele',
      // @ts-ignore
      class: this.class,
      // @ts-ignore
      style: this.style,
    };
    return h(
      'div',
      props,
      // eslint-disable-next-line no-nested-ternary
      // @ts-ignore
      this.$slots.default && this.map ? (isVue2 ? this.$slots.default : this.$slots.default()) : [],
    );
  },
});

const resolveArr: (() => void)[] = [];
let script: HTMLScriptElement;
// 拉取地图js文件
function loadScript(key: string, libraries: string): Promise<void> {
  return new Promise((resolve) => {
    if (window.TMap) {
      resolve();
      return;
    }

    resolveArr.push(resolve);
    // 地图js文件拉取成功则调用resolve数组执行后续逻辑
    if (!window.initGLMap) {
      window.initGLMap = () => {
        resolveArr.forEach((fun) => {
          fun();
        });
      };
    }
    // 如果没有创建过script标签则创建
    if (!script) {
      script = document.createElement('script');
      const src = libraries ? `https://map.qq.com/api/gljs?v=1.exp&key=${key}&libraries=${libraries}&callback=initGLMap` : `https://map.qq.com/api/gljs?v=1.exp&key=${key}&callback=initGLMap`;
      script.type = 'text/javascript';
      script.src = src;
      document.body.appendChild(script);
    }
  });
}
