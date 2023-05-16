export default {
  path: "/gfjspw",
  meta: {
    icon: "user",
    title: "B车间生产计划",
    rank: 2
  },
  children: [
    {
      path: "/gfjspw/orderSelect",
      name: "GFJSPWOrderSelect",
      component: () => import("@/views/gfjspw/orderSelect.vue"),
      meta: {
        title: "订单选取"
      }
    },
    {
      path: "/gfjspw/scheduling",
      name: "GFJSPWScheduling",
      component: () => import("@/views/gfjspw/scheduling.vue"),
      meta: {
        title: "生产调度",
        showLink: false
      }
    },
    {
      path: "/gfjspw/planOutput",
      name: "GFJSPWPlanOutput",
      component: () => import("@/views/gfjspw/planOutput.vue"),
      meta: {
        title: "计划输出"
      }
    }
  ]
} as RouteConfigsTable;
