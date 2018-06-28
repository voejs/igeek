export default {
  popState: false,
  navigate: [
    {
      icon: 'android-options',
      name: '图书管理',
      link: '/',
      id: 'book'
    },
    {
      icon: 'social-css3-outline',
      name: '库存案件',
      id: 'case',
      children: [
        {
          icon: 'star',
          name: '首催',
          link: '/',
          id: 'a'
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