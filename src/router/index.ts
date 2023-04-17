import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { AppRouteRecord } from '@/router/routes'

const routeRecords: AppRouteRecord[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/TodayPage.vue'),
  },
  {
    path: '/developers',
    name: 'developers',
    component: () => import('@/pages/EngineersPage.vue'),
  },
  {
    path: '/organizations',
    name: 'organizations',
    component: () => import('@/pages/OrganizationsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeRecords as RouteRecordRaw[],
})

export { router }