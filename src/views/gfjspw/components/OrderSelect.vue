<template>
  <div>
    订单筛选：
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      size="default"
    />
    <pure-table :data="orderData" :columns="orderColumns" stripe />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";
const { orderData, orderColumns } = useColumns();
const value1 = ref("");
</script>

<style scoped></style>
