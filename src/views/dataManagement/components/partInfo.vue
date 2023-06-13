<template>
  <div class="rowType">
    <div style="margin: 5px">
      零件筛选：
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        size="default"
      />
    </div>
    <pure-table
      stripe
      :loading="loading"
      :loading-config="loadingConfig"
      :height="300"
      :data="
        dataList.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :columns="partColumns"
      :pagination="pagination"
      @page-current-change="onCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { PaginationProps } from "@pureadmin/table";

defineOptions({
  name: "PartInfo"
});

import { useColumns } from "./columns";
import { clone, delay } from "@pureadmin/utils";
import { onMounted, reactive, ref } from "vue";

const { partData, partColumns, loading, loadingConfig, onCurrentChange } =
  useColumns();
const value1 = ref("");
const dataList = ref([]);

/** 分页配置 */
const pagination = reactive<PaginationProps>({
  pageSize: 5,
  currentPage: 1,
  pageSizes: [5, 10, 15],
  total: 0,
  align: "right",
  background: true,
  small: true
});

onMounted(() => {
  delay(600).then(() => {
    const newList = [];
    Array.from({ length: 10 }).forEach(() => {
      newList.push(clone(partData, true));
    });
    dataList.value = newList.flat(Infinity);
    pagination.total = dataList.value.length;
    loading.value = false;
  });
});
</script>

<style scoped>
.rowType {
  margin-bottom: 0;
}
</style>
