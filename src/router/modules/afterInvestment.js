/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/afterInvestment',
  component: Layout,
  redirect: 'index',
  name: 'afterInvestment',
  meta: {
    title: '投后管理', icon: 'dashboard'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/asset-accounting'),
      name: 'KeyboardChart',
      meta: { title: '资产建账', noCache: true, icon: 'dashboard' },
      children: [
        {
          path: "/asset-accounting/index/essential/:id/:miao",
          name: "essential",
          hidden: true,
          component: () => import("@/views/asset-accounting/information.vue"),
          meta: {
            title: "基本信息",
            icon: 'dashboard'
          },
        },
      ]
    },
   
    {
      path: 'line',
      component: () => import('@/views/daily-management/index'),
      name: 'LineChart',
      meta: { title: '日常管理', noCache: true, icon: 'dashboard' },
      children: [
        {
          path: "/afterInvestment/index/daily/:id/:miao",
          name: "daily",
          hidden: true,
          component: () => import("@/views/daily-management/details"),
          meta: {
            title: "基本信息",
            icon: 'dashboard'
          },
        },
      ]
    }
  ]
}

export default chartsRouter
