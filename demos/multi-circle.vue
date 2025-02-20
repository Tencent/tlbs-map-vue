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
    <tlbs-multi-circle
      ref="circleRef"
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印圆形图实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'CircleDemo',
  setup() {
    const mapRef = ref(null);
    const circleRef = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(15);

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、窗口实例，调用地图实例、窗口实例方法
      console.log(mapRef.value.map);
      console.log(circleRef.value.circle);
    };

    const getLayerInstance = () => {
      // 可以获取窗口实例，调用窗口实例方法
      console.log(circleRef.value.circle);
    };
    const onClick = (e: Event) => {
      console.log(e);
    };
    return {
      center,
      zoom,
      onClick,
      onMapInited,
      getLayerInstance,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      mapRef,
      circleRef,
      geometries: [
        { styleId: 'circle', radius: 500,  center: { lat: 39.91799, lng: 116.397027 } },
      ],
      styles: {
        circle: {
          color: 'rgba(41,91,255,0.16)',
          showBorder: true,
          borderColor: 'rgba(41,91,255,1)',
          borderWidth: 2,
        },
      },
      options: {
        zIndex: 1,
      },
    };
  },
});
</script>
