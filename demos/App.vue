<template>
  <div>
    <h2>基础地图</h2>
    <MapDemo />
    <h2>点标记</h2>
    <MarkerDemo />
    <h2>点聚合</h2>
    <MarkerCluster />
    <h2>点聚合（自定义样式）</h2>
    <MarkerClusterOverlay />
    <h2>多边形</h2>
    <PolygonDemo />
    <h2>折线</h2>
    <PolylineDemo />
    <h2>圆形</h2>
    <CircleDemo />
    <h2>自定义覆盖物</h2>
    <DomOverlay />
    <h2>地图编辑器</h2>
    <GeometryEditor />
    <h2>文本标记</h2>
    <LabelDemo />
    <h2>热力图</h2>
    <HeatDemo />
    <h2>弧线图</h2>
    <ArcDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import MapDemo from './map.vue';
import MarkerDemo from './multi-marker.vue';
import HeatDemo from './heat.vue';
import CircleDemo from './multi-circle.vue';
import DomOverlay from './dom-overlay.vue';
import PolygonDemo from './multi-polygon.vue';
import LabelDemo from './multi-label.vue';
import PolylineDemo from './multi-polyline.vue';
import GeometryEditor from './geometry-editor.vue';
import MarkerCluster from './marker-cluster.vue';
import MarkerClusterOverlay from './marker-cluster-overlay.vue';
import ArcDemo from './arc.vue';
import InfoWindow from './info-window.vue';

const components = {
  MapDemo,
  MarkerDemo,
  PolygonDemo,
  PolylineDemo,
  HeatDemo,
  CircleDemo,
  LabelDemo,
  DomOverlay,
  GeometryEditor,
  MarkerCluster,
  MarkerClusterOverlay,
  ArcDemo,
};

export default defineComponent({
  name: 'App',
  components,
});
</script>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 + div {
  margin: 0 auto;
  width: 80vw;
}
</style>
