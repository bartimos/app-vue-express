import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Other from '../views/Other.vue'
import routerTest from '../views/RouterTest'
// 导入routerTest里面的子view
import routerView1 from '../views/routerViews/routerView1'
import routerView2 from '../views/routerViews/routerView2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: Other
  },
  {
    path: '/routerTest',
    name: 'routerTest',
    component: routerTest,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'routerView1',
        component: routerView1
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'routerView2',
        component: routerView2
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
