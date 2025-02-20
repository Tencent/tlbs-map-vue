<template>
  <tlbs-map
    ref="mapRef"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="handleClick"
    @map_inited="onMapInited"
  >
    <div style="position: absolute;top: 0;left: 0;z-index: 2000;">
      <button
        @click.stop="mode='draw'"
      >
        设置绘制模式
      </button>
      <button
        @click.stop="mode='edit'"
      >
        设置编辑模式
      </button>
      <button
        @click.stop="activeId = 'polygon'"
      >
        设置画多边形
      </button>
      <button
        @click.stop="activeId = 'circle'"
      >
        设置画圆形
      </button>
      <button
        @click.stop="getOverlayList"
      >
        获取图层列表
      </button>
      <button
        @click.stop="onSelectGeometry"
      >
        选中图形
      </button>
      <button
        @click.stop="onGetSelectedList"
      >
        获取选中集合图形
      </button>
      <button
        @click.stop="onClear"
      >
        清空选中
      </button>
    </div>
    <!--vue2使用:active-overlay-id.sync="activeId" -->
    <tlbs-geometry-editor
      ref="editorRef"
      v-model:active-overlay-id="activeId"
      :action-mode="mode"
      polygon-id="polygon"
      :default-polygon-geometries="geometries"
      :polygon-styles="styles"
      selectable
      @select="onSelect"
      @draw_complete="onDrowComplet"
      @adjust_complete="onAdjustComplete"
      @draw_error="onDrawError"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';
const paths = [
  { lat: 40.041117253378246, lng: 116.2722415837743 },
  { lat: 40.03942536171407, lng: 116.2726277820093 },
  { lat: 40.03970460886076, lng: 116.27483769345417 },
  { lat: 40.041404706498625, lng: 116.27443003983899 },
];

export default defineComponent({
  name: 'GeometryEditorDemo',
  setup() {
    const mapRef = ref(null);
    const center = ref({ lat: 40.040452, lng: 116.273486 });
    const zoom = ref(17);
    const editorRef = ref<any>(null);
    const mode = ref('edit');
    const activeId = ref('polygon');
    const onToggleMode = () => {
      mode.value = mode.value === 'draw' ? 'edit' : 'draw';
    };

    const onSelect = (e: TMap.PolygonGeometry | TMap.CircleGeometry) => {
      console.log('select', e);
    };
    const onDrowComplet = (geomeytry: TMap.PolygonGeometry | TMap.CircleGeometry) => {
      console.log(geomeytry);
    };
    const onAdjustComplete = (geomeytry: TMap.PolygonGeometry | TMap.CircleGeometry) => {
      console.log(geomeytry);
    };
    const onDrawError = (e: TMap.MapEvent) => {
      console.log(e);
    };

    const getOverlayList = () => {
      console.log(editorRef.value.editor.getOverlayList());
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例，调用地图实例方法
      console.log(mapRef.value.map);
    };

    return {
      center,
      zoom,
      onMapInited,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      mapRef,
      editorRef,
      geometries: [
        {
          id: 'firstPolygon',
          styleId: 'polygon', // 样式id
          paths, // 多边形的位置信息
          properties: {
            // 多边形的属性数据
            title: 'polygon',
          },
        },
      ],
      styles: {
        polygon: {
          color: '#3777FF', // 面填充色
          showBorder: false, // 是否显示拔起面的边线
          borderColor: '#00FFFF', // 边线颜色
        },
      },
      mode,
      activeId,
      onToggleMode,
      onSelect,
      onDrowComplet,
      onAdjustComplete,
      onDrawError,
      getOverlayList,
      handleClick(e: TMap.MapEvent) {
        console.log(e);
      },
      onClear() {
        editorRef.value.editor.select([]);
      },
      onSelectGeometry() {
        editorRef.value.editor.select(['firstPolygon']);
      },
      onGetSelectedList() {
        console.log(editorRef.value.editor.getSelectedList());
      },
    };
  },
});
</script>
<style scoped>
button {
  padding: 4px;
  background-color: #fff;
  margin-right: 5px;
  border: 1px solid #ddd;
}
</style>
