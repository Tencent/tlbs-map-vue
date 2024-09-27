import { onUnmounted, SetupContext, isVue2 } from 'vue-demi';
// 绑定地图及图层事件
export default function useEventListener(
  // 可以传地图实例和图层实例
  instance: TMap.Map | TMap.GeometryOverlay | TMap.tools.GeometryEditor | TMap.MarkerCluster | TMap.InfoWindow,
  context: SetupContext,
): void {
  const eventMap: {[key: string]: () => void} = {};
  // 如果是vue2则通过listeners属性获取事件配置
  if (isVue2) {
    // @ts-ignore
    Object.keys(context.listeners).forEach((attr) => {
      const eventName = attr;
      eventMap[eventName] = (...args) => context.emit(eventName, ...args);
    });
  } else { // 如果是vue3则通过attrs属性获取事件配置
    Object.keys(context.attrs).forEach((attr) => {
      if (attr.indexOf('on') === 0) {
        const eventName = toLowerCaseFirst(attr.slice(2));
        eventMap[eventName] = (...args) => context.emit(eventName, ...args);
      }
    });
  }
  // 绑定事件
  Object.keys(eventMap).forEach((eventName) => {
    instance.on(eventName, eventMap[eventName]);
  });
  // 解绑事件
  onUnmounted(() => {
    Object.keys(eventMap).forEach((eventName) => {
      instance.off(eventName, eventMap[eventName]);
    });
  });
}

function toLowerCaseFirst(str: string) {
  if (!str || str.length === 0) {
    return str;
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}
