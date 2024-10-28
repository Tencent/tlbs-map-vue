
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
import useEventListener from './composables/useEventListener';

export default defineComponent({
  name: `${prefix}Dot`,
  props: {
    // 散点数据
    data: {
      type: Array as PropType<TMap.visualization.DotPoint[]>,
      required: true,
    },
    // 散点样式
    styles: {
      type: Object as PropType<{ [key: string]: TMap.visualization.DotCircleStyle | TMap.visualization.DotImageStyle }>,
      required: true,
    },
    // 散点固定朝向
    faceTo: {
      type: String as PropType<'map' | 'screen'>,
      default: 'screen',
    },
    // 拾取配置
    selectOptions: {
      type: Object as PropType<TMap.visualization.VisualSelectOptions>,
      default: () => ({}),
    },
    // 散点图呈现泛光效果
    enableBloom: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object as PropType<TMap.visualization.DotOptions>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }

    const dot = new TMap.visualization.Dot({
      ...props.options,
      styles: props.styles,
      faceTo: props.faceTo,
      enableBloom: props.enableBloom,
      selectOptions: props.selectOptions,
    });
    dot.addTo(toRaw(map.value));
    dot.setData(props.data);
    // 绑定图层事件
    useEventListener(dot, context);
    // 调用销毁方法
    onUnmounted(() => {
      dot.remove();
      dot.destroy();
    });

    watch(() => props.data, (data) => {
      dot.setData(data);
    });
    watch(() => props.styles, (styles) => {
      dot.setStyles(styles);
    });
    watch(() => props.faceTo, (faceTo) => {
      dot.setFaceTo(faceTo);
    });
    watch(() => props.selectOptions, (selectOptions) => {
      dot.setSelectOptions(selectOptions);
    });

    // 提供给ref实例使用
    return {
      dot,
    };
  },
  render() {
    return null;
  },
});
