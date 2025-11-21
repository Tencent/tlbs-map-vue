# 区域图

地图区域图组件，用以展示不同地区的轮廓形状和数据分布。


## 基础示例

<AreaDemo/>

<<< ../../demos/area.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | `TMap.visualization.AreaPlane[]`                                       | 区域数据，AreaPlane类型参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#AreaPlane)          |
| styles     | `TMap.visualization.AreaStyleHash` | 区域图样式，AreaStyleHash类型参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#AreaStyleHash)
| selectOptions | `TMap.visualization.VisualSelectOptions`                        | 拾取配置，可设置拾取动作、选中样式，其中选中样式需符合AreaStyle对象规范，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#VisualSelectOptions)。   |
| options   | `TMap.visualization.AreaOptions` |  除了上述属性的其他配置参数，参考TMap.visualization.AreaOptions             |

## TMap.visualization.AreaOptions
区域图配置参数。
| 属性名称  | 类型 | 说明 |
| :- | :- |:- |
|enableBloom	|Boolean	|区域图呈现泛光效果，默认为false。|
|toggleAnimation	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1)	|开关动画配置参数，不配置则无开关动画效果。支持animationType为‘fade’淡入淡出一种类型，默认animationType为‘fade’淡入淡出。|
|zIndex | Number | 图层绘制顺序。 |
|minZoom | Number | 图层最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3。 |
|maxZoom | Number | 图层最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20。 |

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| click         | `evt: TMap.VisualEvent`                                       | 点击区域时触发，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#事件)          |
| hover         | `evt: TMap.VisualEvent`                                       | 鼠标悬停目标改变时触发，若悬停在图形外部，则返回结果中的拾取对象为null，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#事件) |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| area      | `TMap.visualization.Area` | 区域图层实例。实例方法参考TMap.visualization.Area方法                                    |

### TMap.visualization.Area方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setStyles(styles: Object)	|this	|设置样式集合。|
|setData(dataList:[AreaPlane[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#3))	|this	|设置数据。|
|getData()	|[AreaPlane[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea#3)	|获取数据。|
|setZIndex(zIndex:Number)	|this	|设置图层绘制顺序。|
|getZIndex()	|Number	|获取图层绘制顺序。|
|setMinZoom(minZoom: Number) | this | 设置图层最小缩放层级，当地图缩放层级小于该值时该图层不显示。 |
|getMinZoom() | Number| 获取图层最小缩放层级。 |
|setMaxZoom(maxZoom: Number) | this | 设置图层最大缩放层级，当地图缩放层级大于该值时该图层不显示。 |
|getMaxZoom() | Number| 获取图层最大缩放层级。 |
|addTo(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|添加至指定地图实例。|
|getSelectOptions()  | [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4) | 获取拾取配置。 |
|setSelectOptions(selectOptions: [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4)) | this | 设置拾取配置。 |
|show()	|this	|显示图层。|
|hide()	|this	|隐藏图层。|
|remove()	|this	|从地图中删除图层。|
|destroy()	|this	|销毁图层对象。|
|updateAnimation(type:String, animationOptions: [AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1))	|this	|更新指定类型的动画参数，type支持‘toggle’。|
|getAnimation(type:String)	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1)	|获取指定类型的动画参数，type支持‘toggle’。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|