import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/login.vue'
import index from '@/views/Index/index.vue'
import home from '@/views/Home/home.vue'
import category from '@/views/Category/category.vue'
import subcategory from '@/views/Category/subcategory.vue'
import detail from '@/views/Detail/detail.vue'
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
          path: '/category/:id',
          component: category
        },
        {
          path: '/category/sub/:id',
          component: subcategory
        },
        {
          path: 'detail/:id',
          component: detail
        }
      ]
    },
    {
      path: '/login',
      component: login
    }

  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
