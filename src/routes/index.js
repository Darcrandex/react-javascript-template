import { lazy } from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/test',
    component: lazy(() => import('@/pages/TestPage')),
  },
  {
    path: '/support-test',
    component: lazy(() => import('@/pages/SupportTest')),
  },
]

export default routes
