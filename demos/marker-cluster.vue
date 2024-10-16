<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="8"
    :control="control"
    @click="onClick"
  >
    <tlbs-marker-cluster
      :geometries="geometries"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MarkerClusterDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const onClick = (e: Event) => {
      console.log(e);
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
      map,
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
    };
  },
});
</script>

