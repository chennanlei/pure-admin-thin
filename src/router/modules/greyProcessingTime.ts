import Timer from "@iconify-icons/ep/timer";

export default {
  path: "/greyProcessingTime",
  meta: {
    icon: Timer,
    title: "工时数据分析",
    rank: 1
  },
  children: [
    {
      path: "/greyProcessingTime/extraction",
      name: "greyProcessingTimeExtraction",
      component: () => import("@/views/greyProcessingTime/extraction.vue"),
      meta: {
        title: "工时数据分析"
      }
    }
    // {
    //   path: "/greyProcessingTime/evolution",
    //   name: "greyProcessingTimeEvolution",
    //   component: () => import("@/views/greyProcessingTime/evolution.vue"),
    //   meta: {
    //     title: "灰工时演化"
    //   }
    // }
  ]
} as RouteConfigsTable;
