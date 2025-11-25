# 点标记

地图点标记组件，表示地图上的多个标注点，可自定义标注的图标。


## 基础示例

<MarkerDemo/>

<<< ../../demos/multi-marker.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| id         | `String`                                       | 图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#MultiMarker属性)          |
| styles     | `{ [key: string]: TMap.MarkerStyleOptions }` | 点的相关样式，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#MultiMarker属性) |
| geometries | `TMap.PointGeometry[]`                         | 点数据数组，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#MultiMarker属性)   |
| options   | `TMap.MultiMarkerOptions` |  除了上述属性的其他配置参数，参考TMap.MultiMarkerOptions                        |

### TMap.MultiMarkerOptions
| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
|zIndex     |  Number   |  图层绘制顺序。
|collisionOptions | CollisionOptions                                                      | 图层碰撞配置参数。                           |
| minZoom |Number	|最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3|
| maxZoom |Number	|最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20|

### CollisionOptions
图层碰撞配置参数。
| 属性名称            | 类型    | 说明                                                         |
| :------------------ | :------ | :----------------------------------------------------------- |
| sameSource          | Boolean | 是否开启同图层内碰撞，如开启，碰撞优先级按rank值进行碰撞，rank值越大，碰撞权重越高，默认为false |
| crossSource         | Boolean | 是否开启跨图层间碰撞，所有开启跨图层间进行碰撞，优先级按zIndex值进行碰撞，zIndex值越大，碰撞权重越高，默认为false |
| vectorBaseMapSource | Boolean | 是否允许碰撞地图元素，开启后图层优先级高于地图元素优先级，默认为false |

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|click	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|点击事件。|
|dblclick	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|双击事件。|
|mousedown	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图区域中左键按下时触发，只在桌面浏览器中触发。|
|mouseup	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图区域中左键按下又弹起时触发，只在桌面浏览器中触发。|
|mousemove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在地图上移动时触发，只在桌面浏览器中触发。|
|hover	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|鼠标在图层上悬停对象改变时触发，事件对象中的geometry属性会指向交互位置所在图形的PointGeometry，无图形时事件对象为null,只在桌面浏览器中触发。|
|touchstart	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸开始时触发，只在移动浏览器中触发。|
|touchmove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸移动时触发，只在移动浏览器中触发。|
|touchend	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸结束时触发，只在移动浏览器中触发。|
|moving	|Object	|点标记在执行moveAlong动画时触发事件，事件参数为一个key-value形式对象, key代表MultiMarker点数据集合中的PointGeometry的id，value是一个 [MarkerMovingEventItem](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#9) 对象。|
|move_ended	|none	|点标记执行moveAlong动画结束时触发事件。|
|move_stopped	|none	|点标记执行moveAlong动画被停止时触发事件。|
|move_paused	|none	|点标记执行moveAlong动画被暂停时触发事件。|
|move_resumed	|none	|点标记执行moveAlong动画由暂停到恢复时触发事件。|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| marker         | `TMap.MultiMarker` | 点标记实例。实例方法参考TMap.MultiMarker方法                                                                 |

### TMap.MultiMarker方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，如果map为null意味着将多个标注点同时从地图中移除。|
|setGeometries(geometries: [PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#7))	|this	|更新标注点数据，如果参数为null或undefined不会做任何处理。|
|setStyles(styles:[MultiMarkerStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#4))	|this	|设置MultiMarker图层相关样式信息，如果参数为null或undefined不会做任何处理。|
|setVisible(visible: Boolean)	|this	|设置图层是否可见。|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取地图对象，若为空返回null。|
|getGeometries()	|[PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#7)	|获取点数据。|
|getStyles()	|[MultiMarkerStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#4)	|获取图层相关样式信息。|
|getVisible()	|visible	|获取可见状态。|
|getGeometryById(id:String)	|[PointGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#7)	|根据点数据id来获取点数据。|
|updateGeometries(geometry:[PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#7))	|this	|更新标注点数据，如果geometry的id存在于多点标注的集合中，会更新对id的数据，如果之前不存在于集合中，会作为新的点标注添加到集合中；如果参数为null或undefined不会做任何处理。|
|add(geometries: PointGeometry [PointGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#8))	|this	|向图层中添加标注点，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的标注存在重复id，这些标注点会被重新分配id；如果参数为null或undefined不会做任何处理。|
|remove(ids: String[])	|this	|移除指定id的标注点，如果参数为null或undefined不会做任何处理。|
|moveAlong(param: [MoveAlongParamSet](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#8), options:Object)	|this	|指定id的标注点，沿着指定路径移动;每次新调用moveAlong时，尚未完成的动画会被取消，并触发move_stopped事件;options中如果设置autoRotation为true，对于faceTo为’map’的点标记，会根据路径方向自动改变点标记图片的旋转角度。|
|stopMove()	|this	|停止移动，尚未完成的动画会被取消，并触发move_stopped事件；已经完成的动画不会触发move_stopped事件。|
|pauseMove()	|this	|暂停点标记的动画效果，并触发move_paused事件;未在移动状态不会触发move_paused事件。|
|resumeMove()	|this	|重新开始点标记的动画效果，并触发move_resumed事件;未在暂停状态不会触发move_resumed事件。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|