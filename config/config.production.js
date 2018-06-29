export default {
  popState: false,
  title: 'Voe - iGeek Demo',
  description: '一套基于Voejs的演示模板',
  navigate: [
    {
      icon: 'earth',
      name: 'iGeek',
      link: '/',
      id: 'index'
    },
    {
      icon: 'bug',
      name: '动画切换',
      id: 'animate',
      children: [
        {
          icon: 'log-in',
          name: '进入场景',
          link: '/demo/in',
          id: 'in'
        },
        {
          icon: 'log-out',
          name: '退出场景',
          link: '/demo/out',
          id: 'out'
        },
      ]
    }
  ]
}