export default {
  name: 'demo',
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
          icon: 'android-funnel',
          name: 'Single Animation',
          id: 'single',
          link: '/animate/single/vue'
        },
        {
          icon: 'android-options',
          name: 'Animation Group',
          id: 'group',
          link: '/animate/group/vue'
        }
      ]
    }
  ]
}