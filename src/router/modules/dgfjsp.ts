export default {
  path: "/dgfjsp",
  meta: {
    icon: "dataLine",
    title: "A车间动态调度",
    rank: 4
  },
  children: [
    {
      path: "/dgfjsp/orderSelect",
      name: "DGFJSPOrderSelect",
      component: () => import("@/views/dgfjsp/orderSelect.vue"),
      meta: {
        title: "监控反馈",
        showLink: false
      }
    },
    {
      path: "/dgfjsp/simulation",
      name: "DGFJSPSimulation",
      component: () => import("@/views/dgfjsp/simulation.vue"),
      meta: {
        title: "仿真测试",
        showLink: false
      }
    },
    {
      path: "/dgfjsp/scheduling",
      name: "DGFJSPScheduling",
      component: () => import("@/views/dgfjsp/scheduling.vue"),
      meta: {
        title: "生产调度"
      }
    },
    {
      path: "/dgfjsp/planOutput",
      name: "DGFJSPPlanOutput",
      component: () => import("@/views/dgfjsp/planOutput.vue"),
      meta: {
        title: "计划输出"
      }
    }
  ]
} as RouteConfigsTable;
