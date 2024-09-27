
import {
  defineComponent,
  inject,
  onUnmounted,
  PropType,
  Ref,
  toRaw,
  watch,
} from 'vue-demi';
import { prefix } from './config';

export default defineComponent({
  name: `${prefix}Grid`,
  props: {
    // 网格数据
    data: {
      type: Array as PropType<TMap.visualization.HeatPoint[]>,
      required: true,
    },
    sideLength: {
      type: Number,
      required: false,
      default: 1000,
    },
    extrudable: {
      type: Boolean,
      required: false,
      default: true,
    },
    colorList: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => (['#D8AFA7', '#842610', '#641200']),
    },
    heightRange: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => ([1, 100]),
    },
    showRange: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => ([]),
    },
    options: {
      type: Object as PropType<TMap.visualization.GridOptions>,
      required: false,
      default: () => ({}),
    },
    selectOptions: {
      type: Object as PropType<TMap.visualization.VisualSelectOptions>,
      required: false,
      default: null,
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化热力图
    const grid = new TMap.visualization.Grid({
      ...props.options,
      sideLength: props.sideLength, // 设置网格边长
      extrudable: props.extrudable, // 网格是否可拔起
      colorList: props.colorList, // 颜色层级
      heightRange: props.heightRange, // 高度变化区间
      showRange: props.showRange, // 聚合数据显示区间
    });
    grid.addTo(toRaw(map.value));
    // 热力图层设置热力值数据
    grid.setData(props.data);

    props.selectOptions && grid.setSelectOptions(props.selectOptions);
    // 调用销毁方法
    onUnmounted(() => {
      grid.remove();
      grid.destroy();
    });
    // 对属性进行监听，变化时调用对应设置方法改变图层
    watch(() => props.showRange, (showRange) => {
      grid.setShowRange(showRange);
    });
    watch(() => props.sideLength, (sideLength) => {
      grid.setSideLength(sideLength);
    });

    watch(() => props.extrudable, (extrudable) => {
      grid.setExtrudable(extrudable);
    });
    watch(() => props.colorList, (colorList) => {
      grid.setColorList(colorList);
    });
    watch(() => props.heightRange, (heightRange) => {
      grid.setHeightRange(heightRange);
    });
    watch(() => props.data, (data) => {
      grid.setData(data);
    });

    watch(() => props.options.zIndex, (zIndex) => {
      zIndex !== undefined && grid.setZIndex(zIndex);
    });
    watch(() => props.options.minZoom, (minZoom) => {
      minZoom && grid.setMinZoom(minZoom);
    });
    watch(() => props.options.maxZoom, (maxZoom) => {
      maxZoom && grid.setMaxZoom(maxZoom);
    });
    // 提供给ref实例使用
    return {
      grid,
    };
  },
  render() {
    return null;
  },
});
