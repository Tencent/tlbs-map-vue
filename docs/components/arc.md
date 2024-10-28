# 弧线图

地图弧线图组件


## 基础示例

<ArcDemo/>

<<< ../../demos/arc.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | TMap.visualization.ArcLine[]                                      | 弧线数据          |
| pickerStyle     | Function | 样式映射函数，接收ArcLine数据返回对应样式，样式对象规范详见 TMap.visualization.ArcStyle。 | 
| mode | String                        | 弧线模式，horizontal 代表贴地的弧线，vertical 代表弧线所在平面会垂直于底图平面，默认为vertical。   |
| options   | `TMap.visualization.ArcOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看             

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArc

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
|    arc      | `TMap.visualization.Arc` | 弧线图层实例。                                   |