# 折线

地图折线组件


## 基础示例

<PolylineDemo/>

<<< demos/multi-polyline.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | String                                       | 图层 id          |
| styles     | `{ [key: string]: TMap.MultiPolylineStyleHash }` | 折线的相关样式 |
| geometries | TMap.PolylineGeometry[]                         | 折线数据数组   |
| options   | `TMap.MultiPolylineOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#1

## 事件

事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#1


## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| polyline         | `TMap.MultiPolyline` | 折线实例。                                   |