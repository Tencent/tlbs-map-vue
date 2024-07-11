/* eslint-disable @typescript-eslint/no-explicit-any */
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

const getPath: any = (geometries: TMap.PolygonGeometry[]) => {
  const convertLatLng: any = (coord: any) => {
    if (Array.isArray(coord)) {
      return coord.map((ele: any) => convertLatLng(ele));
    }
    return new TMap.LatLng(coord.lat, coord.lng);
  };
  return geometries.map((item: any) => convertLatLng(item));
};

export const getGeometries = (geometries: TMap.PolygonGeometry[]) => geometries.map((item: any) => ({
  ...item,
  paths: getPath(item.paths),
}));

export default defineComponent({
  name: `${prefix}MultiPolygon`,
  props: {
    // 图层id
    id: {
      type: String,
      default: 'multiPolygon',
    },
    // 多边形的相关样式
    styles: {
      type: Object as PropType<{[key: string]: TMap.PolygonStyleOptions}>,
      required: true,
    },
    // 多边形数据数组
    geometries: {
      type: Array as PropType<TMap.PolygonGeometry[]>,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.MultiPolygonOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化图层
    const polygon = new TMap.MultiPolygon({
      ...props.options,
      id: props.id,
      map: toRaw(map.value),
      styles: getStyle(props.styles),
      geometries: getGeometries(props.geometries),
    });
    // 绑定图层事件
    useEventListener(polygon, context);
    // 调用图层销毁方法
    onUnmounted(() => {
      polygon.setMap(null);
    });
    // 对styles和geometries变化做监听
    watch(
      () => props.styles,
      (styles) => {
        polygon.setStyles(getStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        polygon.setGeometries(getGeometries(geometries));
      },
    );

    // 提供给ref实例使用
    return {
      polygon,
    };
  },
  render() {
    return null;
  },
});
// 获取地图api所需样式
export function getStyle(options: { [key: string]: TMap.PolygonStyle }): TMap.MultiPolygonStyleHash {
  const style: TMap.MultiPolygonStyleHash = {};

  Object.keys(options).forEach((key) => {
    style[key] = new TMap.PolygonStyle(options[key]);
  });
  return style;
}
