<script setup lang="ts">
import { useColumns } from "./columns";
import gn from "@/assets/greyProcessingTime/gn.png";

const {
  dataList,
  recordColumns,
  pagination,
  tableSize,
  onSizeChange,
  onCurrentChange
} = useColumns();
</script>

<template>
  <div>
    <el-button type="primary">新增记录数据</el-button>
    <pure-table
      :size="tableSize"
      :height="tableSize === 'small' ? 150 : 300"
      :data="
        dataList.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :columns="recordColumns"
      :pagination="pagination"
      @page-size-change="onSizeChange"
      @page-current-change="onCurrentChange"
    />
    <div>
      <el-button type="success">灰工时表征</el-button>
      <div style="width: 450px; height: 450px">
        <img :src="gn" class="imgD" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgD {
  clear: both;
  display: block;
  margin-left: 150px;
}
</style>
