import VueRouter from 'vue-router'
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const _import = require('./_import_' + process.env.NODE_ENV)



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/home/index',
  },
  {
    path: '/home/index',
    name: 'home-index',
    component: () => import ('@/views/home/index.vue')
  },
  {
    path: '/task-task',
    name: 'task-task',
    component: () => import ('@/views/task/task.vue')
  },
  {
    path: '/task-taskbtn',
    name: 'task-taskbtn',
    component: () => import ('@/views/task/taskbtn.vue')
  },
  {
    path: '/task-particulars',
    name: 'task-particulars',
    component: () => import ('@/views/task/particulars.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    // 异步滚动操作
    return new Promise(resolve => {
      setTimeout(() => {
        document.querySelectorAll('body')[0].scrollTop = 0
        resolve({
          x: 0,
          y: 1
        })
      }, 0)
    })
  }
})


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})


export default router