<template>
  <div class="rowType">
    <el-button type="primary" :icon="useRenderIcon(AddCardOutlineSharp)"
      >注册新资源</el-button
    >
  </div>
  <div class="rowType2">
    <div>
      设备信息筛选：
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="筛选信息"
        :prefix-icon="useRenderIcon(Search)"
        style="display: inline"
      />
    </div>
  </div>
  <div class="rowType">
    设备资源
    <pure-table :data="machineData" :columns="machineColumns" stripe />
  </div>
  <div class="rowType2">
    <div>
      车辆信息筛选：
      <el-input
        v-model="input3"
        class="w-50 m-2"
        placeholder="筛选信息"
        :prefix-icon="useRenderIcon(Search)"
        style="display: inline"
      />
    </div>
  </div>
  <div class="rowType">
    车辆资源
    <pure-table :data="carData" :columns="carColumns" stripe />
  </div>
</template>

<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddCardOutlineSharp from "@iconify-icons/material-symbols/add-card-outline-sharp";
import Search from "@iconify-icons/ep/search";
import { useColumns } from "./columns";
import { ref } from "vue";
const { machineData, machineColumns, carData, carColumns } = useColumns();
const input2 = ref("");
const input3 = ref("");
</script>

<style scoped>
.rowType {
  margin-bottom: 30px;
}

.rowType2 {
  margin-bottom: 10px;
}
</style>
