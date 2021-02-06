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
      component: () => import('@/views/components-demo/projectManagement'),
      name: 'TinymceDemo',
      meta: { title: '资产包管理', icon: 'dashboard' },
      children: [
        {
          path: "/beforeInvestment/index/essential/:id/:miao",
          name: "essential",
          hidden: true,
          component: () => import("@/views/components-demo/information.vue"),
          meta: {
            title: "基本信息",
            icon: 'dashboard'
          },
        },
      ]

    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/projectGl/index'),
      name: 'MarkdownDemo',
      meta: { title: '项目管理', icon: 'dashboard' },
      children: [
        {
          path: "/beforeInvestment/markdown/essential/:id/:miao",
          name: "projectGl",
          hidden: true,
          component: () => import("@/views/components-demo/projectGl/information"),
          meta: {
            title: "基本信息",
            icon: 'dashboard'
          },
        },
        {
          path: "/beforeInvestment/markdown/essential/:projectId/lawsuits/:id",
          name: "lawsuits",
          hidden: true,
          component: () => import("@/views/components-demo/projectGl/conns/addLitigation2"),
          meta: {
            title: "担保方式",
            icon: 'dashboard'
          },
        },
        {
          // PUT /projects/:projectId/otherGuarantees/:id
          path: "/beforeInvestment/markdown/projects/:projectId/otherGuarantees/:id",
          name: "otherbaoz",
          hidden: true,
          component: () => import("@/views/components-demo/projectGl/conns/otherBaoz"),
          meta: {
            title: "其他保证",
            icon: 'dashboard'
          },
        },
        {
          // PUT /projects/:projectId/mortgages/:mortgageId
          path: "/beforeInvestment/markdown/projects/:projectId/mortgages/:mortgageId",
          name: "collateral",
          hidden: true,
          component: () => import("@/views/components-demo/projectGl/conns/collateral"),
          meta: {
            title: "项目抵押物",
            icon: 'dashboard'
          },
        },
      ]
    },

  ]
}

