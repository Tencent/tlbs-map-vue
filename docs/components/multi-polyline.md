# 折线

地图折线组件，表示地图上的多个折线，可以自定义每个折线的样式。


## 基础示例

<PolylineDemo/>

<<< ../../demos/multi-polyline.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | String                                       | 图层 id          |
| styles     | `{ [key: string]: TMap.MultiPolylineStyleHash }` | 折线的相关样式 |
| geometries | TMap.PolylineGeometry[]                         | 折线数据数组   |
| options   | `TMap.MultiPolylineOptions` |  除了上述属性的其他配置参数，参考TMap.MultiPolylineOptions                        |

### TMap.MultiPolylineOptions
|属性名称	|类型	|说明|
| :- | :- | :- |
|disableInteractive	|Boolean	|图层是否禁止参与交互事件，默认为false|
|isStopPropagation	|Boolean	|是否阻止鼠标、触摸事件冒泡，默认为false|

## 事件

| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|click	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|点击事件。|
|dblclick	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|双击事件。|
|rightclick	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|右键点击事件。|
|mousedown	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图区域中左键按下时触发，只在桌面浏览器中触发。|
|mouseup	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图区域中左键按下又弹起时触发，只在桌面浏览器中触发。|
|mousemove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图上移动时触发，只在桌面浏览器中触发。|
|mouseover	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在移动到折线图层上时触发，只在桌面浏览器中触发。|
|mouseout	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标移出折线图层时触发，只在桌面浏览器中触发。|
|hover	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在图层上悬停对象改变时触发，事件对象中的geometry属性会指向交互位置所在图形的PolylineGeometry，无图形时事件对象为null,只在桌面浏览器中触发。|
|touchstart	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸开始时触发，只在移动浏览器中触发。|
|touchmove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸移动时触发，只在移动浏览器中触发。|
|touchend	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸结束时触发，只在移动浏览器中触发。|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| polyline         | `TMap.MultiPolyline` | 折线实例。实例方法TMap.MultiPolyline方法                                   |

### TMap.MultiPolyline方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，如果map为null意味着将多折线同时从地图中移除。|
|setZIndex(zIndex: Number)	|this	|设置图层绘制顺序。|
|setGeometries(geometries: [PolylineGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#6))	|this	|更新折线数据，如果参数为null或undefined不会做任何处理。|
|setStyles(styles:[MultiPolylineStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#3))	|this	|设置MultiPolyline图层相关样式信息，如果参数为null或undefined不会做任何处理。|
|setVisible(visible: Boolean)	|this	|设置图层是否可见。|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取地图对象，若为空返回null。|
|getGeometries()	|[PolylineGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#12)	|获取折线数据。|
|getStyles()	|[MultiPolylineStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#3)	|获取图层相关样式信息。
|getVisible()	|visible	|获取可见状态。|
|getZIndex()	|Number	|获取图层绘制顺序。|
|getGeometryById(id:String)	|[PolylineGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#6)	|根据折线数据id来获取点数据。|
|updateGeometries(geometry: [PolylineGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#6))	|this	|更新折线数据，如果geometry的id存在于集合中，会更新对应id的数据，如果之前不存在于集合中，会作为新的折线添加到集合中；如果参数为null或undefined不会做任何处理。|
|add(geometries: [PolylineGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#6))	|this	|向图层中添加折线，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的折线存在重复id，这些折线会被重新分配id；如果参数为null或undefined不会做任何处理。|
|remove(ids: String[])	|this	|移除指定id的折线，如果参数为null或undefined不会做任何处理。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|
| destroy()	| 	| 销毁图层对象。 |
| eraseTo(id: String, index: Number, point:[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1))	| 	| 用于线的擦除。第一个参数id 表示指定geometry的ID，擦除效果仅对该id对应的路线有效。 <br>第二个参数index表示要擦除到的坐标索引  index  。<br>第三个参数指线段 （坐标索引为[ index -1 ,  index ] ）上擦除点的经纬度坐标（ 如果这个坐标不在擦除的索引范围内，会一直擦除到坐标索引为index的点 ）。只支持简单折线。[查看示例](/webDemoCenter/glAPI/glMarker/markerMoveAlong) |