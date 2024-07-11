import {
  defineComponent,
  inject,
  Ref,
  watch,
  PropType,
  toRaw,
  onUnmounted,
} from 'vue-demi';
import useEventListener from './composables/useEventListener';
import { prefix } from './config';

export default defineComponent({
  name: `${prefix}MultiCircle`,
  props: {
    // 图层id
    id: {
      type: String,
      default: 'multiCircle',
    },
    // 圆的相关样式
    styles: {
      type: Object as PropType<{ [key: string]: TMap.CircleStyleOptions }>,
      required: true,
    },
    // 圆数据数组
    geometries: {
      type: Array as PropType<TMap.CircleGeometry[]>,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.MultiCircleOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化圆图层
    const circle = new TMap.MultiCircle({
      ...props.options,
      id: props.id,
      map: toRaw(map.value),
      styles: getStyle(props.styles),
      geometries: getGeometries(props.geometries),
    });
    // 绑定图层事件
    useEventListener(circle, context);
    // 调用图层销毁方法
    onUnmounted(() => {
      circle.setMap(null);
    });
    // 对styles和geometries变化做监听
    watch(
      () => props.styles,
      (styles) => {
        circle.setStyles(getStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        circle.setGeometries(getGeometries(geometries));
      },
    );

    // 提供给ref实例使用
    return {
      circle,
    };
  },
  render() {
    return null;
  },
});
// 获取地图api所需样式
export function getStyle(options: { [key: string]: TMap.CircleStyle }): TMap.MultiCircleStyleHash {
  const style: TMap.MultiCircleStyleHash = {};
  Object.keys(options).forEach((key) => {
    style[key] = new TMap.CircleStyle(options[key]);
  });
  return style;
}
// 获取地图api所需数据
export function getGeometries(geometries: TMap.CircleGeometry[]): TMap.CircleGeometry[] {
  return geometries.map((item: TMap.CircleGeometry) => ({
    ...item,
    center: new TMap.LatLng(item.center.lat, item.center.lng),
  }));
}
