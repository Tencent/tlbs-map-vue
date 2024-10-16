<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="8"
  >
    <tlbs-marker-cluster
      :geometries="geometries"
      :options="{
        zIndex: 1,
      }"
      :enable-default-style="false"
      @clusterchange="clusterChange"
    />

    <!-- 聚合点 -->
    <tlbs-dom-overlay
      v-for="(item, index) of aggregationPoints"
      :key="index"
      :position="item.center"
      :offset="offset"
    >
      <div
        class="polymerization formatClolr"
        :style="{
          width: item.width,
          height: item.height,
          'line-height': item['line-height']
        }"
        @click="domoOverlayClick(item)"
      >
        {{ item.content }}
      </div>
    </tlbs-dom-overlay>

    <!-- 分散点 -->
    <tlbs-dom-overlay
      v-for="(item, index) of scatteredPoints"
      :key="index"
      :position="item.center"
    >
      <div
        class="point_logo point_logo_0"
        :value="item.poiid"
        :style="item.transform"
        @click="openDetail(item)"
      >
        <div class="point_logo_polka_dot" />
      </div>
    </tlbs-dom-overlay>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';
interface AggregationPointsObj {
  center: TMap.LatLng, // 中心点位置
  width: string, // 默认宽度
  height: string, // 默认高度
  'line-height': string,
  content: string, // 聚合元素个数
  sort: number[], // 所有图形聚合后的元素个数排序后结果
  data: TMap.ClusterInfo, //  聚合簇属性
}
interface ScatteredPointsObj {
  center: TMap.LatLng,
  x: number, // 像素x坐标
  y: number, // 像素y坐标
  data: TMap.ClusterInfo // 聚合簇属性
}
export default defineComponent({
  name: 'MarkerClusterOverlayDemo',
  setup() {
    const geometries = [
      { position: { lat: 39.99799, lng: 116.397027 } },
      { position: { lat: 39.89799, lng: 116.397027 } },
      { position: { lat: 39.79799, lng: 116.397027 } },
      { position: { lat: 39.89799, lng: 116.297027 } },
      { position: { lat: 39.89799, lng: 116.497027 } },
    ];
    const map: any = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    // 监听聚合簇变化
    const aggregationPoints = ref<AggregationPointsObj[]>([]);
    const scatteredPoints = ref<ScatteredPointsObj[]>([]);
    const offset = ref({ x: 0, y: -30 });
    const clusterChange = (scatteredPoint: ScatteredPointsObj[], aggregationPoint: AggregationPointsObj[]) => {
      aggregationPoints.value = aggregationPoint;
      scatteredPoints.value = scatteredPoint;
    };
    const domoOverlayClick = (item: AggregationPointsObj) => {
      map.value.map.fitBounds(item.data.bounds);
    };
    const openDetail = (item: ScatteredPointsObj) => {
      console.log(item);
      console.log('查看详情');
    };

    return {
      center,
      clusterChange,
      map,
      geometries,
      offset,
      aggregationPoints,
      scatteredPoints,
      domoOverlayClick,
      openDetail,
    };
  },
});
</script>

<style>
.polymerization {
  border-radius: 50%;
  color: #fff;
  font-weight: 500;
  text-align: center;
  opacity: 0.95;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
}

.formatClolr {
  background: linear-gradient(138.59deg, rgba(255, 118, 118, 0.9) 11.12%, rgba(255, 61, 61, 0.9) 75.89%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 0px 8px rgba(0, 0, 0, 0.08);
}
.point_logo {
  width: 42px;
  height: 49px;
  position: absolute;
  text-align: center;
  line-height: 42px;
}
.point_logo_polka_dot {
  width: 16px;
  height: 16px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  background: #f36d78;
  border-radius: 50%;
}
</style>
