export default {
  popState: false,
  navigate: [
    {
      icon: 'android-options',
      name: '图书管理',
      link: '/'
    },
    {
      icon: 'social-css3-outline',
      name: '库存案件',
      children: [
        {
          icon: 'star',
          name: '首催',
          link: '/'
        },
        {
          icon: 'star',
          name: '首催不通',
          children: [
            {
              icon: 'star',
              name: '图书管理2',
              link: '/'
            },
            {
              icon: 'star',
              name: '图书管理3',
              children: [
                {
                  icon: 'star',
                  name: '图书管理2',
                  link: '/'
                },
                {
                  icon: 'star',
                  name: '图书管理3',
                  children: [
                    {
                      icon: 'star',
                      name: '图书管理2',
                      link: '/'
                    },
                    {
                      icon: 'star',
                      name: '图书管理3',
                      link: '/'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}