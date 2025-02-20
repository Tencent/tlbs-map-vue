<template>
  <tlbs-map
    ref="mapRef"
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
    @map_inited="onMapInited"
  >
    <tlbs-arc
      ref="arcRef"
      :data="arcData"
      :pick-style="pickStyle"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印弧线图实例
      </button>
    </div>
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
    const mapRef = ref(null);
    const arcRef = ref(null);
    const center = ref({ lat: 37.80787, lng: 112.269029 });
    const zoom = ref(5);
    const arcData = ref([]);

    onMounted(async () => {
      await loadData();
      arcData.value = (window as any).arcData || [];
    });

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、弧线图实例，调用地图实例、弧线图实例方法
      console.log(mapRef.value.map);
      console.log(arcRef.value.arc);
    };

    const getLayerInstance = () => {
      // 可以获取弧线图实例，调用弧线图实例方法
      console.log(arcRef.value.arc);
    };

    return {
      center,
      zoom,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      mapRef,
      arcRef,
      onMapInited,
      getLayerInstance,
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
