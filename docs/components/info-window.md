
# 信息窗口

地图信息窗口组件


## 基础示例

<InfoWindowDemo/>

<<< ../../demos/info-window.vue

## props

| 名称       | 类型                                           | 说明               |
| ---------- | ---------------------------------------------- | ------------------ |
| position     | TMap.LatLngData | 信息窗的经纬度坐标 |
| content | String                          | 信息窗显示内容，默认为空字符串。当options.enableCustom为true时，需传入信息窗体的dom字符串 |
| options   | `TMap.InfoWindowOptions` |  除了上述属性的其他配置参数，点击下面官网文档链接查看                        |

上述属性数据格式可参考官网文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo

## 事件

事件支持列表详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| infoWindow         | `TMap.InfoWindow` | 信息窗口实例。     