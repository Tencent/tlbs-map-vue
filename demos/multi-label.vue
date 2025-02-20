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
    <tlbs-multi-label
      ref="labelRef"
      :geometries="geometries"
      :styles="styles"
      :options="options"
    />
    <div class="control-container">
      <button @click.stop="getLayerInstance">
        打印文本标记实例
      </button>
    </div>
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: 'LabelDemo',
  setup() {
    const mapRef = ref(null);
    const labelRef = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(15);
    const onClick = (e: Event) => {
      console.log(e);
    };
    const onMapInited = () => {
      // 地图加载完成后，可以获取地图实例、文本标记实例，调用地图实例、文本标记实例方法
      console.log(mapRef.value.map);
      console.log(labelRef.value.label);
    };

    const getLayerInstance = () => {
      // 可以获取文本标记实例，调用文本标记实例方法
      console.log(labelRef.value.label);
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
      labelRef,
      geometries: [
        { id: 'label_1', styleId: 'label', content: '1',  position: { lat: 39.91199, lng: 116.397027 } },
        { id: 'label_2', styleId: 'label', content: '2',  position: { lat: 39.91319, lng: 116.397027 } },
        { id: 'label_3', styleId: 'label', content: '3',  position: { lat: 39.91749, lng: 116.397027 } },
      ],
      styles: {
        label: {
          color: '#ff', // 颜色属性
          size: 14, // 文字大小属性
          offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
          angle: 0, // 文字旋转属性
          width: 20, // width 和 height 如果不填的话，背景是看不到的
          height: 20,
          backgroundColor: 'rgb(255, 99, 71)',
          borderWidth: 2,
          borderColor: 'rgb(255, 99, 71)',
          borderRadius: 12,
          alignment: 'center', // 文字水平对齐属性
          verticalAlignment: 'middle', // 文字垂直对齐属性
        },
      },
      options: {
        collisionOptions: {
          sameSource: true, // 是否开启图层内碰撞，优先级按rank进行碰撞
        },
      },
      onMapInited,
      getLayerInstance,
    };
  },
});
</script>
