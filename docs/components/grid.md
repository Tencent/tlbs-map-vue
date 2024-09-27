
# 网格热力图

地图网格热力图组件


## 基础示例

<GridDemo/>

<<< ../../demos/grid.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | HeatPoint                                       | 热力网格数据          |
| sideLength     | Number | 单位正方形网格边长, 单位为米, 默认1000。 | 
| extrudable | Number                        | 网格是否可拔起，默认为true。   |
| colorList | Number                        | 颜色层级，颜色支持rgb(), #RRGGBB格式, 默认为[’#D8AFA7’, ‘#842610’, ‘#641200’]。   |
| heightRange | Number                        | 高度变化区间，需要传入正整数，默认为[1, 100]，若extrudable为false，则不生效。   |
| showRange | Number                        | 网格聚合数据显示区间，需要传入正整数，区间外的数据不显示，区间内的数据线性映射到高度区间及颜色层级。   |
| options   | `TMap.visualization.HeatOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看             

参考官网文档 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocGrid

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|    area      | `TMap.visualization.Grid` | 网格热力图层实例。                                   |