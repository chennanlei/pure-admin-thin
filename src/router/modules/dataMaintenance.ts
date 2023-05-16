export default {
  path: "/data",
  meta: {
    icon: "mdi:database-cog",
    title: "数据维护",
    rank: 5
  },
  children: [
    {
      path: "/data/dataMaintenance",
      name: "dataMaintenance",
      component: () => import("@/views/dataMaintenance/dataMaintenance.vue"),
      meta: {
        title: "数据维护"
      }
    }
  ]
} as RouteConfigsTable;
