
# 区域图

地图区域图组件


## 基础示例

<AreaDemo/>

<<< ../../demos/area.vue

## props

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| data         | TMap.visualization.AreaPlane[]                                       | 区域数据          |
| styles     | TMap.visualization.AreaStyleHash | 区域图样式
| selectOptions | TMap.visualization.VisualSelectOptions                        | 拾取配置，可设置拾取动作、选中样式，其中选中样式需符合AreaStyle对象规范。   |
| options   | `TMap.visualization.AreaOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看             

参考官网文档 https://lbs.qq.com/webApi/visualizationApi/visualizationDoc/visualizationDocArea