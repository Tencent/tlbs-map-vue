# 自定义样式点聚合

地图点聚合组件


## 基础示例

<MarkerClusterOverlayDemo/>

<<< ../../demos/marker-cluster-overlay.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | String                                       | 图层 id          |
| geometries | TMap.PointGeometry[]                         | 标注点数据数组   |
| gridSize | Number                                         | 聚合距离，距离小于该值的点会聚合至一起，默认为60px  |
| maxZoom | Number                                          | 聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合, 默认为20 |
| minimumClusterSize | Number                               | 最小聚合点数, 默认为2 |
| averageCenter | Booblean                                  | 每个聚和簇的中心是否应该是聚类中所有标记的平均值,默认为false |
| enableDefaultStyle | Booblean                             | 使用默认样式,默认为true |
| zoomOnClick | Booblean                                    | 点击聚合数字放大展开,默认为true |
| options   | `TMap.MarkerClusterOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

## 事件

| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| clusterchange          | (scatteredPoint:T,aggregationPoint:T)      | scatteredPoint（分散点的坐标集合），aggregationPoint（聚合点的坐标集合）。            样式值建议值：宽度（width）、高度（height）、行高（line-height）。数据：聚合元素个数（content），聚合元素按照个数大小排序后的顺序（sort）、 自定义的数据（data）          |

其他事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| markerCluster          | `TMap.MarkerCluster` | 点聚合实例。实例方法[参考](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster)                                   |