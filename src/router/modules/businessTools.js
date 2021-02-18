
import Layout from '@/layout/index'

export default {
  path: '/businessTools',
  component: Layout,
  redirect: 'index',
  name: 'businessTools',
  meta: { title: '业务工具', icon: 'dashboard' },
  children:[
    {
      path:'index',
      component: () => import('@/views/businessTools/index'),
      name: 'TinymceDemo',
      meta: { title: '主体管理', icon: 'dashboard' },
      children: [
      ]
    },
    {
      path:'subjectManagement',
      component: () => import('@/views/businessTools/subjectManagement'),
      name: 'subjectManagement',
      meta: { title: '服务商管理', icon: 'dashboard' },
      children: [

      ]


    },
    {
      path:'financingAccount',
      component: () => import('@/views/businessTools/financingAccount'),
      name: 'financingAccount',
      meta: { title: '融资台账', icon: 'dashboard' },
      children: [

      ]


    },
    {
      path:'litigationManagement',
      component: () => import('@/views/businessTools/litigationManagement'),
      name: 'litigationManagement',
      meta: { title: '诉讼管理', icon: 'dashboard' },
      children: [

      ]


    },
    {
      path:'fileManagement',
      component: () => import('@/views/businessTools/fileManagement'),
      name: 'fileManagement',
      meta: { title: '文件管理', icon: 'dashboard' },
      children: [

      ]


    }
  ]
}

