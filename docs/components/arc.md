# 弧线图

地图弧线图组件，弧线图用以展示两点之间的关联，可以用在迁徙图等表示流向的场景中。


## 基础示例

<ArcDemo/>

<<< ../../demos/arc.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | `TMap.visualization.ArcLine[]`                                      | 弧线数据，ArcLine类型参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#ArcLine)          |
| pickerStyle     | `Function` | 样式映射函数，接收ArcLine数据返回对应样式，样式对象规范详见 `TMap.visualization.ArcStyle`，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#ArcStyle)。 | 
| mode | `String`                        | 弧线模式，horizontal 代表贴地的弧线，vertical 代表弧线所在平面会垂直于底图平面，默认为vertical。   |
| options   | `TMap.visualization.ArcOptions` |  轨迹图配置参数，参考TMap.visualization.ArcOptions类型     |

### TMap.visualization.ArcOptions类型
轨迹图配置参数。

| 名称            | 类型                         | 说明                                                 |
| :- | :- |:- |
|pickStyle	|Function	|轨迹图样式映射函数，接收ArcLine数据返回对应样式，样式对象规范详见 [ArcStyle](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#2) 。|
|animatable	|Boolean	|是否开启动画，默认为true(即将下线，请使用processAnimation设置enable属性)。|
|opacity	|Number	|弧线透明度，取值范围(0, 1]，默认0.5，(即将下线，请在ArcStyle中使用rgba格式设置透明度)。|
|width	|Number	|弧线的宽度，默认为1，单位是屏幕像素，(即将下线，请在ArcStyle定义弧线宽度)。|
|curvature	|Number	|弧线曲度，取值范围(0, 1]，默认为0.6。|
|selectOptions	|[VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4)	|拾取配置，可设置拾取动作、选中样式、是否使用高亮效果，其中选中样式需符合ArcStyle对象规范。|
|enableBloom	|Boolean	|弧线图呈现泛光效果，默认为false。|
| enableGeodesic | Boolean | 弧线是否开启大地曲线绘制模式，当线段起始端点经度跨度大于180度时，开启后则两端点连线会跨越180度经线进行连线，不开启则跨越0度经线进行连线，默认为false |
|toggleAnimation	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1)	|开关动画配置参数，不配置则无开关动画效果。支持animationType为‘fade’淡入淡出，‘grow’生长两种类型，默认animationType为‘fade’淡入淡出。|
|processAnimation	|[ArcAnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#5)	|过程动画配置参数，不配置则启用默认流动动画。|
|zIndex | Number | 图层绘制顺序。 |
|minZoom | Number | 图层最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3。 |
|maxZoom | Number | 图层最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20。 |

### ArcAnimationOptions
弧线图过程动画规范。
| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
|enable	|Boolean	|是否启用，默认为true。|
|tailFactor	|Number	|尾迹比例，取值范围0～1，默认为0.3。|
|animationType	|String	|动画类型名称，支持‘flow’流动一种动画类型，默认为‘flow’流动。|
|duration	|Number	|动画时长，单位毫秒，默认3000。|
|yoyo	|Boolean	|是否回弹，默认false。|
|repeat	|Number	|动画执行次数，默认为Infinity，不支持设置为其他值。|


## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| click         | `evt: TMap.VisualEvent`                                       | 点击弧线时触发，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#事件)          |
| hover         | `evt: TMap.VisualEvent`                                       | 鼠标悬停目标改变时触发，若悬停在图形外部，则返回结果中的拾取对象为null，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#事件) |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| arc      | `TMap.visualization.Arc` | 弧线图层实例。实例方法弧线图层实例TMap.visualization.Arc                                                                |

### 弧线图层实例TMap.visualization.Arc
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setData(dataList:[ArcLine[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#3))	|this	|设置数据。|
|getData()	|[ArcLine[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc#3)	|获取数据。|
|setZIndex(zIndex:Number)	|this	|设置图层绘制顺序。|
|getZIndex()	|Number	|获取图层绘制顺序。|
|setMinZoom(minZoom: Number) | this | 设置图层最小缩放层级，当地图缩放层级小于该值时该图层不显示。 |
|getMinZoom() | Number| 获取图层最小缩放层级。 |
|setMaxZoom(maxZoom: Number) | this | 设置图层最大缩放层级，当地图缩放层级大于该值时该图层不显示。 |
|getMaxZoom() | Number| 获取图层最大缩放层级。 |
|setPickStyle(pickStyle: Function)	|this	|设置弧线图样式映射函数。|
|getPickStyle()	|Function	|获取弧线图样式映射函数。|
|setCurvature(curvature: Number)	|this	|设置弧线的曲度。|
|getCurvature()	|Number	|获取弧线的曲度。|
|setMode(mode: String)	|this	|设置弧线的模式，是贴地的弧线或垂直的弧线。|
|getMode()	|String	|获取弧线的模式。|
|setAnimDuration(duration: Number)	|this	|设置动画时间，从起点到终点的运动时间(即将下线，请使用updateAnimation设置duration属性进行动画时间设置)。|
|getAnimDuration()	|Number	|获取动画时间，从起点到终点的运动时间(即将下线，请使用getAnimation获取duration属性)。|
|setHighlightDuration(HighlightTime: Number)	|this	|设置动画的高亮时间，影响弧线上高亮的长度(即将下线，请使用updateAnimation设置tailFactor属性进行动画尾迹时间设置)。|
|getHighlightDuration()	|Number	|获取高亮时间(即将下线，请使用getAnimation获取tailFactor属性)。|
|addTo(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|添加至指定地图实例。|
|updateAnimation(type:String, animationOptions: [AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1))	|this	|更新指定类型的动画参数，type支持‘process’，‘toggle’。|
|getAnimation(type:String)	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1)	|获取指定类型的动画参数，type支持‘process’，‘toggle’。|
|getSelectOptions()  | [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4) | 获取拾取配置。 |
|setSelectOptions(selectOptions: [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4)) | this | 设置拾取配置。 |
|getMidPositions()  | LatLng[] | 获取图层所有弧线的中点坐标，不支持在大地曲线绘制模式下使用。 |
|show()	|this	|显示图层。|
|hide()	|this	|隐藏图层。|
|remove()	|this	|删除图层。|
|destroy()	|this	|销毁图层对象。|