<template>
  <div>
    <div>
      计划起止时间：
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        size="default"
      />
    </div>
    <div class="rowType">
      设备组：
      <pure-table :data="machineData" :columns="machineColumns" stripe />
    </div>
    <div class="rowType">
      工作组：
      <pure-table :data="workerData" :columns="workerColumns" stripe />
    </div>
    <div class="rowType">
      <el-button type="success" :icon="useRenderIcon(RunFill)"
        >生成计划</el-button
      >
      <el-button type="success" :icon="useRenderIcon(DownloadFill)"
        >计划下载</el-button
      >
      <el-button type="success" :icon="useRenderIcon(DocumentChecked)"
        >计划可视化</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import DocumentChecked from "@iconify-icons/ep/document-checked";
import DownloadFill from "@iconify-icons/ri/download-fill";
import RunFill from "@iconify-icons/ri/run-fill";

const value1 = ref("");
const { machineData, machineColumns, workerData, workerColumns } = useColumns();
</script>

<style scoped>
.rowType {
  margin-top: 30px;
}
</style>
