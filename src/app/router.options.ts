import type { RouterConfig } from '@nuxt/schema';

export default {
  routes: (_routes) => [
    {
      path: '/',
      redirect: '/home',
      component: async () => await import('~/pages/home')
    },
    ..._routes
  ]
} as const as RouterConfig;
