import User from "@iconify-icons/ep/user";

export default {
  path: "/gfjspw",
  meta: {
    icon: User,
    title: "GFJSPW",
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
        title: "生产调度"
      }
    }
  ]
} as RouteConfigsTable;
