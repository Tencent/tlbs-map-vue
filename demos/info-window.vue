
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
      <button @click.stop="center = { lat: 40.040452, lng: 116.273486 }">
        腾讯总部大楼
      </button>
      <button @click.stop="center = { lat: 40.008352, lng: 116.389672 }">
        亚洲金融大厦
      </button>
      <button @click.stop="getLayerInstance">
        打印窗口实例
      </button>
    </div>
    <tlbs-info-window
      ref="infoWindowRef"
      :visible="visible"
      :position="center"
      content="Hello World!"
      :options="{
        offset: {
          x: 0,
          y: 0,
        }
      }"
    />
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'InfoWindowDemo',
  setup() {
    const mapRef = ref(null);
    const infoWindowRef = ref(null);
    const center = ref({ lat: 40.040452, lng: 116.273486 });
    const zoom = ref(17);
    const visible = ref(true);
    const onClick = (e: Event) => {
      console.log(e);
    };

    const switchInfoWindow = () => {
      visible.value = !visible.value;
    };

    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、窗口实例，调用地图实例、窗口实例方法
      console.log(mapRef.value.map);
      console.log(infoWindowRef.value.infoWindow);
    };

    const getLayerInstance = () => {
      // 可以获取窗口实例，调用窗口实例方法
      console.log(infoWindowRef.value.infoWindow);
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
      infoWindowRef,
      visible,
      switchInfoWindow,
      onMapInited,
      getLayerInstance,
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

