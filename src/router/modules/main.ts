export default [
  {
    path: "/dataManagement",
    meta: {
      title: "数据管理",
      icon: "data"
    },
    children: [
      {
        path: "/dataManagement/index",
        name: "dataManagement",
        component: () => import("@/views/dataManagement/index.vue"),
        meta: {
          title: "数据管理模块"
        }
      }
    ]
  },
  {
    path: "/orderManagement",
    meta: {
      title: "订单管理",
      icon: "orderApprove"
    },
    children: [
      {
        path: "/orderManagement/index",
        name: "orderManagement",
        component: () => import("@/views/orderManagement/index.vue"),
        meta: {
          title: "订单管理模块"
        }
      }
    ]
  },
  {
    path: "/workerScheduling",
    meta: {
      title: "人员排班",
      icon: "peopleSharp"
    },
    children: [
      {
        path: "/workerScheduling/index",
        name: "workerScheduling",
        component: () => import("@/views/workerScheduling/index.vue"),
        meta: {
          title: "人员排班模块"
        }
      }
    ]
  },
  {
    path: "/visualization",
    meta: {
      title: "可视化",
      icon: "slideshowLine"
    },
    children: [
      {
        path: "/visualization/index",
        name: "visualization",
        component: () => import("@/views/visualization/index.vue"),
        meta: {
          title: "可视化模块"
        }
      }
    ]
  }
];
