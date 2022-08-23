export default [
  {
    path: '/books',
    name: 'books',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: 'employee-management',
        name: 'employee-management',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: '/',
            name: 'employee-management',
            component: () => import(/* webpackChunkName: "employee-management" */ '@/views/pages/books/employee-management/Index.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'create',
            name: 'create-employee-management',
            component: () => import(/* webpackChunkName: "employee-management" */ '@/views/pages/books/employee-management/Create.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit-employee-management',
            component: () => import(/* webpackChunkName: "employee-management" */ '@/views/pages/books/employee-management/Edit.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          }
        ]
      },
      {
        path: 'books-management',
        name: 'books-management',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: '/',
            name: 'books-management',
            component: () => import(/* webpackChunkName: "books-management" */ '@/views/pages/books/books-management/Index.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'create',
            name: 'create-books-management',
            component: () => import(/* webpackChunkName: "create-books-management" */ '@/views/pages/books/books-management/Create.vue'),
            meta: {
                layout: 'AppLayoutContent'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit-books-management',
            component: () => import(/* webpackChunkName: "edit-books-management" */ '@/views/pages/books/books-management/Edit.vue'),
            meta: {
                layout: 'AppLayoutContent'
            }
          }
        ]
      },
      {
          path: 'borrow-management',
        name: 'borrow-management',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
          {
            path: '/',
            name: 'borrow-management',
            component: () => import(/* webpackChunkName: "borrow-management" */ '@/views/pages/books/borrow-management/Index.vue'),
            meta: {
                layout: 'AppLayoutContent'
            }
          },
          {
            path: 'create',
            name: 'create-borrow-management',
            component: () => import(/* webpackChunkName: "create-borrow-management" */ '@/views/pages/books/borrow-management/Create.vue'),
            meta: {
                layout: 'AppLayoutContent'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit-borrow-management',
            component: () => import(/* webpackChunkName: "edit-borrow-management" */ '@/views/pages/books/borrow-management/Edit.vue'),
            meta: {
                layout: 'AppLayoutContent'
            }
          }
        ]
      },
      {
        path: 'request-management',
        name: 'request-management',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
          {
            path: '/',
            name: 'request-management',
            component: () => import(/* webpackChunkName: "request-management" */ '@/views/pages/books/request-management/Index.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'create',
            name: 'create-request-management',
            component: () => import(/* webpackChunkName: "create-request-management" */ '@/views/pages/books/request-management/Create.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit-request-management',
            component: () => import(/* webpackChunkName: "edit-request-management" */ '@/views/pages/books/request-management/Edit.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          }
        ]
      },
      {
        path: 'penalty',
        name: 'penalty',
        component: {
          render(c) {
              return c('router-view')
          }
        },
        children: [
          {
            path: '/',
            name: 'penalty',
            component: () => import(/* webpackChunkName: "penalty" */ '@/views/pages/books/penalty/Index.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'create',
            name: 'create-penalty',
            component: () => import(/* webpackChunkName: "create-penalty" */ '@/views/pages/books/penalty/Create.vue'),
            meta: {
              layout: 'AppLayoutContent'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit-penalty',
            component: () => import(/* webpackChunkName: "edit-penalty" */ '@/views/pages/books/penalty/Edit.vue'),
          }
        ]
      },
    ]
  },
]