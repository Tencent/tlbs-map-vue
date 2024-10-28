# 点标记

地图点标记组件


## 基础示例

<MarkerDemo/>

<<< ../../demos/multi-marker.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | String                                       | 图层 id          |
| styles     | `{ [key: string]: TMap.MarkerStyleOptions }` | 点的相关样式 |
| geometries | TMap.PointGeometry[]                         | 点数据数组   |
| options   | `TMap.MultiMarkerOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker

## 事件

事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| marker         | `TMap.MultiMarker` | 点标记实例。                                   |