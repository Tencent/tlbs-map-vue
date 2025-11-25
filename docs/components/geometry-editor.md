# 图形编辑器

图形编辑器组件，当前支持圆形和多边形绘制和编辑

## 基础示例

<GeometryEditorDemo/>

<<< ../../demos/geometry-editor.vue

## props

| 名称     | 类型                                 | 说明           |
| -------- | ------------------------------------ | -------------- |
| circleId | `String`                               | 圆形图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性)        |
| defaultCircleGeometries | `TMap.CircleGeometry[]` | 初始圆形标记数据数组，非受控属性，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| circleStyles | `{ [key: string]: TMap.MultiCircleStyleHash }` | 圆形标记的相关样式，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| circleDrawingStyleId | `String` | 圆形绘制样式Id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| circleSelectedStyleId | `String` | 圆形选中样式Id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| polygonId | `String`                               | 多边形图层 id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性)        |
| defaultPolygonGeometries | `TMap.PolygonGeometry[]` | 初始多边形标记数据数组，非受控属性，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| polygonStyles | `{ [key: string]: TMap.MultiPolygonStyleHash }` | 多边形标记的相关样式，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| polygonDrawingStyleId | `String` | 多边形绘制样式Id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| polygonSelectedStyleId | `String` | 多边形选中样式Id，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| activeOverlayId | `String` | 处于编辑状态的图层id，编辑状态下的图层可以新增图形、选中图形进行修改和删除，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| actionMode | `String` | 编辑器的操作状态，取值'edit'或者'draw'，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性)|
| snappable | `Boolean` | 是否开启吸附功能，默认为false，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| selectable | `Boolean` | 是否开启点选功能，默认为true，开启后可以点选图形进行修改和删除操作，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#属性) |
| options   | `TMap.tools.GeometryEditorOptions` |  除了上述属性的其他配置参数，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#GeometryEditorOptions)             |

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|active_changed	|	|切换编辑图层，调用setActiveOverlay接口、选中其他图层元素或删除一个处于编辑状态的图层都会引发此事件|
|select	|	|点选图形|
|drawing	|[EditingEvent](#EditingEvent)	|绘制中，返回绘制中信息|
|draw_complete	|Geometry	|绘制完成，返回几何图形|
| draw_error | [DrawErrorMessage](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#9)| 绘制失败，返回失败信息 |
|adjusting|[EditingEvent](#EditingEvent)	|修改中，返回修改中的信息|
|adjust_complete	|Geometry	|修改完成，返回修改后的几何图形|
| adjust_error | [AdjustErrorMessage](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#AdjustErrorMessage) | 编辑失败，返回失败信息 |
|delete_complete	|Geometry[]	|删除完成，返回被删除的几何图形|
|split_complete	|[PolygonGeometry[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#12)	|拆分完成，返回拆分后的多边形数组|
|union_complete	|[PolygonGeometry](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#12)	|合并完成，返回合并后的多边形|
|split_fail	|Object	|拆分失败，返回对象中的message属性说明了失败原因|
|union_fail	|Object	|合并失败，返回对象中的message属性说明了失败原因|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| polygon         | `TMap.MultiPolygon` | 多边形实例，实例方法参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#MultiPolygon方法)。                                   |
| circle         | `TMap.MultiCircle` | 圆形实例，实例方法参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#MultiCircle方法)。                                   |
| editor         | `TMap.tools.GeometryEditor` | 编辑器实例，实例方法参考TMap.tools.GeometryEditor方法。                                   |

### TMap.tools.GeometryEditor方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMap(map: [Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置地图对象，若为null则移除编辑器|
|setActiveOverlay(id: String)	|this	|设置指定图层处于编辑状态|
|setActionMode(mode: [EDITOR_ACTION](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#2))	|this	|设置编辑器的操作状态|
| setKeyboardDeleteEnable(enable: Boolean)  | this | 设置编辑器Delete按键（删除）事件是否开启 |
| setKeyboardCtrlEnable(enable: Boolean)  | this | 设置编辑器Ctrl按键（多选）事件是否开启 |
| setKeyboardEscEnable(enable: Boolean)  | this | 设置编辑器Esc按键（中断操作）事件是否开启 |
| setUndoDrawEnable(enable: Boolean)  | this | 设置编辑器绘制撤销功能是否开启 |
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取绑定的地图对象|
|getActiveOverlay()	|[EditableOverlay](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#4)	|获取处于编辑状态的图层|
|getActionMode()	|[EDITOR_ACTION](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#2)	|获取编辑器的操作状态|
|getSelectedList()	|Geometry[]	|获取已选中的几何图形数组，Geometry可能是PointGeometry/PolylineGeometry/PolygonGeometry/CircleGeometry等|
| getKeyboardDeleteEnable()  | Boolean | 获取编辑器Delete按键（删除）事件开关状态 |
| getKeyboardCtrlEnable()  | Boolean | 获取编辑器Ctrl按键（多选）事件开关状态 |
| getKeyboardEscEnable()  | Boolean | 获取编辑器Esc按键（中断操作）事件开关状态 |
| getUndoDrawEnable()  | Boolean | 获取编辑器绘制撤销功能开关状态 |
|addOverlay(overlay: [EditableOverlay](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#4))	|this	|添加用于编辑的几何图层|
|removeOverlay(id: String)	|this	|删除用于编辑的几何图层|
|getOverlayList()	|[EditableOverlay[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#4)	|获取图层列表|
|setSnappable(snappable: Boolean)	|this	|开启或关闭吸附功能，吸附功能开启时绘制或编辑图形会自动吸附到临近的点或线段上|
|setSelectable(selectable: Boolean)	|this	|开启或关闭点选功能，点选功能开启时用户可点击图形进行单选和多选，选中图形后会自动将其所属图层设置为编辑状态|
|select(idList: String[]) |this	|选中属于激活状态的图层内的几何图形，若传入空数组则清空|
|stop()	|this	|停止绘制或编辑过程|
|split()	|this	|拆分已选中多边形，用户可绘制拆分线进行拆分，若无选中图形则无效|
|union()	|this	|合并已选中多边形，若无选中图形则无效|
|delete()	|this	|删除已选中图形|
|destroy()	|this	|销毁编辑器|
|on(eventName:String, listener:Function)|this	|添加listener到eventName事件的监听器数组中|
|off(eventName:String, listener:Function)|this	|从eventName事件的监听器数组中移除指定的listener器|