<template>
  <div class="rowType">
    <el-button type="primary" :icon="useRenderIcon(addOutline)"
      >新增班组人员信息</el-button
    >
  </div>
  <div>
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
      :columns="groupColumns"
      :pagination="pagination"
      @page-current-change="onCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "GroupInfo"
});
import { PaginationProps } from "@pureadmin/table";
import { useColumns } from "./columns";
import { clone, delay } from "@pureadmin/utils";
import { onMounted, reactive, ref } from "vue";

import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import addOutline from "@iconify-icons/zondicons/add-outline";

const { groupData, groupColumns, loading, loadingConfig, onCurrentChange } =
  useColumns();

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
      newList.push(clone(groupData, true));
    });
    dataList.value = newList.flat(Infinity);
    pagination.total = dataList.value.length;
    loading.value = false;
  });
});
</script>

<style scoped>
.rowType {
  margin: 6px;
}
</style>
