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

interface AggregationPointsObj {
  center: TMap.LatLng, // 中心点位置
  width: string, // 默认宽度
  height: string, // 默认高度
  'line-height': string,
  content: number, // 聚合元素个数
  sort: number, // 所有图形聚合后的元素个数排序后结果
  data: TMap.ClusterInfo, //  聚合簇属性
}
interface ScatteredPointsObj {
  center: TMap.LatLng,
  data: TMap.ClusterInfo // 聚合簇属性
}


export default defineComponent({
  name: `${prefix}MarkerCluster`,
  props: {
    id: {
      type: String,
      default: 'markerCluster',
    },
    geometries: {
      type: Array as PropType<TMap.PointGeometry[]>,
      required: true,
    },
    gridSize: {
      type: Number,
      default: 60,
    },
    maxZoom: {
      type: Number,
      default: 13,
    },
    minimumClusterSize: {
      type: Number,
      default: 2,
    },
    zoomOnClick: {
      type: Boolean,
      default: true,
    },
    averageCenter: {
      type: Boolean,
      default: false,
    },
    enableDefaultStyle: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object as PropType<TMap.MarkerClusterOptions>,
      default: () => ({}),
    },
  },
  emits: ['clusterchange'],
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    const markerCluster = new TMap.MarkerCluster({
      ...props.options,
      id: props.id, // 图层id
      map: toRaw(map.value),       // 设置点聚合显示在哪个map对象中（创建map的段落省略）
      enableDefaultStyle: props.enableDefaultStyle,   // 使用默认样式
      minimumClusterSize: props.minimumClusterSize,  // 最小聚合点数：2个
      geometries: getGeometries(props.geometries),
      zoomOnClick: props.zoomOnClick,  // 点击聚合数字放大展开
      gridSize: props.gridSize,       // 聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，默认为60，以像素为单位
      averageCenter: props.averageCenter, // 每个聚和簇的中心是否应该是聚类中所有标记的平均值
      maxZoom: props.maxZoom, // 采用聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
    });
    let aggregationPoints: AggregationPointsObj[] = [];
    let scatteredPoints:  ScatteredPointsObj[] = [];
    markerCluster.on('cluster_changed', () => {
      // 根据新的聚合簇数组生成新的覆盖物和点标记图层
      aggregationPoints = [];
      scatteredPoints = [];
      const clusters = markerCluster.getClusters();
      let arr: number[] = [];
      clusters.forEach((item: TMap.ClusterInfo) => {
        if (item.geometries.length > 1 && arr.indexOf(item.geometries.length) === -1) {
          arr.push(item.geometries.length);
        }
      });
      // 根据图形个数的多少排序，排序靠后的聚合后图形更大
      arr = arr.sort((a: number, b: number) => a - b);
      const zoomNum = map.value.getZoom();
      clusters.forEach((item: TMap.ClusterInfo) => {
        const content = item.geometries.length;
        if (zoomNum >= props.maxZoom) {
          // 单独的图标
          scatteredPoints.push({
            center: item.center,
            data: item,
          });
        } else {
          if (item.geometries.length > 1) {
            // 聚合效果
            const num = arr.indexOf(content);
            // 根据点位的多少决定聚合圈的大小
            const textPx = `${30 + num * 0.5 + String(content).length * 8}px`;
            aggregationPoints.push({
              center: item.center,
              width: textPx,
              height: textPx,
              'line-height': textPx,
              content,
              sort: num,
              data: item,
            });
          } else {
            // 单独的图标
            scatteredPoints.push({
              center: item.center,
              data: item,
            });
          }
        }
      });
      context.emit('clusterchange', scatteredPoints, aggregationPoints);
    });

    // const resetFun = (position: TMap.LatLng) => {
    //   // 经纬度坐标转容器像素坐标
    //   const pixel = map.value.projectToContainer(position);
    //   // 使文本框中心点对齐经纬度坐标点
    //   const x = pixel.getX();
    //   const y = pixel.getY();
    //   return { x, y };
    // };

    useEventListener(markerCluster, context);
    onUnmounted(() => {
      markerCluster.setMap(null);
    });
    watch(
      () => props.geometries,
      (geometries) => {
        markerCluster.setGeometries(getGeometries(geometries));
      },
    );
    // 提供给ref实例使用
    return {
      aggregationPoints,
      scatteredPoints,
    };
  },
  render() {
    return null;
  },
});
