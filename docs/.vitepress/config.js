const sidebar = getSidebar();

module.exports = {
  lang: 'zh-CN',
  title: '腾讯位置服务地图组件库',
  description: '腾讯位置服务地图组件库',
  base: '/web/tlbs-map-vue/',
  themeConfig: {
    nav: [
      { text: '文档', link: '/guide/get-started', activeMatch: '^/$|^/guide|^/components/' },
    ],
    sidebar: {
      '/guide/': sidebar,
      '/components/': sidebar
    },
  },
}

function getSidebar() {
  return [
    {
      text: '开始',
      items: [
        { text: '快速开始', link: '/guide/get-started' },
      ],
    },
    {
      text: '组件',
      items: [
        { text: '地图', link: '/components/map' },
        { text: '点标记', link: '/components/multi-marker' },
        { text: '点聚合', link: '/components/marker-cluster' },
        { text: '自定义点聚合', link: '/components/marker-cluster-overlay' },
        { text: '文本标记', link: '/components/multi-label' },
        { text: '多边形', link: '/components/multi-polygon' },
        { text: '折线', link: '/components/multi-polyline' },
        { text: '圆形', link: '/components/multi-circle' },
        { text: '自定义覆盖物', link: '/components/dom-overlay' },
        { text: '图形编辑器', link: '/components/geometry-editor' },
        { text: '热力图', link: '/components/heat' },
        { text: '弧线图', link: '/components/arc' },
      ],
    },
  ];
}
