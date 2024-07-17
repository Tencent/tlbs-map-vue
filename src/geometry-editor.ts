// 图形编辑器组件
import {
  defineComponent,
  inject,
  onUnmounted,
  PropType,
  Ref,
  toRaw,
  watch,
  isVue2,
} from 'vue-demi';
import { prefix } from './config';
import { getStyle as getCircleStyle, getGeometries as getCircleGeometries } from './multi-circle';
import { getStyle as getPolygonStyle, getGeometries as getPolygonGeometries } from './multi-polygon';
import useEventListener from './composables/useEventListener';

const props = {
  circleId: {
    type: String,
    default: 'circle',
  },
  defaultCircleGeometries: {
    type: Array as PropType<TMap.CircleGeometry[]>,
  },
  circleStyles: {
    type: Object as PropType<TMap.MultiCircleStyleHash>,
  },
  circleDrawingStyleId: {
    type: String,
    default: 'default',
  },
  circleSelectedStyleId: {
    type: String,
    default: 'default',
  },
  polygonId: {
    type: String,
    default: 'polygon',
  },
  defaultPolygonGeometries: {
    type: Array as PropType<TMap.PolygonGeometry[]>,
  },
  polygonStyles: {
    type: Object as PropType<TMap.MultiPolygonStyleHash>,
  },
  polygonDrawingStyleId: {
    type: String,
    default: 'default',
  },
  polygonSelectedStyleId: {
    type: String,
    default: 'default',
  },
  activeOverlayId: {
    type: String,
    default: 'polygon',
  },
  actionMode: {
    type: String,
    default: 'draw',
  },
  snappable: {
    type: Boolean,
    default: false,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Object as PropType<TMap.tools.GeometryEditorOptions>,
    default: () => ({}),
  },
};

export default defineComponent({
  name: `${prefix}GeometryEditor`,
  props,
  emits: ['select', 'update:activeOverlayId'],
  setup(props, context) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 获取地图实例
    const mapInstance = toRaw(map.value);
    // 初始化圆图层
    const circle = new TMap.MultiCircle({
      id: props.circleId,
      map: mapInstance,
      styles: props.circleStyles ? getCircleStyle(props.circleStyles) : {},
      geometries: props.defaultCircleGeometries ? getCircleGeometries(props.defaultCircleGeometries) : [],
    });
    // 初始化多边形图层
    const polygon = new TMap.MultiPolygon({
      id: props.polygonId,
      map: mapInstance,
      styles: props.polygonStyles ? getPolygonStyle(props.polygonStyles) : {},
      geometries: props.defaultPolygonGeometries ? getPolygonGeometries(props.defaultPolygonGeometries) : [],
    });
    // 绑定图层事件
    circle.on('click', (event: TMap.GeometryOverlayEvent<TMap.MultiCircleleEvent>) => {
      if (props.actionMode !== 'draw') {
        context.emit('select', event.geometry);
        context.emit('update:activeOverlayId', props.circleId);
      }
    });
    // 绑定图层事件
    polygon.on('click', (event: TMap.GeometryOverlayEvent<TMap.MultiPolygonEvent>) => {
      if (props.actionMode !== 'draw') {
        context.emit('select', event.geometry);
        context.emit('update:activeOverlayId', props.polygonId);
      }
    });
    // 初始化图形编辑器
    const editor = new TMap.tools.GeometryEditor({
      ...props.options,
      map: mapInstance, // 编辑器绑定的地图对象
      overlayList: [ // 可编辑图层
        {
          overlay: polygon,
          id: props.polygonId,
          selectedStyleId: props.polygonSelectedStyleId,
          drawingStyleId: props.polygonDrawingStyleId,
        },
        {
          overlay: circle,
          id: props.circleId,
          selectedStyleId: props.circleSelectedStyleId,
          drawingStyleId: props.circleDrawingStyleId,
        },
      ],
      actionMode: props.actionMode === 'draw' ? TMap.tools.constants.EDITOR_ACTION.DRAW : TMap.tools.constants.EDITOR_ACTION.INTERACT, // 编辑器的工作模式
      activeOverlayId: props.activeOverlayId, // 激活图层
      selectable: props.selectable, // 开启点选功能
      snappable: props.snappable, // 开启吸附
    });
    // 绑定组件事件
    // @ts-ignore
    if (isVue2 && context.listeners.select) {
      // @ts-ignore
      delete context.listeners.select;
    }
    // @ts-ignore
    useEventListener(editor, context);
    // 调用销毁方法
    onUnmounted(() => {
      circle.setMap(null);
      polygon.setMap(null);
      try {
        editor.setMap(null);
      } catch (error) {
        console.error(error);
      }
    });
    // 监听组件属性
    watch(
      () => props.circleStyles,
      (styles) => {
        styles && circle.setStyles(getCircleStyle(styles));
      },
    );

    watch(
      () => props.polygonStyles,
      (styles) => {
        styles && polygon.setStyles(getPolygonStyle(styles));
      },
    );

    watch(() => props.activeOverlayId, id => id && editor.setActiveOverlay(id));

    watch(() => props.actionMode, mode => mode && editor.setActionMode(mode === 'draw' ? TMap.tools.constants.EDITOR_ACTION.DRAW : TMap.tools.constants.EDITOR_ACTION.INTERACT));

    // 提供给ref实例使用
    return {
      circle,
      polygon,
      editor,
    };
  },
  render() {
    return null;
  },
});
