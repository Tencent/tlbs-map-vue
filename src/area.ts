
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
  name: `${prefix}Area`,
  props: {
    // 数据
    data: {
      type: Array as PropType<TMap.visualization.AreaPlane[]>,
      required: true,
    },
    // 样式
    styles: {
      type: Object as PropType<TMap.visualization.AreaStyleHash>,
      required: true,
    },
    selectOptions: {
      type: Object as PropType<TMap.visualization.VisualSelectOptions>,
      required: false,
      default: () => null,
    },
    options: {
      type: Object as PropType<TMap.visualization.AreaOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化热力图
    const area = new TMap.visualization.Area({
      ...props.options,
      styles: props.styles, // 设置网格边长
    });
    props.selectOptions && area.setSelectOptions(props.selectOptions);
    // 热力图层设置热力值数据
    area.setData(props.data);
    area.addTo(toRaw(map.value));
    // 调用销毁方法
    onUnmounted(() => {
      area.remove();
      area.destroy();
    });
    // 对属性进行监听，变化时调用对应设置方法改变图层
    watch(() => props.styles, (styles) => {
      area.setStyles(styles);
    });
    watch(() => props.data, (data) => {
      area.setData(data);
    });
    watch(() => props.selectOptions, (selectOptions) => {
      selectOptions && area.setSelectOptions(selectOptions);
    });
    watch(() => props.options.zIndex, (zIndex) => {
      zIndex !== undefined && area.setZIndex(zIndex);
    });
    watch(() => props.options.minZoom, (minZoom) => {
      minZoom && area.setMinZoom(minZoom);
    });
    watch(() => props.options.maxZoom, (maxZoom) => {
      maxZoom && area.setMaxZoom(maxZoom);
    });
    // 提供给ref实例使用
    return {
      area,
    };
  },
  render() {
    return null;
  },
});
