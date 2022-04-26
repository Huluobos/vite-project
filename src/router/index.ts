import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/css/nprogress.css' // 进度条样式

import Layout from '@/layouts/index.vue' // 进度条样式

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('views/index/index.vue'),
            },
        ],
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('views/error/test.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(() => {
    NProgress.start() // start progress bar
    return true
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

export default router
