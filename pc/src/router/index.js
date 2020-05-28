import VueRouter from 'vue-router'
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import layoutMain from '@/components/layout/layout-main.vue'

const _import = require('./_import_' + process.env.NODE_ENV)



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/list/task',
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/index',
        component: {
            template: '<router-view />'
        },
        children: [{
            path: 'index',
            name: '',
            meta: {
                title: '首页'
            },
            component: _import('home/index')
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: layoutMain,
        children: [
            {
                path: 'modify-password',
                name: 'modify-password',
                component: () => import ('@/views/login/modify-password.vue')
            },
            {
                path: 'login-index',
                name: 'login-index',
                component: () => import ('@/views/login/index')
            },
        ]
    },
    {
        path: '/list',
        name: 'list',
        component: layoutMain,
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import ('@/views/list/user.vue')
            },
            {
                path: 'user-modify',
                name: 'user-modify',
                component: () => import ('@/views/user/modify.vue')
            },
            {
                path: 'task',
                name: 'task',
                component: () => import ('@/views/list/task.vue')
            },
            {
                path: 'earnings',
                name: 'earnings',
                component: () => import ('@/views/list/earnings.vue')
            },
        ]
    },
    {
        path: '/add',
        name: 'add',
        component: layoutMain,
        children: [
            {
                path: 'user',
                name: 'add-user',
                component: () => import ('@/views/add/user.vue')
            },
        ]
    },
    {
        path: '/map',
        name: 'map',
        component: () => import ('@/views/example/map.vue')
    },
    {
        path: '/highcharts',
        name: 'highcharts',
        component: () => import ('@/views/example/highcharts.vue')
    },
    {
        path: '/route',
        name: 'route',
        component: () => import ('@/views/example/route.vue')
    },
    // {
    //     path: '/404',
    //     name: '404',
    //     component: _import('err/404')
    // },
    // {
    //     path: '*',
    //     name: 'default',
    //     redirect: '/404',
    // },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
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


// router.beforeEach((to, from, next) => {
//     console.log('router.beforeEach')
//     NProgress.start()
//     next()
//     let token = getToken()
//     console.log('token',token)
//     if(!token) {
//         next('/login/login-index');
//     } else {
//         next()
//     }
// })

// router.afterEach((to, from) => {
//     console.log('router.afterEach')
//     NProgress.done()
// })


export default router