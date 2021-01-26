/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout/index'

export default {
  path: '/beforeInvestment',
  component: Layout,
  redirect: 'index',
  name: 'beforeInvestment',
  meta: { title: '投前管理', icon: 'dashboard' },
  children: [
    {
      path: 'index',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: '资产包管理', icon: 'dashboard' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: '项目管理', icon: 'dashboard' }
    }
  ]
}

