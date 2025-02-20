<template>
  <tlbs-map
    ref="mapRef"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="8"
    :control="control"
    @click="onClick"
    @map_inited="onMapInited"
  >
    <tlbs-marker-cluster
      ref="markerClusterRef"
      :geometries="geometries"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印点聚合实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MarkerClusterDemo',
  setup() {
    const mapRef = ref(null);
    const markerClusterRef = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const onClick = (e: Event) => {
      console.log(e);
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、点聚合实例，调用地图实例、点聚合实例方法
      console.log(mapRef.value.map);
      console.log(markerClusterRef.value.markerCluster);
    };

    const getLayerInstance = () => {
      // 可以获取点聚合实例，调用点聚合实例方法
      console.log(markerClusterRef.value.markerCluster);
    };
    return {
      center,
      onClick,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      mapRef,
      markerClusterRef,
      geometries: [
        { position: { lat: 39.99799, lng: 116.397027 } },
        { position: { lat: 39.89799, lng: 116.397027 } },
        { position: { lat: 39.79799, lng: 116.397027 } },
        { position: { lat: 39.89799, lng: 116.297027 } },
        { position: { lat: 39.89799, lng: 116.497027 } },
      ],
      options: {
        zIndex: 1,
      },
      onMapInited,
      getLayerInstance,
    };
  },
});
</script>

