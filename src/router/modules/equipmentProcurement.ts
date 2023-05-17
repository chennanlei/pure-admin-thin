export default {
  path: "/equipmentProcurement",
  meta: {
    icon: "teeth",
    title: "口腔设备采购",
    rank: 4
  },
  children: [
    {
      path: "/equipmentProcurement/resource",
      name: "equipmentProcurementResource",
      component: () => import("@/views/equipmentProcurement/resource.vue"),
      meta: {
        title: "资源管理",
        icon: "folderOpened"
      }
    },
    {
      path: "/equipmentProcurement/order",
      name: "equipmentProcurementOrder",
      component: () => import("@/views/equipmentProcurement/order.vue"),
      meta: {
        title: "订单管理",
        icon: "document"
      }
    },
    {
      path: "/equipmentProcurement/scheduling",
      name: "equipmentProcurementScheduling",
      component: () => import("@/views/equipmentProcurement/scheduling.vue"),
      meta: {
        title: "集成调度",
        icon: "dataLine"
      }
    },
    {
      path: "/equipmentProcurement/visualization",
      name: "equipmentProcurementVisualization",
      component: () => import("@/views/equipmentProcurement/visualization.vue"),
      meta: {
        title: "计划可视化",
        icon: "dataAnalysis"
      }
    }
  ]
} as RouteConfigsTable;
