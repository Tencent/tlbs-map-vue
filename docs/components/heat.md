# 热力图

地图热力组件


## 基础示例

<HeatDemo/>

<<< ../../demos/heat.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | HeatPoint[]                                       | 热力数据          |
| radius     | Number | 最大辐射半径，默认为50。 | 
| height | Number                        | 峰值高度，默认为100。   |
| opacity | Number                        | 全局透明度，取值范围[0，1]，默认为0.8。   |
| min | Number                        | 热力最弱阈值，小于该值的不显示，默认为0。   |
| max | Number                        | 热力最强阈值，大于该值的显示为最强色，默认为数据中的最大值。   |
| gradientColor | GradientColor | 渐变颜色，渐变方向由GradientColor对象的angle属性决定，其中渐变色断点集合需符合GradientColor对象规范   |
| options   | `TMap.visualization.HeatOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看             

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|    heat      | `TMap.visualization.Heat` | 热力图层实例。实例方法[参考](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat)                                         |