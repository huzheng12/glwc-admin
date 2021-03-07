import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import beforeInvestmentRouter from './modules/beforeInvestment'
import afterInvestmentRouter from './modules/afterInvestment'
import businessTools from './modules/businessTools'
import intelligentAnalysis from './modules/intelligentAnalysis'
import myHome from './modules/myHome'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: '首页', affix: true, icon: 'dashboard' }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  beforeInvestmentRouter,
  afterInvestmentRouter,
  businessTools,
  intelligentAnalysis,
  myHome,


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

import store from '../store'
// 监听全局路由      跳转三级路由时取消二级路由页面
router.beforeEach((to, from, next) => {
  console.log(to, '---');
  if (to.name === 'essential'
    || to.name === "projectGl"
    || to.name === "collateral"
    || to.name === "lawsuits"
    || to.name === "litigationDetail"
    || to.name === "daily"
    || to.name == 'otherbaoz'
    || to.name == 'management'
    || to.name == 'serviceParticulars'
    ) {
    store.dispatch("app/routerType", false);
  } else {
    store.dispatch("app/routerType", true);
  }
  next()
})
export default router
