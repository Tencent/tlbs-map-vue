<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    :options="{
      mapStyleId: 'style4',
      pitch: 46.9,
      rotation: 13.6,
      renderOptions: {
        enableBloom: true, // 泛光
      },
    }"
  >
    <tlbs-arc
      :data="arcData"
      :pick-style="pickStyle"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi';

interface ArcData extends TMap.visualization.ArcLine {
  count: number;
}

export default defineComponent({
  name: 'ArcDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 37.80787, lng: 112.269029 });
    const zoom = ref(5);
    const arcData = ref([]);

    onMounted(async () => {
      await loadData();
      arcData.value = (window as any).arcData || [];
    });

    return {
      center,
      zoom,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      map,
      // @ts-ignore
      arcData,
      options: {
        zIndex: 1,
      },
      pickStyle: (item: ArcData) => {
        let style;
        if (item.count < 7000) {
          style = {
            width: 3,
            color: 'rgba(230,129,28,0.1)',
            animateColor: '#FFCA1F',
          };
        } else {
          style = {
            width: 3,
            color: 'rgba(1,124,247,0.1)',
            animateColor: '#1DFAF2',
          };
        }
        return style;
      },
    };
  },
});

const loadData = () => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/data/arc.js';
  script.addEventListener('load', () => {
    resolve('loaded');
  });
  document.body.appendChild(script);
});
</script>
