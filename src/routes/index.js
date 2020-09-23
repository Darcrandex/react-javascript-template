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
]

export default routes
