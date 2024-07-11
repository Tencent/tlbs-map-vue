// 引入类型包，定义TMap类型
import type TMapTypes from 'tmap-gl-types';
declare global {
  interface Window {
    initGLMap: () => void | null;
    TMap: TMapTypes;
  }
}
export { };
