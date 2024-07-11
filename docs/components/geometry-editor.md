# 图形编辑器

图形编辑器组件，当前支持圆形和多边形绘制和编辑



## 基础示例

<GeometryEditorDemo/>

<<< demos/geometry-editor.vue

## props

| 名称     | 类型                                 | 说明           |
| -------- | ------------------------------------ | -------------- |
| circleId | String                               | 圆形图层 id        |
| defaultCircleGeometries | TMap.CircleGeometry[] | 初始圆形标记数据数组，非受控属性 |
| circleStyles | `{ [key: string]: TMap.MultiCircleStyleHash }` | 圆形标记的相关样式 |
| circleDrawingStyleId | String | 圆形绘制样式Id |
| circleSelectedStyleId | String | 圆形选中样式Id |
| polygonId | String                               | 多边形图层 id        |
| defaultPolygonGeometries | TMap.PolygonGeometry[] | 初始多边形标记数据数组，非受控属性 |
| polygonStyles | `{ [key: string]: TMap.MultiPolygonStyleHash }` | 多边形标记的相关样式 |
| polygonDrawingStyleId | String | 多边形绘制样式Id |
| polygonSelectedStyleId | String | 多边形选中样式Id |
| activeOverlayId | String | 处于编辑状态的图层id，编辑状态下的图层可以新增图形、选中图形进行修改和删除 |
| actionMode | String | 编辑器的操作状态，取值'edit'或者'draw'|
| snappable | Boolean | 是否开启吸附功能，默认为false |
| selectable | Boolean | 是否开启点选功能，默认为true，开启后可以点选图形进行修改和删除操作 |

参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor

## 事件

事件支持列表参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor
