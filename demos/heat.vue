<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <tlbs-heat
      :data="heatData"
      :max="350"
      :min="0"
      :height="0"
      :radius="30"
      :gradient-color="gradientColor"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi';

export default defineComponent({
  name: 'HeatDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.909897147274364, lng: 116.39756310116866 });
    const zoom = ref(11);
    const heatData = ref([]);
    const onClick = (e: Event) => {
      console.log(e);
    };

    onMounted(async () => {
      await loadHeatData();
      heatData.value = (window as any).heatData || [];
    });

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
      // @ts-ignore
      heatData,
      gradientColor: {
        stops: {
          0.6: '#673198',
          0.8: '#e53390',
          0.9: '#ffc95a',
        },
      },
      options: {
        minZoom: 10,
        // maxZoom: 15,
      },
    };
  },
});

const loadHeatData = () => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/data/heat.js';
  script.addEventListener('load', () => {
    resolve('loaded');
  });
  document.body.appendChild(script);
});
</script>
