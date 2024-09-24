import _ from 'lodash';

const prefixStr = '${prefix}';
const templateSep = '`';
export const getComponentCode = name => `
import {
  defineComponent,
  inject,
  onUnmounted,
  PropType,
  Ref,
  toRaw,
  watch,
} from 'vue-demi';
import { prefix } from './config';

export default defineComponent({
  name: ${templateSep}${prefixStr}${name}${templateSep},
  props: {
    
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return;
    }
    // 提供给ref实例使用
    return {
      
    };
  },
  render() {
    return null;
  },
});
`;

export const getComponentDocCode = (name, zhName) => `
# ${zhName}

地图${zhName}组件


## 基础示例

<${name}Demo/>

<<< ../../demos/${_.kebabCase(name)}.vue

## props
`;

export const getDemoCode = name => `
<template>
  <tlbs-map
    ref="map"
    api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
    :center="center"
    :zoom="zoom"
    :control="control"
    @click="onClick"
  >
  </tlbs-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
  name: '${name}Demo',
  setup() {
    const map = ref(null);
    const center = ref({ lat: 39.91799, lng: 116.397027 });
    const zoom = ref(15);
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
    };
  },
});
</script>

`;
