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
    <tlbs-multi-polyline
      ref="polylineRef"
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印折线实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';
// 普通折线路径
const paths = [
  { lat: 40.041117253378246, lng: 116.2722415837743 },
  { lat: 40.03942536171407, lng: 116.2726277820093 },
  { lat: 40.03970460886076, lng: 116.27483769345417 },
  { lat: 40.041404706498625, lng: 116.27443003983899 },
];

// 彩虹折线路径
const rainbowPaths = [
  {
    path: [
      { lat: 40.03819372750479, lng: 116.26842823488005 },
      { lat: 40.03850574866959, lng: 116.27198887995291 },
      { lat: 40.038932722719686, lng: 116.27529212938498 },
    ],
    color: '#ED273D',
    borderColor: '#9C1C2A',
  },
  {
    path: [
      { lat: 40.038932722719686, lng: 116.27529212938498 },
      { lat: 40.039540301341184, lng: 116.27835947187123 },
    ],
    color: '#2C68FF',
    borderColor: '#004EE1',
  },
];

export default defineComponent({
  name: 'PolylineDemo',
  setup() {
    const mapRef = ref(null);
    const polylineRef = ref(null);
    const center = ref({ lat: 40.040452, lng: 116.273486 });
    const zoom = ref(16);
    const onClick = (e: Event) => {
      console.log(e);
    };
    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、折线实例，调用地图实例、折线实例方法
      console.log(mapRef.value.map);
      console.log(polylineRef.value.polyline);
    };

    const getLayerInstance = () => {
      // 可以获取折线实例，调用折线实例方法
      console.log(polylineRef.value.polyline);
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
      polylineRef,
      geometries: [
        // 普通折线
        {
          id: 'polyline1',
          styleId: 'polyline',
          paths,
          properties: {
            title: 'polyline',
          },
        },
        // 彩虹折线
        {
          id: 'polyline2',
          styleId: 'polyline',
          rainbowPaths,
          properties: {
            title: 'polyline',
          },
        },
      ],
      styles: {
        polyline: {
          color: '#2C68FF', // 线填充色
          borderWidth: 2, // 边线宽度
          borderColor: '#004EE1', // 边线颜色
        },
      },
      options: {
        zIndex: 1,
      },
      onMapInited,
      getLayerInstance,
    };
  },
});
</script>

