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

// 坐标转换
const getPath: any = (geometries: TMap.PolylineGeometry[]) => {
  const convertLatLng: any = (coord: any) => {
    if (Array.isArray(coord)) {
      return coord.map((ele: any) => convertLatLng(ele));
    }
    return new TMap.LatLng(coord.lat, coord.lng);
  };
  return geometries.map((item: any) => convertLatLng(item));
};

// 生成几何信息
const getGeometries = (geometries: TMap.PolylineGeometry[]) => geometries.map((item: any) => {
  // 普通折线
  if (!item.rainbowPaths) {
    return {
      ...item,
      paths: getPath(item.paths), // 坐标转换
    };
  }
  // 彩虹折线
  return {
    ...item,
    rainbowPaths: item.rainbowPaths.map((rainbowPath: any) => ({
      ...rainbowPath,
      path: getPath(rainbowPath.path),
    })),
  };
});

export default defineComponent({
  name: `${prefix}MultiPolyline`,
  props: {
    // 图层id
    id: {
      type: String,
      default: 'multiPolyline',
    },
    // 折线的相关样式
    styles: {
      type: Object as PropType<{[key: string]: TMap.PolylineStyleOptions}>,
      required: true,
    },
    // 折线数据数组
    geometries: {
      type: Array as PropType<TMap.PolylineGeometry[]>,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.MultiPolylineOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    // 接收地图实例
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 创建折线图层
    const polyline = new TMap.MultiPolyline({
      ...props.options,
      id: props.id,
      map: toRaw(map.value),
      styles: getStyle(props.styles),
      geometries: getGeometries(props.geometries),
    });
    useEventListener(polyline, context);

    onUnmounted(() => {
      polyline.setMap(null);
    });

    watch(
      () => props.styles,
      (styles) => {
        polyline.setStyles(getStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        polyline.setGeometries(getGeometries(geometries));
      },
    );
    // 提供给ref实例使用
    return {
      polyline,
    };
  },
  render() {
    return null;
  },
});

// 生成图层样式
function getStyle(options: { [key: string]: TMap.PolylineStyle }) {
  const style: TMap.MultiPolylineStyleHash = {};

  Object.keys(options).forEach((key) => {
    style[key] = new TMap.PolylineStyle(options[key]);
  });
  return style;
}
