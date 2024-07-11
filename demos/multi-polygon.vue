<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <tlbs-multi-polygon
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';
const paths = [
  { lat: 40.041117253378246, lng: 116.2722415837743 },
  { lat: 40.03942536171407, lng: 116.2726277820093 },
  { lat: 40.03970460886076, lng: 116.27483769345417 },
  { lat: 40.041404706498625, lng: 116.27443003983899 },
];

export default defineComponent({
  name: 'PolygonDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 40.040452, lng: 116.273486 });
    const zoom = ref(16);
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
        {
          id: 'polygon', // 多边形图形数据的标志信息
          styleId: 'polygon', // 样式id
          paths, // 多边形的位置信息
          properties: {
            // 多边形的属性数据
            title: 'polygon',
          },
        },
      ],
      styles: {
        polygon: {
          color: '#3777FF', // 面填充色
          showBorder: false, // 是否显示拔起面的边线
          borderColor: '#00FFFF', // 边线颜色
        },
      },
      options: {
        zIndex: 1,
      },
    };
  },
});
</script>

