# 地图

地图组件


## 基础示例

<MapDemo/>

<<< ../../demos/map.vue

## props

| 名称            | 类型                         | 说明                             |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| apiKey          | String | 腾讯位置服务开发Key。                |
| libraries            | String                       | 附加库，多个附件库用逗号隔开，默认visualization,geometry,vector,tools。          |
| center          | `{ lat:number; lng:number }` | 地图中心点经纬度。                |
| zoom            | Number                       | 地图缩放级别，支持3～20。          |
| minZoom         | Number                       | 地图最小缩放级别，默认为3。        |
| maxZoom         | Number                       | 地图最大缩放级别，默认为20。       |
| control   | Object | 地图控件的配置，TS类型：Control，                              |
| options   | `TMap.MapOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                       |

## Control类型
```ts
interface Control {
  scale: { position: string; className: string } | boolean;
  zoom: { position: string; className: string,  numVisible: boolean} | boolean;
  rotation: { position: string; className: string } | boolean;
}
```

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap

## 事件

事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| map          | `TMap.Map` | 地图实例。                                   |
