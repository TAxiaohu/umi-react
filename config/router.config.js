const BasicLayoutUrl = '../layouts/BasicLayout' 

export default [
  {
    path: '/',
    component: BasicLayoutUrl,
    routes: [
      { 
        path: '/',
        redirect: '/user/info',
      },
      {
        path: '/user',
        name: 'user',
        icon: 'user',
        routes: [
          {
            path: '/user/info',
            name: 'user',
            component: './index'
          }
        ]
      },
      {
        path: '/product',
        name: '商品管理',
        icon: 'user',
        routes: [
          {
            path: '/product/list',
            name: '商品列表',
            component: './products',
          }
        ]
      },
    ],
  }
]