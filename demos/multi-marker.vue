<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <tlbs-multi-marker
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MarkerDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(10);
    const onClick = (e: Event) => {
      console.log(e);
    };
    return {
      center,
      zoom,
      onClick,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      map,
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

