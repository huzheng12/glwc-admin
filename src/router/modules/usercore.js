
import Layout from '@/layout/index'

export default {
  path: '/usercore',
  component: Layout,
  redirect: 'index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/usercore/index.vue'),
      name: 'usercore',
      meta: { title: '个人主页', affix: true, icon: 'dashboard' },
    },
    {
      path: "/addRole",
      name: "AddRole",
      hidden: true,
      component: () => import("@/views/index.vue"),
      meta: {
        title: "添加角色", affix: true, icon: 'dashboard'
      },
    },
  ]
}

