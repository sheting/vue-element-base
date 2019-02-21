const routers = [
    {
      path: '/',
      name: 'demo',
      meta: {
        title: '首页',
        scrollToTop: true,
        // requireAuth: true
      },
      component: () => import('@/views/layout'),
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard'),
          name: 'dashboard',
          meta: {
            title: 'dashboard',
            // requireAuth: true,
            noCache: true
          }
        },
        {
          path: 'components',
          component: () => import('@/views/base-layout'),
          name: 'components',
          redirect: '/components/table',
          meta: {
            title: 'components',
            // requireAuth: true,
            noCache: true
          },
          children: [
            {
              path: 'table',
              component: () => import('@/views/table'),
              name: 'table',
              meta: {
                title: 'tables',
                // requireAuth: true,
                noCache: true
              }
            },
            {
              path: 'card',
              component: () => import('@/views/card'),
              name: 'card',
              meta: {
                title: 'cards',
                // requireAuth: true,
                noCache: true
              }
            },
            {
              path: 'pagination',
              component: () => import('@/views/pagination'),
              name: 'pagination',
              meta: {
                title: 'pagination',
                noCache: true
              }
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      alias: '/signin',
      name: 'login',
      component: () => import('@/views/login'),
      meta: {title: `登录`}
    },
    {
      path: '/404',
      alias: '/not-found',
      name: '404',
      component: () => import('@/views/404'),
      meta: {title: `Error - 404`}
    }
  ]
  
  export default routers