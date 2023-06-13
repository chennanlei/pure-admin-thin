<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useColumns } from "./components/columns";
import { useColumns as useColumnsOther } from "../dataManagement/components/columns";
import { PaginationProps } from "@pureadmin/table";
import { clone, delay } from "@pureadmin/utils";
defineOptions({
  name: "OrderManage"
});

const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});
const value1 = ref("");
const { orderData, orderColumns } = useColumns();
const { loading, loadingConfig, onCurrentChange } = useColumnsOther();
const dataList = ref([]);

/** 分页配置 */
const pagination = reactive<PaginationProps>({
  pageSize: 20,
  currentPage: 1,
  pageSizes: [20, 30, 40, 50],
  total: 0,
  align: "right",
  background: true,
  small: true
});

onMounted(() => {
  delay(600).then(() => {
    const newList = [];
    Array.from({ length: 10 }).forEach(() => {
      newList.push(clone(orderData, true));
    });
    dataList.value = newList.flat(Infinity);
    pagination.total = dataList.value.length;
    loading.value = false;
  });
});
</script>

<template>
  <div>
    <el-row :gutter="30">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="20"
        :xl="20"
        :offset="2"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <div :class="titleClass">订单管理</div>
          </template>
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
          </div>
          <pure-table
            stripe
            :loading="loading"
            :loading-config="loadingConfig"
            :height="700"
            :data="
              dataList.slice(
                (pagination.currentPage - 1) * pagination.pageSize,
                pagination.currentPage * pagination.pageSize
              )
            "
            :columns="orderColumns"
            :pagination="pagination"
            @page-current-change="onCurrentChange"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
