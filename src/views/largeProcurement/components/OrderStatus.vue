<template>
  <div>
    <div>任务实时状态：</div>
    <el-scrollbar class="tl" always>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
        >
          <el-card>{{ activity.content }}</el-card>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { MoreFilled } from "@element-plus/icons-vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

const activities = [
  {
    content: "订单KE10、KE03、KE14已装VB03车",
    timestamp: "2022.10.11 13:00",
    size: "large",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "订单KE04、KE05、KE07已加工完成",
    timestamp: "2022.10.11 14:21",
    color: "#f13645",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "订单KE20已加工完成",
    timestamp: "2022.10.11 16:00",
    color: "#6dec8b",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "订单KE10、KE03、KE14已运输完成",
    timestamp: "2022.10.11 21:35",
    color: "#ecd36d",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46"
  }
];
</script>

<style scoped>
.tl {
  height: 350px;
  margin: 10px 50px 20px;
}
</style>
