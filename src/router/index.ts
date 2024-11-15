import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/layout/page/HomeView.vue'
import Layout from '@/views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/Layout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/layout/page/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/layout/page/AboutView.vue'),
        },
        {
          path: '/element_plus',
          name: 'ElementPlus',
          component: () =>
            import('../views/layout/page/element+/ElementPlusView.vue'),
        },
        {
          path: '/loadash',
          name: 'Loadash',
          component: () =>
            import('../views/layout/page/loadash/LoadashView.vue'),
        },
      ],
    },
  ],
})

export default router
