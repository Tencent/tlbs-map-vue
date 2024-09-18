# 点聚合

地图点聚合组件


## 基础示例

<MarkerClusterDemo/>

<<< ../../demos/marker-cluster.vue

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

文档官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

## 事件
| clusterChange   | { scatteredPoint, aggregationPoint}                     |
其他事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| markerCluster          | `TMap.MarkerCluster` | 点聚合实例。                                   |