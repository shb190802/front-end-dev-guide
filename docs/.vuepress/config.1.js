module.exports = {
  title: 'VueJS 前端开发规范',
  description: 'VueJS 前端开发规范',
  base: '/vuerules/',
  dest: 'vuerules',
  themeConfig: {
    sidebar: [
      {
        title: '前言',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '技术选型',
        children: [
          '/selection'
        ]
      },
      {
        title: '命名规范',
        children: [
          '/naming'
        ]
      },
      {
        title: '代码风格',
        children: [
          '/codeStyle'
        ]
      },
      {
        title: 'Vue开发规范',
        children: [
          '/vueRules'
        ]
      }
    ],
    sidebarDepth: 2
  }
}