# 文本标记

文本标记组件，表示地图上的多个文本标注，可以自定义每个文本标注的样式。


## 基础示例

<LabelDemo/>

<<< ../../demos/multi-label.vue

## props

| 名称       | 类型                                            | 说明        |
| ---------- |-----------------------------------------------|-----------|
| id         | `String`                                        | 图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiLabel属性)     |
| styles     | `{ [key: string]: TMap.MultiLabelStyleHash }` | 文本标记的相关样式，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiLabel属性) |
| geometries | `TMap.LabelGeometry[]`                         | 文本标记数据数组，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#MultiLabel属性) |
| options   | `TMap.MultiLabelOptions` |  除了上述属性的其他配置参数，参考TMap.MultiLabelOptions                       |

### TMap.MultiLabelOptions
|属性名称	|类型	|说明|
| :- | :- | :- |
| collisionOptions  | [CollisionOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#7) | 图层碰撞配置参数 |
|disableInteractive	|Boolean	|图层是否禁止参与交互事件，默认为false|
|isStopPropagation	|Boolean	|是否阻止鼠标、触摸事件冒泡，默认为false|

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
|click	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|点击事件|
|dblclick	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|双击事件|
|mousedown	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图区域中左键按下时触发，只在桌面浏览器中触发|
|mouseup	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图区域中左键按下又弹起时触发，只在桌面浏览器中触发|
|mousemove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在地图上移动时触发，只在桌面浏览器中触发|
|hover	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|鼠标在图层上悬停对象改变时触发，事件对象中的geometry属性会指向交互位置所在图形的LabelGeometry，无图形时事件对象为null,只在桌面浏览器中触发|
|touchstart	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|在地图区域触摸开始时触发，只在移动浏览器中触发|
|touchmove	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)	|在地图区域触摸移动时触发，只在移动浏览器中触发|
|touchend	|[GeometryOverlayEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3)|在地图区域触摸结束时触发，只在移动浏览器中触发|
|labelBox_changed	| - |在数据变化时触发|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| label         | `TMap.MultiLabel` | 文本标记实例。实例方法参考TMap.MultiLabel方法                                    |

### TMap.MultiLabel方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，如果map为null意味着将多个文本标注同时从地图中移除。|
|setGeometries(geometries: [LabelGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5))	|this	|更新多文本标注数据，如果参数为null或undefined不会做任何处理。|
|setStyles(styles:[MultiLabelStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#3))	|this	|设置MultiLabel图层相关样式信息，如果参数为null或undefined不会做任何处理。|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取地图对象，若为空返回null。|
|getGeometries()	|[LabelGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5)	|获取多文本标注数据。|
|getStyles()	|[MultiLabelStyleHash](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#3)	|获取图层相关样式信息。|
|setVisible(visible: Boolean)	|this	|设置图层是否可见。|
|getVisible()	|visible	|获取可见状态。|
|getGeometryById(id:String)	|[LabelGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5)	|根据多文本数据id来获取点数据。|
|updateGeometries(geometry:[LabelGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5))	|this	|更新多文本数据，如果geometry的id存在于集合中，会更新对id的数据，如果之前不存在于集合中，会作为新的文本标注添加到集合中；如果参数为null或undefined不会做任何处理。|
|add(geometries: [LabelGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5))	|this	|向图层中添加文本，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的文本存在重复id，这些文本会被重新分配id；如果参数为null或undefined不会做任何处理。|
|remove(ids: String[])	|this	|移除指定id的文本，如果参数为null或undefined不会做任何处理。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|
|destroy()	|  | 销毁图层对象 |
| getLabelBoxes(id:String) | LabelBoxHash | 获取文本整体像素宽高值，以一个key-value对象的形式返回，key为文本id，value为数组，第一个数据为文本整体的宽，第二个数据为文本整体的高。当未传入id时默认获得所有文本的宽高。注意该方法需要监听MultiLabel的'labelBox_changed'事件。|