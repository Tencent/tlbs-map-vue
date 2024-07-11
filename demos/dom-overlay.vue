<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
    <div class="control-container">
      <button @click.stop="changePosition">
        修改位置
      </button>
      <button @click.stop="changeOffset">
        修改offset
      </button>
      <button @click.stop="reset">
        重置修改
      </button>
    </div>
    <tlbs-dom-overlay
      :position="position"
      :offset="offset"
    >
      <div style="padding: 10px;background-color: #fff;">
        故宫
      </div>
    </tlbs-dom-overlay>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'DomOverlayDemo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const position = ref({ lat: 39.91799, lng: 116.397027 });
    const offset = ref({ x: 0, y: -30 });
    const zoom = ref(17);
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
      position,
      offset,
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
      changePosition() {
        position.value = { lat: 39.917, lng: 116.3970 };
      },
      changeOffset() {
        offset.value = { x: 20, y: 20 };
      },
      reset() {
        position.value = { lat: 39.91799, lng: 116.397027 };
        offset.value = { x: 0, y: -30 };
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
</style>
