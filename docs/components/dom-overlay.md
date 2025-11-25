# 自定义覆盖物

地图自定义覆盖物组件


## 基础示例

<DomOverlayDemo/>

<<< ../../demos/dom-overlay.vue

## props

| 名称     | 类型                                 | 说明           |
| -------- | ------------------------------------ | -------------- |
| visible | Boolean                              | 是否可见       |
| position | `{lat: Number;lng: Number}` | DOM 的经纬度位置 |
| offset   | `{x:Number, y:Number}`      | DOM 中心偏移量   |
