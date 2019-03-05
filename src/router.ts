const routers = [
  {
    path: '/',
    name: 'demo',
    meta: {
      title: '首页',
      scrollToTop: true
      // requireAuth: true
    },
    component: () => import('@/views/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          // requireAuth: true,
          noCache: true
        }
      },
      {
        path: 'components',
        component: () => import('@/views/base-layout.vue'),
        name: 'components',
        redirect: '/components/table',
        meta: {
          title: 'Components',
          // requireAuth: true,
          noCache: true
        },
        children: [
          {
            path: 'table',
            component: () => import('@/views/table/index.vue'),
            name: 'table',
            meta: {
              title: 'tables',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'card',
            component: () => import('@/views/card/index.vue'),
            name: 'card',
            meta: {
              title: 'cards',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'pagination',
            component: () => import('@/views/pagination/index.vue'),
            name: 'pagination',
            meta: {
              title: 'pagination',
              noCache: true
            }
          },
          {
            path: 'card',
            component: () => import('@/views/card/index.vue'),
            name: 'card',
            meta: {
              title: 'Cards',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'loading',
            component: () => import('@/views/loading/index.vue'),
            name: 'loading',
            meta: {
              title: 'loading',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'dialog',
            component: () => import('@/views/dialog/index.vue'),
            name: 'dialog',
            meta: {
              title: 'dialog',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'message',
            component: () => import('@/views/message/index.vue'),
            name: 'message',
            meta: {
              title: 'message',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'variables',
            name: 'variables',
            component: () => import('@/views/variables/index.vue'),
            meta: {
              title: 'variables',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'form',
            name: 'form',
            component: () => import('@/views/form/index.vue'),
            meta: {
              title: 'Form',
              // requireAuth: true,
              noCache: true
            }
          },
          {
            path: 'tree',
            name: 'tree',
            component: () => import('@/views/tree/index.vue'),
            meta: {
              title: 'tree',
              // requireAuth: true,
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
    component: () => import('@/views/login/index.vue'),
    meta: { title: `登录` }
  },
  {
    path: '/404',
    alias: '/not-found',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: `Error - 404` }
  }
]

export default routers
