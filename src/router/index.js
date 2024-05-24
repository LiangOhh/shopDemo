import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/login.vue'
import index from '@/views/Index/index.vue'
import home from '@/views/Home/home.vue'
import category from '@/views/Category/category.vue'
import subcategory from '@/views/Category/subcategory.vue'
import detail from '@/views/Detail/detail.vue'
import cart from '@/views/Cart/cart.vue'
import order from '@/views/Order/order.vue'
import user from '@/views/User/user.vue'
import userInfo from '@/views/User/components/UserInfo.vue'
import userOrder from '@/views/User/components/UserOrder.vue'
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
        }, {
          path: '/cart',
          component: cart
        },
        {
          path: '/order',
          component: order
        }
        ,
        {
          path: '/user',
          component: user,
          children: [
            {
              path: 'userInfo',
              component: userInfo
            },
            {
              path: 'userOrder',
              component: userOrder
            }
          ]
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
