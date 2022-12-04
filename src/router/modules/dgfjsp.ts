import UserFilled from "@iconify-icons/ep/user-filled";

export default {
  path: "/dgfjsp",
  meta: {
    icon: UserFilled,
    title: "DGFJSP",
    rank: 4
  },
  children: [
    {
      path: "/dgfjsp/orderSelect",
      name: "DGFJSPOrderSelect",
      component: () => import("@/views/dgfjsp/orderSelect.vue"),
      meta: {
        title: "订单选取"
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
      path: "/dgfjsp/simulation",
      name: "DGFJSPSimulation",
      component: () => import("@/views/dgfjsp/simulation.vue"),
      meta: {
        title: "仿真测试"
      }
    }
  ]
} as RouteConfigsTable;
