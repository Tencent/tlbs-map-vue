# 圆形

地图圆形组件


## 基础示例

<CircleDemo/>

<<< ../../demos/multi-circle.vue

## props

| 名称       | 类型                                           | 说明               |
| ---------- | ---------------------------------------------- | ------------------ |
| id         | String                                         | 图层 id            |
| styles     | `{ [key: string]: TMap.MultiCircleStyleHash }` | 圆形的相关样式 |
| geometries | TMap.CircleGeometry[]                          | 圆形数据数组。 |
| options   | `TMap.MultiCircleOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13

## 事件

事件支持列表详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| circle         | `TMap.MultiCircle` | 圆形实例。                                   |