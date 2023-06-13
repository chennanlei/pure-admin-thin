<template>
  <div>
    <pure-table
      stripe
      :loading="loading"
      :loading-config="loadingConfig"
      :height="350"
      :data="
        dataList.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :columns="shutdownColumns"
      :pagination="pagination"
      @page-current-change="onCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ShutdownInfo"
});
import { PaginationProps } from "@pureadmin/table";
import { useColumns } from "./columns";
import { clone, delay } from "@pureadmin/utils";
import { onMounted, reactive, ref } from "vue";

const {
  shutdownData,
  shutdownColumns,
  loading,
  loadingConfig,
  onCurrentChange
} = useColumns();

const dataList = ref([]);

/** 分页配置 */
const pagination = reactive<PaginationProps>({
  pageSize: 10,
  currentPage: 1,
  pageSizes: [10, 25, 50],
  total: 0,
  align: "right",
  background: true,
  small: true
});

onMounted(() => {
  delay(600).then(() => {
    const newList = [];
    Array.from({ length: 10 }).forEach(() => {
      newList.push(clone(shutdownData, true));
    });
    dataList.value = newList.flat(Infinity);
    pagination.total = dataList.value.length;
    loading.value = false;
  });
});
</script>

<style scoped></style>
