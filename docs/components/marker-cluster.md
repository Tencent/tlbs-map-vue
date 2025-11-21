# 点聚合

地图点聚合组件，可以对地图上的点进行聚合。


## 基础示例

<MarkerClusterDemo/>

<<< ../../demos/marker-cluster.vue

## 自定义点聚合
<MarkerClusterOverlayDemo/>

<<< ../../demos/marker-cluster-overlay.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | `String`                                       | 图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性)          |
| geometries | `TMap.PointGeometry[]`                         | 标注点数据数组，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性)   |
| gridSize | `Number`                                         | 聚合距离，距离小于该值的点会聚合至一起，默认为60px，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性)  |
| maxZoom | `Number`                                          | 聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合, 默认为20，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性) |
| minimumClusterSize | `Number`                               | 最小聚合点数, 默认为2，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性) |
| averageCenter | `Boolean`                                  | 每个聚和簇的中心是否应该是聚类中所有标记的平均值,默认为false，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性) |
| enableDefaultStyle | `Boolean`                             | 使用默认样式,默认为true，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性) |
| zoomOnClick | `Boolean`                                    | 点击聚合数字放大展开,默认为true，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#属性) |
| options   | `TMap.MarkerClusterOptions` |  除了上述属性的其他配置参数，参考TMap.MarkerClusterOptions                        |

### TMap.MarkerClusterOptions

| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
| zIndex | Number  | 图层绘制顺序 |
| collisionOptions  | [CollisionOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#4) | 图层碰撞配置参数 |

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| clusterchange          | `(scatteredPoint: TMap.PointGeometry[], aggregationPoint: TMap.PointGeometry[])`      | 聚合状态变化时触发，scatteredPoint（分散点的坐标集合），aggregationPoint（聚合点的坐标集合）         |
| click         | `evt: TMap.MarkerClusterEvent`                                       | 点击聚合点或分散点时触发          |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| markerCluster          | `TMap.MarkerCluster` | 点聚合实例。实例方法参考TMap.MarkerCluster方法                                    |

### TMap.MarkerCluster方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，如果map为null意味着将点聚合图层从地图中移除|
|setGeometries(geometries:PointGeometry[])	|this	|更新点数据，如果参数为null或undefined不会做任何处理|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取地图对象，若为空返回null|
|getClusters()	|[ClusterInfo[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster#3)	|获取当前地图视野范围内，聚合后的聚合簇数据；聚合是异步操作，可以绑定cluster_changed事件获取每次地图上最新的聚合簇|
|getGeometries()	|[PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#6)	|获取点数据|
|getGeometryById(id:String)	|[PointGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#6)	|根据点数据id来获取点数据|
|updateGeometries(geometry: [PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#6))	|this	|更新标注点数据，如果geometry的id存在于聚合点的集合中，会更新对id的数据，如果之前不存在于集合中，会作为新的点标注添加到集合中进行聚合；如果参数为null或undefined不会做任何处理|
|add(geometries: [PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#6))	|this	|向图层中添加标注点，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合中进行聚合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的标注存在重复id，这些标注点会被重新分配id；如果参数为null或undefined不会做任何处理|
|remove(ids: String[])	|this	|移除指定id的标注点，如果参数为null或undefined不会做任何处理|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener|
|destroy()	| 	| 销毁图层对象 |