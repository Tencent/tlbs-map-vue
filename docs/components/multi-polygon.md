# 多边形

地图多边形组件


## 基础示例

<PolygonDemo/>

<<< ../../demos/multi-polygon.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | String                                       | 图层 id          |
| styles     | `{ [key: string]: TMap.MultiPolygonStyleHash }` | 多边形的相关样式 |
| geometries | TMap.PolygonGeometry[]                         | 多边形数据数组   |
| options   | `TMap.MultiPolygonOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#7

## 事件

事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#7

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| polygon         | `TMap.MultiPolygon` | 多边形实例。                                   |