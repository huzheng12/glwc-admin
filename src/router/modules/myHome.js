
import Layout from '@/layout/index'
export default {
  path: '/',
  component: Layout,
  redirect: '/myHome',
  children: [
    {
      path: 'myHome',
      component: () => import("@/views/myHome"),
      name: 'myHome',
      meta: { title: '我的页面',affix: true, icon: 'dashboard' }
     

    }
]
}

