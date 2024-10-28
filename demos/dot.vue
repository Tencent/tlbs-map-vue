
<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
  >
    <tlbs-dot
      :data="dotData"
      :styles="styles"
      :select-options="selectOptions"
      @click="onClick"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue-demi';

export default defineComponent({
  name: 'DotDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.984104, lng: 116.307503 });
    const zoom = ref(8);
    const dotData = ref([]);

    onMounted(async () => {
      await loadDotData();
      dotData.value = (window as any).pointData || [];
    });

    const onClick = (e: TMap.visualization.VisualEvent) => {
      console.log(e.detail.dot);
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
      map,
      dotData,
      styles: {
        type: 'circle', // 圆形样式
        fillColor: '#1CD5FF', // 填充颜色
        radius: 5, // 原型半径
      },
      selectOptions: { // 拾取配置
        action: 'hover', // 拾取动作
        style: {
          type: 'circle', // 圆形样式
          fillColor: '#1CD5FF', // 填充颜色
          radius: 5, // 原型半径
        },
        enableHighlight: false, // 是否使用高亮效果
      },
      onClick,
    };
  },
});

const loadDotData = () => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/data/Dot.js';
  script.addEventListener('load', () => {
    resolve('loaded');
  });
  document.body.appendChild(script);
});
</script>

