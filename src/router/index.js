import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            // component: HelloWorld,
            component: () => import('@/views/home/index'),
        },
    ]
})