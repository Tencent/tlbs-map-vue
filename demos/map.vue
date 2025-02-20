<template>
  <tlbs-map
    ref="mapRef"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="17"
    :control="control"
    :options="options"
    @click="onClick"
    @map_inited="onMapInited"
  >
    <div class="control-container">
      <button @click.stop="changeCenter({ lat: 40.040417, lng: 116.273514 })">
        北京腾讯总部
      </button>
      <button @click.stop="changeCenter({ lat: 40.008352, lng: 116.389672 })">
        北京亚洲金融大厦
      </button>
      <button @click.stop="getMapInstance">
        打印地图实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MapDemo',
  setup() {
    const mapRef = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const changeCenter = (latLng: { lat: number; lng: number }) => {
      center.value = latLng;
    };
    const onClick = (e: Event) => {
      console.log(e);
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例，调用地图实例方法
      console.log(mapRef.value.map);
    };

    const getMapInstance = () => {
      // 可以获取地图实例，调用地图实例方法
      console.log(mapRef.value.map);
    };

    return {
      center,
      onClick,
      onMapInited,
      getMapInstance,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      changeCenter,
      mapRef,
      options: {
        renderOptions: {
          renderOptions: true,
        },
      },
    };
  },
});
</script>

<style scoped>
.control-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
}
button {
  padding: 4px;
  background-color: #fff;
  margin-right: 5px;
  border: 1px solid #ddd;
}
</style>
