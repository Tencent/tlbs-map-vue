# 圆形

地图圆形组件，表示地图上的多个圆形，可以自定义每个圆形的样式。


## 基础示例

<CircleDemo/>

<<< ../../demos/multi-circle.vue

## props

| 名称       | 类型                                           | 说明               |
| ---------- | ---------------------------------------------- | ------------------ |
| id         | `String`                                         | 图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiCircle属性)            |
| styles     | `{ [key: string]: TMap.MultiCircleStyleHash }` | 圆形的相关样式，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiCircle属性) |
| geometries | `TMap.CircleGeometry[]`                          | 圆形数据数组，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiCircle属性) |
| options   | `TMap.MultiCircleOptions` |  除了上述属性的其他配置参数，参考TMap.MultiCircleOptions                        |

### TMap.MultiCircleOptions
|属性名称	|类型	|说明|
| :- | :- | :- |
|zIndex	|Number	|图层绘制顺序|

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|click	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|点击事件|
|dblclick	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|双击事件|
|mousedown	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图区域中左键按下时触发，只在桌面浏览器中触发|
|mouseup	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图区域中左键按下又弹起时触发，只在桌面浏览器中触发|
|mousemove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图上移动时触发，只在桌面浏览器中触发|
|hover	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在图层上悬停对象改变时触发，事件对象中的geometry属性会指向交互位置所在图形的CircleGeometry，无图形时事件对象为null,只在桌面浏览器中触发|
|touchstart	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|在地图区域触摸开始时触发，只在移动浏览器中触发|
|touchmove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|在地图区域触摸移动时触发，只在移动浏览器中触发|
|touchend	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|在地图区域触摸结束时触发，只在移动浏览器中触发|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| circle         | `TMap.MultiCircle` | 圆形实例。实例方法参考TMap.MultiCircle方法                                    |

### TMap.MultiCircle方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，如果map为null意味着将多圆同时从地图中移除|
|setZIndex(zIndex: Number)	|this	|设置图层绘制顺序|
|setGeometries(geometries:[CircleGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#16))	|this	|更新多圆数据，如果参数为null或undefined不会做任何处理|
|setStyles(styles:[MultiCircleStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#15))	|this	|设置MultiCircle图层相关样式信息，如果参数为null或undefined不会做任何处理|
|setVisible(visible: Boolean)	|this	|设置图层是否可见。|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取地图对象，若为空返回null|
|getGeometries()	|[CircleGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#16)	|获取多圆数据|
|getStyles()	|[MultiCircleStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#15)	|获取图层相关样式信息|
|getVisible()	|visible	|获取可见状态|
|getZIndex()	|Number	|获取图层绘制顺序|
|getGeometryById(id:String)	|[CircleGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#16)	|根据多圆数据id来获取点数据|
|updateGeometries(geometry: [CircleGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#16))	|this	|更新多圆数据，如果geometry的id存在于集合中，会更新对id的数据，如果之前不存在于集合中，会作为新的圆添加到集合中；如果参数为null或undefined不会做任何处理|
|add(geometries: [CircleGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#16))	|this	|向图层中添加圆，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的多边形存在重复id，这些多边形会被重新分配id；如果参数为null或undefined不会做任何处理|
|remove(ids: String[])	|this	|移除指定id的圆，如果参数为null或undefined不会做任何处理|
| destroy()	| 	| 销毁图层对象 |