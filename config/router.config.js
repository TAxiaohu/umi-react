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
        name: 'product',
        icon: 'user',
        routes: [
          {
            path: '/product/list',
            name: 'product',
            component: './products',
          }
        ]
      },
    ],
  }
]