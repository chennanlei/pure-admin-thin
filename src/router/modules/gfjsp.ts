import DataAnalysis from "@iconify-icons/ep/data-analysis";

export default {
  path: "/gfjsp",
  meta: {
    icon: DataAnalysis,
    title: "GFJSP",
    rank: 2
  },
  children: [
    {
      path: "/gfjsp/orderSelect",
      name: "GFJSPOrderSelect",
      component: () => import("@/views/gfjsp/orderSelect.vue"),
      meta: {
        title: "订单选取"
      }
    },
    {
      path: "/gfjsp/scheduling",
      name: "GFJSPScheduling",
      component: () => import("@/views/gfjsp/scheduling.vue"),
      meta: {
        title: "生产调度"
      }
    }
  ]
} as RouteConfigsTable;
