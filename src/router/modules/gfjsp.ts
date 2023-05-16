export default {
  path: "/gfjsp",
  meta: {
    icon: "dataAnalysis",
    title: "A车间生产计划",
    rank: 2
  },
  children: [
    {
      path: "/gfjsp/orderSelect",
      name: "GFJSPOrderSelect",
      component: () => import("@/views/gfjsp/orderSelect.vue"),
      meta: {
        title: "订单处理"
      }
    },
    {
      path: "/gfjsp/scheduling",
      name: "GFJSPScheduling",
      component: () => import("@/views/gfjsp/scheduling.vue"),
      meta: {
        title: "生产排程",
        showLink: false
      }
    },
    {
      path: "/gfjsp/planOutput",
      name: "GFJSPPlanOutput",
      component: () => import("@/views/gfjsp/planOutput.vue"),
      meta: {
        title: "计划输出"
      }
    }
  ]
} as RouteConfigsTable;
