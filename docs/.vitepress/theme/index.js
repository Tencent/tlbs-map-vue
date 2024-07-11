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

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(component);
    app.component('MapDemo', Map);
    app.component('MarkerDemo', Marker);
    app.component('PolygonDemo', Polygon);
    app.component('PolylineDemo', Polyline);
    app.component('CircleDemo', Circle);
    app.component('DomOverlayDemo', DomOverlay);
    app.component('HeatDemo', Heat);
    app.component('GeometryEditorDemo', GeometryEditor);
    app.component('MarkerClusterDemo', MarkerCluster);
    app.component('MarkerClusterOverlayDemo', MarkerClusterOverlay);
    app.component('LabelDemo', Label);
  },
};
