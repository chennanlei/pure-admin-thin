<template>
  <el-scrollbar height="324px">
    <el-timeline v-show="list?.length > 0">
      <el-timeline-item
        v-for="(item, index) in list"
        :key="index"
        :color="item.color"
        :timestamp="item.timestamp"
      >
        <md-editor v-model="item.content" preview-only />
      </el-timeline-item>
    </el-timeline>
    <el-empty v-show="list?.length === 0" />
  </el-scrollbar>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";

interface ListItem {
  content: string;
  timestamp: string;
  color: string;
}

const list: Array<ListItem> = [
  {
    content:
      "# A车间状态消息\n" +
      "### 📢 设备自动铺叠车间作业生产计划已完成\n" +
      "——请A车间执行车间作业生产计划\n" +
      "### 🕔 设备自动铺叠车间动态调度计划待完成\n\n" +
      "——请A车间调研人员制定动态调度计划\n",
    timestamp: "2022-08-01 12:00:00",
    color: "#0bbd87"
  },
  {
    content:
      "# B车间状态消息\n" +
      "### 🕔 工人手工铺叠车间作业生产计划待完成\n" +
      "——请A车间计划人员制定车间作业生产计划\n" +
      "### 🕔 工人手工铺叠车间动态调度计划待完成\n\n" +
      "——请A车间调研人员制定动态调度计划\n",
    timestamp: "2022-08-01 12:00:00",
    color: "#bd430b"
  },
  {
    content:
      "# A车间状态消息\n" +
      "### 📢 设备自动铺叠作业生产计划已完成\n" +
      "——请A车间执行作业生产计划\n" +
      "### 🕔 设备自动铺叠车间动态调度计划待完成\n\n" +
      "——请A车间调研人员制定动态调度计划\n",
    timestamp: "2022-08-01 12:00:00",
    color: "#0bbd87"
  }
];
</script>

<style scoped></style>
