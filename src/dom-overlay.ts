// DOM覆盖物组件
import {
  defineComponent,
  inject,
  Ref,
  ref,
  h,
  PropType,
  onMounted,
  onUnmounted,
  watch,
  toRaw,
  nextTick,
  isVue2,
} from 'vue-demi';
import { prefix } from './config';

interface DomOverlayClassOptions extends TMap.DOMOverlayOptions {
  position: {lat: number;lng: number};
  offset: {x: number; y: number;};
  dom: HTMLElement;
  enableBubble?: boolean;
}

export default defineComponent({
  name: `${prefix}DomOverlay`,
  props: {
    // DOM覆盖物经纬度位置
    position: {
      type: Object as PropType<{lat: number;lng: number}>,
      required: true,
    },
    // DOM覆盖物相对中心点偏移量
    offset: {
      type: Object as PropType<{x: number; y: number;}>,
      required: false,
      default: () => ({ x: 0, y: 0 }),
    },
    // 额外参数支持事件是否冒泡
    options: {
      type: Object as PropType<DomOverlayClassOptions>,
      default: () => ({
        enableBubble: true,
      }),
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    const dom = ref<HTMLElement | null>(null);
    class DomOverlayClass extends TMap.DOMOverlay<HTMLElement> {
      map: TMap.Map;
      position: {lat: number;lng: number} | null = null;
      offset: {x: number;y: number} | null = null;

      constructor(options: DomOverlayClassOptions) {
        super(options);
        this.map = options.map;
        this.onInit(options);
      }
      // 初始化DOMOverlay
      onInit(options: DomOverlayClassOptions) {
        // eslint-disable-next-line vue/no-mutating-props
        this.position = options.position;
        // eslint-disable-next-line vue/no-mutating-props
        this.offset = options.offset;
        this.dom = options.dom;
        this.dom.style.position = 'absolute';
      }
      // 创建DOM
      createDOM() {
        return this.dom;
      }
      // 缩放地图或者移动地图触发
      updateDOM() {
        nextTick(() => {
          if (!this.map) {
            return;
          }
          // 经纬度坐标转容器像素坐标
          if (this.position && this.offset) {
            const pixel = this.map.projectToContainer(new TMap.LatLng(this.position.lat, this.position.lng));
            const width = props.width || this.dom.clientWidth;
            const height = props.height || this.dom.clientHeight;
            const left = `${pixel.getX() - width / 2 + this.offset.x}px`;
            const top = `${pixel.getY() - height / 2 + this.offset.y}px`;
            // 使用top/left将DOM元素定位到指定位置
            this.dom.style.left = left;
            this.dom.style.top = top;
          }
        });
      }
      // 更新DOM位置
      updatePosition() {
        domOverlay.position = props.position;
        domOverlay.offset = props.offset;
        this.updateDOM();
      }
      // 销毁DOMOverlay实例
      onDestroy() {
        this.setMap(null);
      }
    }

    let domOverlay: DomOverlayClass;
    onMounted(() => {
      if (dom.value) {
        domOverlay = new DomOverlayClass({
          ...props.options,
          position: props.position,
          offset: props.offset,
          map: toRaw(map.value),
          dom: dom.value,
        });
        // 如果没开启冒泡，则对dom元素事件设置停止冒泡
        if (!props.options.enableBubble) {
          dom.value.addEventListener('click', e => e.stopPropagation());
          dom.value.addEventListener('dblclick', e => e.stopPropagation());
          dom.value.addEventListener('mousemove', e => e.stopPropagation());
        }
      }
    });
    // 调用销毁方法
    onUnmounted(() => {
      domOverlay.onDestroy();
    });

    watch(() => [props.position, props.offset], () => {
      domOverlay.updatePosition();
    });

    return {
      dom,
    };
  },
  render() {
    return h(
      'div',
      { ref: 'dom' },
      this.$slots.default ? (isVue2 ? this.$slots.default : this.$slots.default()) : [],
    );
  },
});


