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
    <div class="control-container">
      <button @click.stop="switchInfoWindow">
        {{ visible ? '关闭' : '开启' }}窗口
      </button>
    </div>
    <tlbs-heat
      ref="heatRef"
      :data="heatData"
      :max="350"
      :min="0"
      :height="0"
      :radius="30"
      :gradient-color="gradientColor"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印热力图实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi';

export default defineComponent({
  name: 'HeatDemo',
  setup() {
    const mapRef = ref(null);
    const heatRef = ref(null);
    const center = ref({ lat: 39.909897147274364, lng: 116.39756310116866 });
    const zoom = ref(11);
    const heatData = ref([]);
    const visible = ref(true);
    const onClick = (e: Event) => {
      console.log(e);
    };

    onMounted(async () => {
      await loadHeatData();
      heatData.value = (window as any).heatData || [];
    });

    const switchInfoWindow = () => {
      visible.value = !visible.value;
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、热力图实例，调用地图实例、热力图实例方法
      console.log(mapRef.value.map);
      console.log(heatRef.value.heat);
    };

    const getLayerInstance = () => {
      // 可以获取热力图实例，调用热力图实例方法
      console.log(heatRef.value.heat);
    };

    return {
      visible,
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
      heatRef,
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
      switchInfoWindow,
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
