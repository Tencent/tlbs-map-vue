<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <tlbs-multi-circle
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'CircleDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(15);
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
        { styleId: 'circle', radius: 500,  center: { lat: 39.91799, lng: 116.397027 } },
      ],
      styles: {
        circle: {
          color: 'rgba(41,91,255,0.16)',
          showBorder: true,
          borderColor: 'rgba(41,91,255,1)',
          borderWidth: 2,
        },
      },
      options: {
        zIndex: 1,
      },
    };
  },
});
</script>
