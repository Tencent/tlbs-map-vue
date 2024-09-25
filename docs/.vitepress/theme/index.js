import theme from 'vitepress/theme';
import component from '../../../src/index';
import Map from '../../../demos/map.vue';
import Marker from '../../../demos/multi-marker.vue';
import Polygon from '../../../demos/multi-polygon.vue'
import Polyline from '../../../demos/multi-polyline.vue'
import Circle from '../../../demos/multi-circle.vue';
import DomOverlay from '../../../demos/dom-overlay.vue';
import Heat from '../../../demos/heat.vue';
import GeometryEditor from '../../../demos/geometry-editor.vue';
import MarkerCluster from '../../../demos/marker-cluster.vue';
import MarkerClusterOverlay from '../../../demos/marker-cluster-overlay.vue';
import Label from '../../../demos/multi-label.vue';
import Arc from '../../../demos/arc.vue';
import InfoWindow from '../../../demos/info-window.vue';

const components = [
  Map,
  Marker,
  Polygon,
  Polyline,
  Circle,
  DomOverlay,
  Heat,
  GeometryEditor,
  MarkerCluster,
  MarkerClusterOverlay,
  Label,
  Arc,
  InfoWindow,
];

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(component);
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
