import VueRouter from 'vue-router'
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import layoutMain from '@/components/layout/layout-main.vue'

const _import = require('./_import_' + process.env.NODE_ENV)



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/home/index',
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
                component: () => import ('@/views/login/index.vue')
            },
        ]
    },
    // {
    //     path: '/user',
    //     name: 'user',
    //     component: layoutMain,
    //     children: [
    //         {
    //             path: 'list',
    //             name: 'list',
    //             component: () => import ('@/views/user/list.vue')
    //         },
    //     ]
    // },
    {
        path: '/user-list',
        name: 'user-list',
        component: () => import ('@/views/user/list.vue')
    },
    {
        path: '/404',
        name: '404',
        component: _import('err/404')
    },
    {
        path: '*',
        name: 'default',
        redirect: '/404',
    },
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


router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})


export default router