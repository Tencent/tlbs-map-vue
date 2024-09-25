
import {
  defineComponent,
  inject,
  onUnmounted,
  PropType,
  Ref,
  toRaw,
  watch,
} from 'vue-demi';
import useEventListener from './composables/useEventListener';
import { prefix } from './config';

export default defineComponent({
  name: `${prefix}InfoWindow`,
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Object as PropType<TMap.LatLngData>,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.InfoWindowOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }

    const infoWindow = new TMap.InfoWindow({
      ...props.options,
      map: toRaw(map.value),
      position: new TMap.LatLng(props.position.lat, props.position.lng),
      content: props.content,
    });

    if (props.visible) {
      infoWindow.open();
    } else {
      infoWindow.close();
    }

    // 绑定图层事件
    useEventListener(infoWindow, context);
    // 调用图层销毁方法
    onUnmounted(() => {
      infoWindow.destroy();
    });

    watch(() => props.visible, (visible) => {
      visible ? infoWindow.open() : infoWindow.close();
    });

    watch(() => props.position, (position) => {
      infoWindow.setPosition(new TMap.LatLng(position.lat, position.lng));
    });

    watch(() => props.content, (content) => {
      infoWindow.setContent(content);
    });

    // 提供给ref实例使用
    return {
      infoWindow,
    };
  },
  render() {
    return null;
  },
});
