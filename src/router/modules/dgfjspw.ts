export default {
  path: "/dgfjspw",
  meta: {
    icon: "userFilled",
    title: "DGFJSPW",
    rank: 4
  },
  children: [
    {
      path: "/dgfjspw/orderSelect",
      name: "DGFJSPWOrderSelect",
      component: () => import("@/views/dgfjspw/orderSelect.vue"),
      meta: {
        title: "订单选取"
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
      path: "/dgfjspw/simulation",
      name: "DGFJSPWSimulation",
      component: () => import("@/views/dgfjspw/simulation.vue"),
      meta: {
        title: "仿真测试"
      }
    }
  ]
} as RouteConfigsTable;
