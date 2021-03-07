
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
        {
          path: "/businessTools/index/particulars/:id/:miao",
          name: "management",
          hidden: true,
          component: () => import("@/views/businessTools/index/particulars"),
          meta: {
            title: "主体管理-详情",
            icon: 'dashboard'
          },
        },
      ]
    },
    {
      path:'subjectManagement',
      component: () => import('@/views/businessTools/subjectManagement'),
      name: 'subjectManagement',
      meta: { title: '服务商管理', icon: 'dashboard' },
      children: [
        {
          path: "/businessTools/subjectManagement/particulars/:id/:miao",
          name: "serviceParticulars",
          hidden: true,
          component: () => import("@/views/businessTools/subjectManagement/particulars"),
          meta: {
            title: "服务商管理-详情",
            icon: 'dashboard'
          },
        },
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
        {
          path: "/businessTools/litigationManagement/detail",
          name: "litigationDetail",
          hidden: true,
          component: () => import("@/views/businessTools/litigationManagement/detail.vue"),
          meta: {
            title: "基本信息",
            icon: 'dashboard'
          },
        },
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

