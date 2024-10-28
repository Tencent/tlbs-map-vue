// 从vue-demi导出App用于兼容不同vue版本
import { App } from 'vue-demi';
import BaseMap from './map';
import MultiMarker from './multi-marker';
import MarkerCluster from './marker-cluster';
import MultiPolygon from './multi-polygon';
import MultiPolyline from './multi-polyline';
import MultiCircle from './multi-circle';
import MultiLabel from './multi-label';
import DomOverlay from './dom-overlay';
import Heat from './heat';
import GeometryEditor from './geometry-editor';
import Arc from './arc';
import Grid from './grid';
import Area from './area';
import InfoWindow from './info-window';
import Dot from './dot';

const components = [
  BaseMap,
  MultiMarker,
  MultiPolygon,
  MultiPolyline,
  MultiCircle,
  DomOverlay,
  MultiLabel,
  Heat,
  GeometryEditor,
  MarkerCluster,
  Arc,
  Grid,
  Area,
  InfoWindow,
  Dot,
];
// 导出各个组件
export {
  BaseMap,
  MultiMarker,
  MultiPolygon,
  MultiPolyline,
  MultiCircle,
  MultiLabel,
  DomOverlay,
  Heat,
  GeometryEditor,
  MarkerCluster,
  Arc,
  Grid,
  Area,
  InfoWindow,
  Dot,
};
// 提供安装方法
export default {
  install(app: App): void {
    components.forEach(component => app.component(component.name as string, component));
  },
};
