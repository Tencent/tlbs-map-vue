
<template>
  <tlbs-map
    ref="mapRef"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @map_inited="onMapInited"
  >
    <tlbs-dot
      ref="dotRef"
      :data="dotData"
      :styles="styles"
      :select-options="selectOptions"
      @click="onClick"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印散点图实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue-demi';

export default defineComponent({
  name: 'DotDemo',
  setup() {
    const mapRef = ref(null);
    const dotRef = ref(null);
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

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、散点图实例，调用地图实例、散点图实例方法
      console.log(mapRef.value.map);
      console.log(dotRef.value.dot);
    };

    const getLayerInstance = () => {
      // 可以获取散点图实例，调用散点图实例方法
      console.log(dotRef.value.dot);
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
      dotRef,
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
      onMapInited,
      getLayerInstance,
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

