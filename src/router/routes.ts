import { RouteLocationRaw, RouteRecordRaw } from 'vue-router'

export const routes = {
  home: () => ({ name: 'home' }) as const,
  developers: () => ({ name: 'developers' }) as const,
  organizations: () => ({ name: 'organizations' }) as const,
}

export type NamedRoute = ReturnType<typeof routes[keyof typeof routes]>['name']
export type AppRouteLocation = Omit<RouteLocationRaw, 'name'> & { name: NamedRoute }
export type AppRouteRecordParent = { name?: NamedRoute, children: AppRouteRecord[] }
export type AppRouteRecordChild = { name: NamedRoute }
export type AppRouteRecord = Omit<RouteRecordRaw, 'name' | 'children'> & AppRouteRecordParent | AppRouteRecordChild