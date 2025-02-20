# 文本标记

文本标记组件


## 基础示例

<LabelDemo/>

<<< ../../demos/multi-label.vue

## props

| 名称       | 类型                                            | 说明        |
| ---------- |-----------------------------------------------|-----------|
| id         | String                                        | 图层 id     |
| styles     | `{ [key: string]: TMap.MultiLabelStyleHash }` | 文本标记的相关样式 |
| geometries | TMap.LabelGeometry[]                         | 文本标记数据数组。 |
| options   | `TMap.MultiLabelOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13

## 事件

事件支持列表详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| label         | `TMap.MultiLabel` | 文本标记实例。实例方法[参考](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13)                                    |