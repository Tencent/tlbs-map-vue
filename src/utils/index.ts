// 获取Geometries数据
export function getGeometries(geometries: TMap.PointGeometry[]) {
  return geometries.map(item => ({
    ...item,
    position: new TMap.LatLng(item.position.lat, item.position.lng),
  }));
}
