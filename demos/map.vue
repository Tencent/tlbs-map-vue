<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="17"
    :control="control"
    :options="options"
    @click="onClick"
  >
    <div class="control-container">
      <button @click.stop="changeCenter({ lat: 40.040417, lng: 116.273514 })">
        北京腾讯总部
      </button>
      <button @click.stop="changeCenter({ lat: 40.008352, lng: 116.389672 })">
        北京亚洲金融大厦
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'MapDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const changeCenter = (latLng: { lat: number; lng: number }) => {
      center.value = latLng;
    };
    const onClick = (e: Event) => {
      console.log(e);
    };
    return {
      center,
      onClick,
      control: {
        scale: {},
        zoom: {
          position: 'topRight',
        },
      },
      changeCenter,
      map,
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
