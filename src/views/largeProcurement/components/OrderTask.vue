<template>
  <div class="rowClass">用户：A医院 地理位置：(350, 359)</div>
  <div>
    <div v-if="showSelect">
      订单筛选：
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        size="default"
      />
    </div>
    <pure-table :data="orderData" :columns="showColumns" stripe height="600" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { useColumns } from "./columns";
const { orderData, orderColumns } = useColumns();
const value1 = ref("");
// showOperation为父组件传入值showOperation，若父组件未传入该值，则默认为true
const props = defineProps({
  showOperation: {
    type: Boolean,
    default: true
  },
  showSelect: {
    type: Boolean,
    default: true
  }
});
// 若showOperation为true，计算属性showColumns为orderColumns删除最后一项，否则为orderColumns
const showColumns = computed(() => {
  return props.showOperation
    ? orderColumns
    : orderColumns.slice(1, useColumns.length - 1);
});
</script>

<style scoped>
.rowClass {
  margin-bottom: 20px;
}
</style>
