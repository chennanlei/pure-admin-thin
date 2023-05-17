export default {
  path: "/largeProcurement",
  meta: {
    icon: "sharpShoppingCart",
    title: "批量耗材采购",
    rank: 2
  },
  children: [
    {
      path: "/largeProcurement/resource",
      name: "largeProcurementResource",
      component: () => import("@/views/largeProcurement/resource.vue"),
      meta: {
        title: "资源管理",
        icon: "folderOpened"
      }
    },
    {
      path: "/largeProcurement/order",
      name: "largeProcurementOrder",
      component: () => import("@/views/largeProcurement/order.vue"),
      meta: {
        title: "订单管理",
        icon: "document"
      }
    },
    {
      path: "/largeProcurement/scheduling",
      name: "largeProcurementScheduling",
      component: () => import("@/views/largeProcurement/scheduling.vue"),
      meta: {
        title: "集成调度",
        icon: "dataLine"
      }
    },
    {
      path: "/largeProcurement/visualization",
      name: "largeProcurementVisualization",
      component: () => import("@/views/largeProcurement/visualization.vue"),
      meta: {
        title: "计划可视化",
        icon: "dataAnalysis"
      }
    }
  ]
} as RouteConfigsTable;
