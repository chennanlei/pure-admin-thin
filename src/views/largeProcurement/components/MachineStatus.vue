<template>
  <div>
    <div>设备实时状态：</div>
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
    content: "设备AM01开始加工KE12、KE17、KE15",
    timestamp: "2022.10.10 08:00",
    size: "large",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "设备AM03开始加工KE20",
    timestamp: "2022.10.10 09:00",
    color: "#0bbd87",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "设备AM02开始加工KE08、KE09",
    timestamp: "2022.10.10 11:00",
    color: "#eccf6d",
    type: "primary",
    icon: useRenderIcon(MoreFilled)
  },
  {
    content: "Custom hollow",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    hollow: true,
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
  height: 300px;
  margin: 10px 50px 20px;
}
</style>
