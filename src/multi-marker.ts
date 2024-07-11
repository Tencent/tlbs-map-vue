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
import { getGeometries } from './utils';
import { prefix } from './config';

export default defineComponent({
  name: `${prefix}MultiMarker`,
  props: {
    // 图层id
    id: {
      type: String,
      default: 'multiMarker',
    },
    // 点标注的相关样式
    styles: {
      type: Object as PropType<{ [key: string]: TMap.MarkerStyleOptions }>,
      required: true,
    },
    // 点标注数据数组
    geometries: {
      type: Array as PropType<TMap.PointGeometry[]>,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.MultiMarkerOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化图层
    const markers = new TMap.MultiMarker({
      ...props.options,
      id: props.id,
      map: toRaw(map.value),
      styles: getStyle(props.styles),
      geometries: getGeometries(props.geometries),
    });
    // 绑定图层事件
    useEventListener(markers, context);
    // 调用图层销毁方法
    onUnmounted(() => {
      markers.setMap(null);
    });
    // 对styles和geometries变化做监听
    watch(
      () => props.styles,
      (styles) => {
        markers.setStyles(getStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        markers.setGeometries(getGeometries(geometries));
      },
    );

    // 提供给ref实例使用
    return {
      marker: markers,
    };
  },
  render() {
    return null;
  },
});

// 获取地图api所需样式
function getStyle(options: { [key: string]: TMap.MarkerStyleOptions }) {
  const style: TMap.MultiMarkerStyleHash = {};
  Object.keys(options).forEach((key) => {
    style[key] = new TMap.MarkerStyle(options[key]);
  });
  return style;
}
