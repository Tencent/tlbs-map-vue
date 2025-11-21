# 地图

地图组件，能够实现基础地图效果。


## 基础示例

<MapDemo/>

<<< ../../demos/map.vue

## props

| 名称            | 类型                         | 说明                             |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| apiKey          | String | 腾讯位置服务开发Key。                |
| libraries            | String                       | 附加库，多个附件库用逗号隔开，默认visualization,geometry,vector,tools。          |
| center          | `{ lat:number; lng:number }` | 地图中心点经纬度。                |
| zoom            | Number                       | 地图缩放级别，支持3～20。          |
| minZoom         | Number                       | 地图最小缩放级别，默认为3。        |
| maxZoom         | Number                       | 地图最大缩放级别，默认为20。       |
| control   | Object | 地图控件的配置，TS类型：Control，                              |
| options   | `TMap.MapOptions` |  除了上述属性的其他配置参数，参考下面TMap.MapOptions类型                      |

### Control类型
```ts
interface Control {
  scale: { position: string; className: string } | boolean;
  zoom: { position: string; className: string,  numVisible: boolean} | boolean;
  rotation: { position: string; className: string } | boolean;
}
```

### TMap.MapOptions类型

| 属性名称 | 类型 | 说明 |
| :- | :- |:- |
|rotation	|Number	|地图在水平面上的旋转角度，顺时针方向为正，默认为0。|
|pitch	|Number	|地图俯仰角度，取值范围为0~80，默认为0。|
|scale	|Number	|地图显示比例，默认为1。|
|offset	|Object	|地图中心与容器的偏移量，Object的格式为 {x:Number, y:Number}（右方下方为正，单位为像素）；**中心点偏移功能不支持与MVTLayer共同使用**。|
| cursor | String | 地图鼠标样式，需要符合css cursor属性规范，默认为'default' |
|draggable	|Boolean	|是否支持拖拽移动地图，默认为true。|
|scrollable	|Boolean	|是否支持鼠标滚轮缩放地图，默认为true。|
| touchZoomable	|Boolean	|是否允许手势捏合缩放；默认为true。|
|pitchable	|Boolean	|是否允许设置俯仰角度；默认为true。在2D视图下，此属性无效。|
|rotatable	|Boolean	|是否允许设置旋转角度；默认为true。在2D视图下，此属性无效。|
|doubleClickZoom	|Boolean	|是否支持双击缩放地图，默认为true。|
|mapZoomType	|[MAP_ZOOM_TYPE](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#8)	|地图缩放焦点控制。|
|boundary	|[LatLngBounds](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2)	|地图边界，设置后拖拽、缩放等操作无法将地图移动至边界外，默认为null。|
|mapStyleId	|String	|地图样式ID，有效值为”style[编号]”，与key绑定，详见 [个性化地图配置页面](/dev/console/custom/mapStyle)。|
|baseMap	|BaseMap I BaseMap[]	|地图底图，BaseMap目前只支持矢量底图 （[VectorBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#5)） 、卫星底图 （[SatelliteBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#6)） 、路况底图 （[TrafficBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#7)） ，可以使用数组形式实现多种底图叠加。默认为 [VectorBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#5) ，如果传入null地图不显示任何地物。|
|viewMode	|String	|地图视图模式，支持2D和3D，默认为3D。2D模式下不可对地图进行拖拽旋转，pitch和rotation始终保持为0。|
|showControl	|Boolean	|是否显示地图上的控件，默认true。|
renderOptions|[MapRenderOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#10)  | 地图渲染配置参数
clip	|[ClipOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#ClipOptions)	| clip区域掩膜配置参数

## 事件
| 名称            | 参数                         | 说明                             |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| map_inited          | - | 地图实例初始化事件，可以在回调中获取地图实例，参考上面示例代码使用。 |
|idle	|none	|地图进入空闲状态时触发。|
|tilesloaded	|none	|当地图容器中可见的瓦片加载完后会触发此事件。|
|click	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标左键单击地图时触发，移动与桌面web都触发。|
|rightclick	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标右键单击地图时触发，只在桌面浏览器触发。|
|dblclick	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标左键双击地图时触发，移动与桌面web都触发。|
|mousedown	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标在地图区域中按下时触发，只在桌面浏览器中触发。|
|mouseup	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标在地图区域中按下又弹起时触发，只在桌面浏览器中触发。|
|mousemove	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|鼠标在地图上移动时触发，只在桌面浏览器中触发。|
|touchstart	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|在地图区域触摸开始时触发，只在移动浏览器中触发。|
|touchmove	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|在地图区域触摸移动时触发，只在移动浏览器中触发。|
|touchend	|evt:[MapEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#1)	|在地图区域触摸结束时触发，只在移动浏览器中触发。|
|dragstart	    |none	|地图开始发生拖拽交互时触发。|
|drag	|none	|地图发生拖拽交互时触发，拖拽交互可能产生pan，rotate, picth事件。|
|dragend	|none	|地图拖拽交互结束时触发。|
|panstart	|none	|地图开始平移时触发。|
|pan	|none	|地图移动时触发。|
|panend	|none	|地图平移结束时触发。|
|rotatestart	|none	|地图开始旋转时触发。|
|rotate	|none	|地图旋转时触发。|
|rotateend	|none	|地图旋转结束时触发。|
|pitchstart	|none	|地图开始发生俯仰角变化时触发。|
|pitch	|none	|地图俯仰角变化时触发。|
|pitchend	|none	|地图俯仰角变化结束时触发。|
|zoom	|none	|地图缩放时触发。|
|resize	|none	|地图容器大小发生变化时触发。|
|center_changed	|none	|当地图中心点变化时会触发此事件。|
|bounds_changed	|none	|当可视区域范围更改时会触发此事件。|
|scale_changed	|none	|地图显示比例变化时触发此事件。|
|control_added	|none	|给map添加控件的时候触发此事件。|
|control_removed	|none	|从map移出控件的时候触发此事件。|
| animation_playing | [AnimationEvent](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#animationEvent) | 动画进行中                     |
| animation_looped  | Number         | 动画进入下一循环，返回循环序号 |
| animation_ended  |      none          | 动画结束                       |
| animation_stopped |     none           | 动画停止                       |
| context_lost |      | 地图渲染上下文丢失时触发此事件；地图渲染依赖浏览器硬件加速(GPU)，浏览器对硬件加速的使用存在限制，当整个浏览器使用硬件加速的元素过多时，未防止整个GPU崩溃导致设备黑屏，浏览器会自动会将之前元素使用的硬件资源回收，导致该元素无法继续渲染（浏览器丢车保帅的策略）；当触发此事件时，需要检查业务代码是否使用了过多的硬件加速资源（如创建太多**WebGLRenderingContext** 、 **WebGL2RenderingContext**  、 **GPUCanvasContext** ）       |
| destroyed |      | 地图被完全销毁时触发此事件        |

## 组件实例属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| map          | `TMap.Map` | 地图实例。实例方法参考TMap.Map方法                               |

### 地图实例TMap.Map方法
| 方法 | 返回值 | 说明 |
| :- | :- |:- |
|setCenter(center:[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1))|this |设置地图中心点。|
|setZoom(zoom:Number)|this |设置地图缩放级别。|
|setRotation(rotation:Number)|this |设置地图水平面上的旋转角度。|
|setPitch(pitch:Number)	|this	|设置地图俯仰角。|
|setScale(scale:Number)	|this	|设置地图显示比例。|
|setOffset(offset: Object)	|this	|设置地图与容器偏移量，Object的格式为{x:Number, y:Number}，x方向向右偏移为正值，y方向向下偏移为正值；**中心点偏移功能不支持与MVTLayer共同使用**。|
| setCursorStyle(style:String) | this | 设置地图鼠标样式，需要符合css cursor规范 |
|setDraggable(draggable:Boolean)	|this	|设置地图是否支持拖拽。|
|setScrollable(scrollable:Boolean)	|this	|设置地图是否支持滚轮缩放。|
| setMaxZoom(maxZoom:Number)	|this	|设置地图最大缩放级别，支持3～20。|
| setMinZoom(minZoom:Number)	|this	|设置地图最小缩放级别，支持3～20。|
| setPitchable(pitchable:Boolean)	|this	|设置地图是否支持改变俯仰角度。在2D视图下，此方法无效。|
| setRotatable(rotatable:Boolean)	|this	|设置地图是否支持改变旋转角度。在2D视图下，此方法无效。|
| setTouchZoomable(touchZoomable:Boolean)	|this	|设置地图是否支持手势缩放。|
|setDoubleClickZoom(doubleClickZoom: Boolean) |this	|设置地图是否支持双击缩放。|
|setBoundary(boundary:[LatLngBounds](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2))	|this	|设置地图限制边界，拖拽、缩放等操作无法将地图移动至边界外。|
| setSkyOptions(options: [SkyOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#SkyOptions) ) | this | 设置地图天空背景 |
|setViewMode(viewMode: String)	|this	|设置地图视图模式。|
|setBaseMap(baseMap:BaseMap I BaseMap[]) |this |动态设置地图底图，BaseMap目前支持矢量底图（[VectorBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#5)）、卫星底图（[SatelliteBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#6)）、路况底图（[TrafficBaseMap](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#7)），可以使用数组形式实现多种底图叠加。|
|setMapStyleId(mapStyleId: String)	|this	|动态设置个性化地图样式。|
|panTo(latLng:[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1), opts:[EaseOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#4))	|this	|将地图中心平滑移动到指定的经纬度坐标。|
|zoomTo(zoom:Number, opts:[EaseOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#4))	|this	|平滑缩放到指定级别。|
|rotateTo(rotation:Number, opts:[EaseOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#4)	|this	|平滑旋转到指定角度。|
|pitchTo(pitch:Number, opts:[EaseOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#4))	|this	|平滑变化到指定俯仰角度。|
|easeTo(mapStatus:Object, opts:[EaseOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#4))	|this	|平滑过渡到指定状态，mapStatus为key-value格式，可以设定center、zoom、rotation、pitch。|
|fitBounds(bounds:[LatLngBounds](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2),options:[FitBoundsOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#3))	|this	|根据指定的地理范围调整地图视野。|
|getCenter()	|[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1)	|获取地图中心。|
|getZoom()	|Number	|获取地图缩放级别。|
|getRotation()	|Number	|获取地图水平面上的旋转角度。|
|getPitch()	|Number	|获取地图俯仰角度。|
|getBounds()	|[LatLngBounds](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2)	|返回当前地图的视野范围，该视野范围实际会大于等于地图的可视区域范围，尤其是当地图发生旋转和俯仰变化时，得到的是一个当前视野范围的最小外包矩形。|
|getScale()	|Number	|获取地图显示比例。|
|getOffset()	|Object	|获取地图与容器的偏移量Object的格式为 {x:Number, y:Number}，x方向向右偏移为正值，y方向向下偏移为正值。|
| getCursorStyle() | String | 获取地图鼠标样式 |
|getDraggable()	|Boolean	|获取地图是否支持拖拽。|
|getScrollable()	|Boolean	|获取地图是否支持滚轮缩放。|
| getTouchZoomable() |Boolean	|获取地图是否支持手势缩放。|
|getDoubleClickZoom()	|Boolean	|获取地图是否支持双击缩放。|
|getBoundary()	|[LatLngBounds](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2)	|获取地图限制边界。|
|addControl(control:[Control](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#1))	|this	|添加控件到地图,传入控件对象。|
|removeControl(id: String)	|this	|从地图容器移出控件,默认控件的id列表参考 [DEFAULT_CONTROL_ID](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#3)|
|getControl(id: String)	|[Control](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#1)	|根据控件id获取对应的控件对象,默认控件的id列表参考 [DEFAULT_CONTROL_ID](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#3)。|
|getViewMode()	|String	|获取地图视图模式。|
|getBaseMap()	|BaseMap I BaseMap[]	|获取当前的底图类型。|
|getIndoorManager()	|[IndoorManager](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocIndoor#1)	|获取室内地图管理器。|
|destroy()	 |  |	销毁地图。|
|projectToContainer(latLng: [LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1))	|[Point](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#3)	|经纬度坐标转换为容器像素坐标，容器像素坐标系以地图容器左上角点为原点。|
|unprojectFromContainer(pixel: [Point](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#3))	|[LatLng](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1)	|容器像素坐标转换为经纬度坐标。|
|on(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中。|
|off(eventName:String, listener:Function)	|this	|从eventName事件的监听器数组中移除指定的listener。|
| once(eventName:String, listener:Function)	|this	|添加listener到eventName事件的监听器数组中，一次性监听，listener执行一次后自动移除监听器|
| moveLayer(layerId: String, level: [LAYER_LEVEL](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#9)) | this | 修改图层层级顺序，根据输入 LAYER_LEVEL 常量调整 layerId 对应图层的渲染层级 ，其中layerId可以通过图层getId方法获取。注： 设置ZIndex 可调整同一大类层级下的不同图层顺序，此方法则是调整目标图层的大类层级。
| startAnimation(keyFrames:[ MapKeyFrame[]](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#mapKeyFrame), opts: [ AnimationOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#animationOptions)) | none   | 开始动画，通过keyFrames定义关键帧 ，[查看示例](/webDemoCenter/glAPI/glCityView/glAroundView)          |
| stopAnimation()                            | none   | 停止动画，停止后无法通过resumeAnimation恢复 |
| pauseAnimation()            | none   | 暂停动画                                      |
| resumeAnimation()              | none   | 恢复动画                                      |
| enableAreaHighlight(opts: [highlightOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#highlightOptions)) | this   | 启用地图区域高亮功能， [查看示例](/webDemoCenter/glAPI/glMap/glRegionHighlight) |
| disableAreaHighlight() | this   | 禁用地图区域高亮功能 |
| enableAreaClip(opts: [ClipOptions](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#ClipOptions)) | this | 启用地图区域掩膜功能 |
| disableAreaClip()                 | this | 停用地图区域掩膜功能 |
