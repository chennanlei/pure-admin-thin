export default {
  path: "/dgfjspw",
  meta: {
    icon: "userFilled",
    title: "B车间动态调度",
    rank: 4
  },
  children: [
    {
      path: "/dgfjspw/orderSelect",
      name: "DGFJSPWOrderSelect",
      component: () => import("@/views/dgfjspw/orderSelect.vue"),
      meta: {
        title: "监控反馈",
        showLink: false
      }
    },
    {
      path: "/dgfjspw/simulation",
      name: "DGFJSPWSimulation",
      component: () => import("@/views/dgfjspw/simulation.vue"),
      meta: {
        title: "仿真测试",
        showLink: false
      }
    },
    {
      path: "/dgfjspw/scheduling",
      name: "DGFJSPWScheduling",
      component: () => import("@/views/dgfjspw/scheduling.vue"),
      meta: {
        title: "生产调度"
      }
    },
    {
      path: "/dgfjspw/planOutput",
      name: "DGFJSPWPlanOutput",
      component: () => import("@/views/dgfjspw/planOutput.vue"),
      meta: {
        title: "计划输出"
      }
    }
  ]
} as RouteConfigsTable;
