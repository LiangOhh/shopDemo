import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/login.vue'
import index from '@/views/Index/index.vue'
import home from '@/views/Home/home.vue'
import category from '@/views/Category/category.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: 'category',
          component: category
        }
      ]
    },
    {
      path: '/login',
      component: login
    }

  ]
})

export default router
