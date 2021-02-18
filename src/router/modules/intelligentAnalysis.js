
import Layout from '@/layout/index'

export default {
  path: '/intelligentAnalysis',
  component: Layout,
  redirect: 'index',
  name: 'intelligentAnalysis',
  meta: { title: '智能分析', icon: 'dashboard' },
  children:[
    {
      path:'index',
      component: () => import('@/views/intelligentAnalysis/index'),
      name: 'intelligentAnalysisindex',
      meta: { title: '数据大盘', icon: 'dashboard' },
      children: [
      ]
    },
    {
      path:'valuationCalculation',
      component: () => import('@/views/intelligentAnalysis/valuationCalculation'),
      name: 'valuationCalculation',
      meta: { title: '估值测算', icon: 'dashboard' },
      children: [

      ]
    }  
  ]
}

