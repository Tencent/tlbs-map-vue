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
    <tlbs-grid
      ref="gridRef"
      :data="heatData"
      :extrudable="true"
      :side-length="1000"
      :height-range="[1, 1000]"
      :show-range="[1, 100]"
      :color-lis="['#ea9c21', '#ea8e21', '#e6721c', '#e55f1d', '#cc2a18']"
      :options="options"
      :select-options="selectOptions"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印网格图实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi';

export default defineComponent({
  name: 'GridDemo',
  setup() {
    const mapRef = ref(null);
    const gridRef = ref(null);
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

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、网格图实例，调用地图实例、网格图实例方法
      console.log(mapRef.value.map);
      console.log(gridRef.value.grid);
    };

    const getLayerInstance = () => {
      // 可以获取网格图实例，调用网格图实例方法
      console.log(gridRef.value.grid);
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
      mapRef,
      gridRef,
      // @ts-ignore
      heatData,
      options: {
        minZoom: 5,
      },
      selectOptions: {
        action: 'click', // 拾取动作
        style: '#E9AB1D',
        enableHighlight: false, // 是否使用高亮效果
      },
      onMapInited,
      getLayerInstance,
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
