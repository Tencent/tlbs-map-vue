# 热力图

地图热力组件，热力图以颜色来表现数据强弱大小及分布趋势。


## 基础示例

<HeatDemo/>

<<< ../../demos/heat.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | `TMap.visualization.HeatPoint[]`                                       | 热力数据，HeatPoint类型参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#HeatPoint)          |
| radius     | `Number` | 最大辐射半径，默认为50，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)。 | 
| height | `Number`                        | 峰值高度，默认为100，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)。   |
| opacity | `Number`                        | 全局透明度，取值范围[0，1]，默认为0.8，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)。   |
| min | `Number`                        | 热力最弱阈值，小于该值的不显示，默认为0，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)。   |
| max | `Number`                        | 热力最强阈值，大于该值的显示为最强色，默认为数据中的最大值，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)。   |
| gradientColor | `TMap.visualization.GradientColor` | 渐变颜色，渐变方向由GradientColor对象的angle属性决定，其中渐变色断点集合需符合GradientColor对象规范，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#属性)   |
| options   | `TMap.visualization.HeatOptions` |  除了上述属性的其他配置参数，TMap.visualization.HeatOptions             |

### TMap.visualization.HeatOptions
热力图配置参数。
|属性名称	|类型 |说明|
| :- | :- |:- |
|enableAggregation | Boolean | 是否启用自动聚合预处理，适用于万级数据量，启用后可优化运行时性能，但对数据分布略有影响。默认为false。 |
|enableLighting | Boolean | 热力图是否呈现光照效果，默认为false。 |
|transitAnimation	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1) 	|热力图数据源切换过渡动画配置参数，不配置则无过渡动画。支持animationType为‘mix’渐变一种类型，默认animationType为‘mix’渐变。|
|toggleAnimation 	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1) 	|开关动画配置参数，不配置则无开关动画效果。支持animationType为‘fade’淡入淡出一种类型，默认animationType为‘fade’淡入淡出。|
|zIndex | Number | 图层绘制顺序。 |
|minZoom | Number | 图层最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3。 |
|maxZoom | Number | 图层最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20。 |
|offset| Number | 图层底部离地高度，默认为0。 |
|distanceUnit| String | radius(半径)、height(峰值高度)、offset(离地高度)三个参数的单位，支持'pixel' 像素、'meter' 米，默认为'pixel'。 |
| enableHeatDot | Boolean | 热力图是否开启自动切换散点图效果，默认为false。|
| heatDotOptions | [HeatDotOptions](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#4) | 自动切换散点图相关配置参数。 |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| heat      | `TMap.visualization.Heat` | 热力图层实例。实例方法参考TMap.visualization.Heat方法                                         |

### TMap.visualization.Heat方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setMin(min:Number)	|this	|设置热力最弱阈值，小于该值的不显示，默认为0。|
|getMin()	|Number	|获取热力最弱阈值。|
|setMax(max:Number)	|this	|设置热力最强阈值，大于该值的显示为最强色，默认为数据中的最大值。|
|getMax()	|Number	|获取热力最强阈值。|
|setRadius(radius: Number)	|this	|设置热力图辐射半径。|
|getRadius()	|Number	|获取热力图辐射半径。|
|setGradientColor(gradientColor: [GradientColor](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#4))	|this	|设置热力图渐变颜色。|
|getGradientColor()	|[GradientColor](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#4)	|获取热力图渐变颜色。|
|setHeight(height: Number)	|this	|设置热力图高度。|
|getHeight()	|Number	|获取热力图高度。|
|setOpacity(opacity: Number)	|this	|设置热力图透明度。|
|getOpacity()	|Number	|获取热力图透明度。|
|setThreshold(min:Number, max:Number)	|this	|设置热力阈值范围。|
|setData(dataList:[HeatPoint[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#3) )	|this	|设置数据。|
|getData()	|[HeatPoint[]](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#3)	|获取数据。|
|setZIndex(zIndex: Number)	|this	|设置图层绘制顺序。|
|getZIndex()	|Number	|获取图层绘制顺序。|
|setMinZoom(minZoom: Number) | this | 设置图层最小缩放层级，当地图缩放层级小于该值时该图层不显示。 |
|getMinZoom() | Number| 获取图层最小缩放层级。 |
|setMaxZoom(maxZoom: Number) | this | 设置图层最大缩放层级，当地图缩放层级大于该值时该图层不显示。 |
|getMaxZoom() | Number| 获取图层最大缩放层级。 |
|setOffset(offset: Number) | this | 设置图层底部离地高度。 |
|getOffset()  | Number| 获取图层底部离地高度。 |
|addTo(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1) )	|this	|添加至指定地图实例。|
|updateAnimation(type:String, animationOptions:[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1) )	|this	|更新指定类别动画参数，type支持'toggle'，'transit'两种。|
|getAnimation(type:String)	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1) 	|获取指定类别动画参数，type支持'toggle'，'transit'两种。|
| setHeatDotEnable(enable: Boolean) | this | 设置是否开启自动切换散点图功能 |
| getHeatDotEnable() | Boolean | 获取是否开启自动切换散点图状态 |
| setHeatDotOptions(heatDotOptions: [HeatDotOptions](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#4)) | this | 设置自动切换散点图相关配置 |
| getHeatDotOptions() | [HeatDotOptions](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocHeat#4) | 获取自动切换散点图相关配置 |
|show()	|this	|显示图层。|
|hide()	|this	|隐藏图层。|
|remove()	|this	|从地图中删除图层。|
|destroy()	|this	|销毁图层对象。|