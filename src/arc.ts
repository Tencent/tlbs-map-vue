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
  name: `${prefix}Arc`,
  props: {
    // 弧线数据
    data: {
      type: Array as PropType<TMap.visualization.ArcLine[]>,
      required: true,
    },
    // 弧线图样式映射函数，接收ArcLine数据返回对应样式，样式对象规范详见TMap.visualization.ArcStyle
    pickStyle: {
      type: Function,
      require: false,
    },
    // 弧线模式，horizontal 代表贴地的弧线，vertical 代表弧线所在平面会垂直于底图平面，默认为vertical。
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical',
    },
    options: {
      type: Object as PropType<TMap.visualization.ArcOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化弧线图
    const arc = new TMap.visualization.Arc({
      ...props.options,
      mode: props.mode,
    });
    arc.addTo(toRaw(map.value));
    props.pickStyle && arc.setPickStyle(props.pickStyle);
    // 设置弧线数据
    arc.setData(props.data);
    // 调用销毁方法
    onUnmounted(() => {
      arc.remove();
      arc.destroy();
    });
    // 对属性进行监听，变化时调用对应设置方法改变图层
    watch(() => props.pickStyle, (pickStyle) => {
      pickStyle && arc.setPickStyle(pickStyle);
    });
    watch(() => props.data, (data) => {
      arc.setData(data);
    });
    watch(() => props.mode, (mode) => {
      arc.setMode(mode);
    });
    // 提供给ref实例使用
    return {
      arc,
    };
  },
  render() {
    return null;
  },
});
