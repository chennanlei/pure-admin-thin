export default {
  path: "/smallProcurement",
  meta: {
    icon: "twoToneShoppingCart",
    title: "小件耗材采购",
    rank: 1
  },
  children: [
    {
      path: "/smallProcurement/resource",
      name: "smallProcurementResource",
      component: () => import("@/views/smallProcurement/resource.vue"),
      meta: {
        title: "资源管理",
        icon: "folderOpened"
      }
    },
    {
      path: "/smallProcurement/order",
      name: "smallProcurementOrder",
      component: () => import("@/views/smallProcurement/order.vue"),
      meta: {
        title: "订单管理",
        icon: "document"
      }
    },
    {
      path: "/smallProcurement/scheduling",
      name: "smallProcurementScheduling",
      component: () => import("@/views/smallProcurement/scheduling.vue"),
      meta: {
        title: "集成调度",
        icon: "dataLine"
      }
    },
    {
      path: "/smallProcurement/visualization",
      name: "smallProcurementVisualization",
      component: () => import("@/views/smallProcurement/visualization.vue"),
      meta: {
        title: "计划可视化",
        icon: "dataAnalysis"
      }
    }
  ]
} as RouteConfigsTable;
