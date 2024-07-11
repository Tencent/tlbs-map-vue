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
  name: `${prefix}Heat`,
  props: {
    // 热力数据
    data: {
      type: Array as PropType<TMap.visualization.HeatPoint[]>,
      required: true,
    },
    // 最大辐射半径
    radius: {
      type: Number,
      default: 50,
    },
    // 峰值高度
    height: {
      type: Number,
      default: 100,
    },
    // 全局透明度
    opacity: {
      type: Number,
      default: 0.8,
    },
    // 热力最弱阈值
    min: {
      type: Number,
      default: 0,
    },
    // 热力最强阈值
    max: {
      type: Number,
      required: false,
    },
    // 渐变颜色
    gradientColor: {
      type: Object as PropType<TMap.GradientColorOptions>,
      required: false,
    },
    options: {
      type: Object as PropType<TMap.visualization.HeatOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 初始化热力图
    const heat = new TMap.visualization.Heat({
      ...props.options,
      radius: props.radius,
      height: props.height,
      opacity: props.opacity,
      min: props.min,
      max: props.max,
    });
    heat.addTo(toRaw(map.value));
    // 调用方法设置渐变色、设置max属性
    props.gradientColor && heat.setGradientColor(new TMap.GradientColor(props.gradientColor));
    props.max && heat.setMax(props.max);
    // 热力图层设置热力值数据
    heat.setData(props.data);
    // 调用销毁方法
    onUnmounted(() => {
      heat.remove();
      heat.destroy();
    });
    // 对属性进行监听，变化时调用对应设置方法改变图层
    watch(() => props.gradientColor, (gradientColor) => {
      gradientColor && heat.setGradientColor(new TMap.GradientColor(gradientColor));
    });
    watch(() => props.data, (data) => {
      heat.setData(data);
    });
    watch(() => props.radius, (radius) => {
      heat.setRadius(radius);
    });
    watch(() => props.height, (height) => {
      heat.setHeight(height);
    });
    watch(() => props.opacity, (opacity) => {
      heat.setOpacity(opacity);
    });
    watch(() => props.min, (min) => {
      heat.setMin(min);
    });
    watch(() => props.max, (max) => {
      max && heat.setMax(max);
    });

    // 提供给ref实例使用
    return {
      heat,
    };
  },
  render() {
    return null;
  },
});
