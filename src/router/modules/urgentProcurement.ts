export default {
  path: "/urgentProcurement",
  meta: {
    icon: "e911Emergency",
    title: "紧急耗材需求",
    rank: 3
  },
  children: [
    {
      path: "/urgentProcurement/resource",
      name: "urgentProcurementResource",
      component: () => import("@/views/urgentProcurement/resource.vue"),
      meta: {
        title: "资源管理",
        icon: "folderOpened"
      }
    },
    {
      path: "/urgentProcurement/order",
      name: "urgentProcurementOrder",
      component: () => import("@/views/urgentProcurement/order.vue"),
      meta: {
        title: "订单管理",
        icon: "document"
      }
    },
    {
      path: "/urgentProcurement/scheduling",
      name: "urgentProcurementScheduling",
      component: () => import("@/views/urgentProcurement/scheduling.vue"),
      meta: {
        title: "集成调度",
        icon: "dataLine"
      }
    },
    {
      path: "/urgentProcurement/visualization",
      name: "urgentProcurementVisualization",
      component: () => import("@/views/urgentProcurement/visualization.vue"),
      meta: {
        title: "计划可视化",
        icon: "dataAnalysis"
      }
    }
  ]
} as RouteConfigsTable;
