/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const businessRouter = {
  path: '/instrument',
  component: Layout,
  redirect: 'index',
  name: 'instrument',
  meta: {
    title: '业务工具',
    icon: 'dashboard' 
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/instrument/facilitator'),
      name: 'Facilitator',
      meta: { title: '服务商管理',icon: 'dashboard' }
    },
    {
      path: 'Management',
      component: () => import('@/views/instrument/Management'),
      name: 'Management',
      meta: { title: '服务商管理-详情',icon: 'dashboard' }
    },
    
  ]
}

export default businessRouter


/** When your routing table is too long, you can split it into small modules**/

