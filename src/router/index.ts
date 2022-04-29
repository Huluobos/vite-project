import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import * as NProgress from "nprogress" // progress bar
import 'nprogress/css/nprogress.css' // 进度条样式

import Layout from '../layouts/index.vue'

NProgress.configure({ showSpinner: false })  // 进度条样式

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		children: [
			{
				path: 'index1',
				name: 'index1',
        component: () => import('views/error/test.vue'),
			},
		],
	},
	{
		path: '/test',
		name: 'Test',
		component: Layout,
		children: [
			{
				path: 'index2',
				name: 'index2',
				component: () => import('views/error/test.vue'),
			},
		],
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
