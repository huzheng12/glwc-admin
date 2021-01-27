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
      component: () => import('@/views/components-demo/projectManagement'),
      name: 'KeyboardChart',
      meta: { title: '资产建账', noCache: true, icon: 'dashboard' }
    },
    {
      path: 'line',
      component: () => import('@/views/components-demo/projectManagement'),
      name: 'LineChart',
      meta: { title: '日常管理', noCache: true, icon: 'dashboard' }
    }
  ]
}

export default chartsRouter
