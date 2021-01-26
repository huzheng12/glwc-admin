
import Layout from '@/layout/index'

export default {
  path: '/filemengt',
  component: Layout,
  redirect: 'index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/file-management/index.vue'),
      name: 'fileMent',
      meta: { title: '文件管理', affix: true , icon: 'dashboard'}
    },
  ]
}

