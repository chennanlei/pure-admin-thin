<template>
  <div class="tableClass">
    设备资源
    <pure-table :data="machineData" :columns="machineColumns" stripe />
  </div>
  <div class="tableClass">
    车辆资源
    <pure-table :data="carData" :columns="carColumns" stripe />
  </div>
  <div class="rowType">
    <el-button type="primary" :icon="useRenderIcon(RunFill)"
      >生成计划</el-button
    >
    <el-button type="primary" :icon="useRenderIcon(DownloadFill)"
      >计划下载</el-button
    >
    <el-button type="primary" :icon="useRenderIcon(DocumentChecked)"
      >计划可视化</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import DocumentChecked from "@iconify-icons/ep/document-checked";
import DownloadFill from "@iconify-icons/ri/download-fill";
import RunFill from "@iconify-icons/ri/run-fill";
import { useColumns } from "./columns";
const { machineData, machineColumns, carData, carColumns } = useColumns();
</script>

<style scoped>
.tableClass {
  margin-bottom: 30px;
}
</style>
