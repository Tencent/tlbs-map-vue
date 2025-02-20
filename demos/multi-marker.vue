<template>
  <tlbs-map
    ref="mapRef"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
    @map_inited="onMapInited"
  >
    <tlbs-multi-marker
      ref="markerRef"
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印点标记实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MarkerDemo',
  setup() {
    const mapRef = ref(null);
    const markerRef = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(10);
    const onClick = (e: Event) => {
      console.log(e);
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、点标记实例，调用地图实例、点标记实例方法
      console.log(mapRef.value.map);
      console.log(markerRef.value.marker);
    };

    const getLayerInstance = () => {
      // 可以获取点标记实例，调用点标记实例方法
      console.log(markerRef.value.marker);
    };

    return {
      center,
      zoom,
      onClick,
      onMapInited,
      getLayerInstance,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      mapRef,
      markerRef,
      geometries: [
        { styleId: 'marker',  position: { lat: 39.91799, lng: 116.397027 } },
      ],
      styles: {
        marker: {
          width: 20,
          height: 30,
          anchor: { x: 10, y: 30 },
        },
      },
      options: {
        minZoom: 5,
        maxZoom: 15,
      },
    };
  },
});
</script>
