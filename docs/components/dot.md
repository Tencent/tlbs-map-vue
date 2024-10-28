
# 散点图

地图散点图组件，散点图是用以展示海量独立数据点的可视化类型，支持圆形图形或用户自定义图标。目前支持百万级的数据点展示。


## 基础示例

<DotDemo/>

<<< ../../demos/dot.vue

## props
| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | DotPoint[]                                       | 热力数据，DotPoint参考          |
| styles     | Object | 散点图样式集合，key-value形式。key对应数据中的styleId，value为样式对象，需符合 CircleDotStyle 或 ImageDotStyle 对象规范。 | 
| selectOptions | VisualSelectOptions                        | 	拾取配置，可设置拾取动作、选中样式、是否使用高亮效果，其中选中样式需符合CircleDotStyle或ImageDotStyle对象规范。   |
| enableBloom | Boolean                        | 散点图呈现泛光效果，默认为false。   |
| options   | `TMap.visualization.DotOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看             

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot

## 事件
| 事件名称            | 参数                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| click         | evt:VisualEvent                                       | 点击散点时触发。          |
| hover         | evt:VisualEvent                                       | 鼠标悬停目标改变时触发，若悬停在图形外部，则返回结果中的拾取对象为null |

事件支持列表详细文档见官网 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|    dot      | `TMap.visualization.Dot` | 散点图图层实例，实例方法可参考[官网文档](https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocDot)。                   
