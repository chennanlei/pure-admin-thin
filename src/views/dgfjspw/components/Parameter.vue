<template>
  <div>
    <div>
      预热规模：<el-input-number
        v-model="input"
        :min="500"
        :max="1000"
        @change="handleChange"
      />
      仿真规模：<el-input-number
        v-model="input2"
        :min="1000"
        :max="2000"
        @change="handleChange"
      />
    </div>
    <div class="rowType">
      工作单位利用水平：<el-input-number
        v-model="input3"
        :precision="2"
        :step="0.01"
        :min="0.95"
        :max="1"
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
        >寻找最优调度规则</el-button
      >
      <el-button type="success" :icon="useRenderIcon(DownloadFill)"
        >动态调度计划下载</el-button
      >
      <el-button type="success" :icon="useRenderIcon(DocumentChecked)"
        >调度规则可视化</el-button
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

const input = ref("");
const input2 = ref("");
const input3 = ref("");
const { machineData, machineColumns, workerData, workerColumns } = useColumns();
</script>

<style scoped>
.rowType {
  margin-top: 30px;
}
</style>
