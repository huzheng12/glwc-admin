/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/afterInvestment',
  component: Layout,
  redirect: 'index',
  name: 'afterInvestment',
  meta: {
    title: '投后管理'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '资产建账', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: '日常管理', noCache: true }
    }
  ]
}

export default chartsRouter
