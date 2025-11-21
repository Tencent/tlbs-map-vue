# 信息窗口

地图信息窗口组件，用于创建信息窗覆盖物


## 基础示例

<InfoWindowDemo/>

<<< ../../demos/info-window.vue

## props

| 名称       | 类型                                           | 说明               |
| ---------- | ---------------------------------------------- | ------------------ |
|visible| Boolean | 是否显示信息窗口 |
| position     | `TMap.LatLngData` | 信息窗的经纬度坐标，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo#属性) |
| content | `String`                          | 信息窗显示内容，默认为空字符串。当options.enableCustom为true时，需传入信息窗体的dom字符串，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo#属性) |
| options   | `TMap.InfoWindowOptions` |  除了上述属性的其他配置参数，参考TMap.InfoWindowOptions                        |

### TMap.InfoWindowOptions
信息窗配置参数。
| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
|zIndex	|Number	|信息窗的z-index值，默认为0。|
|offset	|Object	|信息窗相对于position对应像素坐标的偏移量，x方向向右偏移为正值，y方向向下偏移为正值，默认为{x:0, y:0}。|

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|closeclick	|none	|点击信息窗的关闭按钮时会触发此事件。|

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| infoWindow         | `TMap.InfoWindow` | 信息窗口实例。实例方法参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo#InfoWindow方法) |    

### TMap.InfoWindow方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setPosition(position:[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1))	|this	|设置经纬度位置。|
|setContent(content:String)	|this	|设置信息窗显示内容。|
|setMap(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|设置信息窗口所在的map对象，传入null则代表将infoWindow从Map中移除。|
|getMap()	|[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1)	|获取信息窗口所在的map对象。|
|open()	|this	|打开信息窗口。|
|close()	|this	|关闭信息窗口。|
|destroy()	|this	|销毁信息窗。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|