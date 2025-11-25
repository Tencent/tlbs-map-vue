# 散点图

地图散点图组件，散点图是用以展示海量独立数据点的可视化类型，支持圆形图形或用户自定义图标。目前支持百万级的数据点展示。


## 基础示例

<DotDemo/>

<<< ../../demos/dot.vue

## props
| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | `TMap.visualization.DotPoint[]`                                       | 散点数据，DotPoint类型参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#DotPoint)          |
| styles     | `Object` | 散点图样式集合，key-value形式。key对应数据中的styleId，value为样式对象，需符合 CircleDotStyle 或 ImageDotStyle 对象规范，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#样式)。 | 
| selectOptions | `TMap.visualization.VisualSelectOptions`                        | 	拾取配置，可设置拾取动作、选中样式、是否使用高亮效果，其中选中样式需符合CircleDotStyle或ImageDotStyle对象规范，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#VisualSelectOptions)。   |
| enableBloom | `Boolean`                        | 散点图呈现泛光效果，默认为false，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#属性)。   |
| options   | `TMap.visualization.DotOptions` |  除了上述属性的其他配置参数，参考TMap.visualization.DotOptions             |

### TMap.visualization.DotOptions
| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
|faceTo	|String	|散点固定的朝向，可取map（贴地）或screen（直立），默认为screen。|
|selectOptions	|[VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4)	|拾取配置，可设置拾取动作、选中样式、是否使用高亮效果，其中选中样式需符合CircleDotStyle或ImageDotStyle对象规范。|
|animation	|[RadiatedAnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#6) \| [BeatingAnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#7)	| 散点动画参数 (1.1.0及以上版本即将下线，请使用processAnimation设置动画属性）。 |
|enableBloom	|Boolean	|散点图呈现泛光效果，默认为false。|
|toggleAnimation 	|[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1) 	| 开关动画配置参数，不配置则无开关动画效果，支持animationType为‘fade’淡入淡出一种类型，默认为‘fade’淡入淡出   |
|processAnimation 	|[DotAnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#8) 	| 过程动画配置参数，不配置则无过程动画   |
|zIndex | Number | 图层绘制顺序。 |
|minZoom | Number | 图层最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3。 |
|maxZoom | Number | 图层最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20。 |

## 事件
| 名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| click         | `evt: TMap.VisualEvent`                                       | 点击散点时触发，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#事件)          |
| hover         | `evt: TMap.VisualEvent`                                       | 鼠标悬停目标改变时触发，若悬停在图形外部，则返回结果中的拾取对象为null，参考[官网文档](https://lbs.qq.comhttps://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#事件) |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| dot      | `TMap.visualization.Dot` | 散点图图层实例。实例方法参考TMap.visualization.Dot方法 |      

### TMap.visualization.Dot方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setStyles(styles: Object)	|this	|设置样式集合，styles为key-value形式。key对应数据中的styleId，value为样式对象，需符合DotCircleStyle或DotImageStyle对象规范。|
|setFaceTo(faceTo: String)	|this	|设置散点朝向，可取map（贴地）或screen（直立）。|
|setData(dataList:[DotPoint](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#4)[])	|this	|设置数据。|
|getData()		|[DotPoint](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot#4)[]		|获取数据。|
|setZIndex(zIndex: Number)	|this	|设置图层绘制顺序。|
|getZIndex()		|Number		|获取图层绘制顺序。|
|setMinZoom(minZoom: Number) | this | 设置图层最小缩放层级，当地图缩放层级小于该值时该图层不显示。 |
|getMinZoom() | Number| 获取图层最小缩放层级。 |
|setMaxZoom(maxZoom: Number) | this | 设置图层最大缩放层级，当地图缩放层级大于该值时该图层不显示。 |
|getMaxZoom() | Number| 获取图层最大缩放层级。 |
|addTo(map:[Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1))	|this	|添加至指定地图实例。|
|updateAnimation(type:String,animationOptions:[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1))	|this	|更新指定类别动画参数，type支持'toggle','process'。|
|getAnimation(type:String) |[AnimationOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualBasicClass#1)|获取指定类型的动画参数，type支持'toggle','process'。|
|getSelectOptions()  | [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4) | 获取拾取配置。 |
|setSelectOptions(selectOptions: [VisualSelectOptions](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualEvent#4)) | this | 设置拾取配置。 |
|show()	|this	|显示图层。|
|hide()	|this	|隐藏图层。|
|remove()	|this	|从地图中删除图层。|
|destroy()	|this	|销毁图层对象。|
