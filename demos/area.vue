
<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <tlbs-area
      :data="areaData"
      :styles="{
        style1: {
          fillColor: 'rgba(56,124,234,0.7)', //设置区域填充颜色
          strokeColor: '#6799EA', //设置区域边线颜色
          strokeWidth: 1,
        }
      }"
      :select-options="selectOptions"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi';

export default defineComponent({
  name: 'AreaDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 40.046014541872594, lng: 116.28684997558594 });
    const zoom = ref(15);
    const onClick = (e: Event) => {
      console.log(e);
    };
    let datas: number[][] | number[][][] | number[][][][]	 = [];
    const areaData = ref<TMap.visualization.AreaPlane[]>([]);
    onMounted(async () => {
      await loadHeatData();
      datas = (window as any).areaDatas || [];
      const data: TMap.visualization.AreaPlane[] = [];
      datas.forEach((item) => {
        data.push({
          path: item, // 设置区域边界线经纬度点串
          styleId: 'styel1', // 设置区域样式id
        });
      });
      areaData.value = data;
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
      areaData,
      options: {
        minZoom: 5,
      },
      selectOptions: { // 设置拾取配置
        action: 'hover',
        style: {
          fillColor: 'rgba(28,213,255,0.8)', // 设置区域填充颜色
          strokeColor: '#fff', // 设置区域边线颜色
          strokeWidth: 1, // 区域边线宽度
          strokeDashArray: [0, 0], // 边线虚线展示方式
        },
        enableHighlight: false,
      },
      map,
    };
  },
});
const loadHeatData = () => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/data/areaClick.js';
  script.addEventListener('load', () => {
    resolve('loaded');
  });
  document.body.appendChild(script);
});
</script>

