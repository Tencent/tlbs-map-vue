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
  name: `${prefix}MultiLabel`,
  props: {
    // 图层id
    id: {
      type: String,
      default: 'multiLabel',
    },
    // 文本标注的相关样式
    styles: {
      type: Object as PropType<{ [key: string]: TMap.LabelStyleOptions }>,
      required: true,
    },
    // 文本标注数据数组
    geometries: {
      type: Array as PropType<TMap.LabelGeometry[]>,
      required: true,
    },
    // 其他初始化配置
    options: {
      type: Object as PropType<TMap.MultiLabelOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化图层
    const label = new TMap.MultiLabel({
      ...props.options,
      id: props.id,
      map: toRaw(map.value),
      styles: getStyle(props.styles),
      geometries: getGeometries(props.geometries),
    });
    // 绑定图层事件
    useEventListener(label, context);
    // 调用图层销毁方法
    onUnmounted(() => {
      label.setMap(null);
    });
    // 对styles和geometries变化做监听
    watch(
      () => props.styles,
      (styles) => {
        label.setStyles(getStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        label.setGeometries(getGeometries(geometries));
      },
    );

    // 提供给ref实例使用
    return {
      label,
    };
  },
  render() {
    return null;
  },
});

// 获取地图api所需样式
function getStyle(options: { [key: string]: TMap.LabelStyleOptions }) {
  const style: TMap.MultiLabelStyleHash = {};
  Object.keys(options).forEach((key) => {
    style[key] = new TMap.LabelStyle(options[key]);
  });
  return style;
}
// 获取地图api所需数据
export function getGeometries(geometries: TMap.LabelGeometry[]): TMap.LabelGeometry[] {
  return geometries.map(item => ({
    ...item,
    position: new TMap.LatLng(item.position.lat, item.position.lng),
  }));
}
