/*
 * @Author: Aisanyi
 * @Date: 2022-02-24 11:17:27
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-25 10:03:50
 * @Description: 路由配置文件
 */
import { createRouter, createWebHistory, type RouteRecord } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/start',
    },
    {
      path: '/start',
      component: () => import('@/view/start.vue'),
    },
    {
      path: '/checkpoints',
      component: () => import('@/view/checkpoints.vue'),
    },
    {
      path: '/cultivate',
      component: () => import('@/view/cultivate.vue'),
    },
  ],
})

export default router
