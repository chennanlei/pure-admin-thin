<script setup lang="ts">
import { computed, ref } from "vue";
import TypeIt from "@/components/ReTypeit";
import OrderTask from "./components/OrderTask.vue";
import OrderStatus from "./components/OrderStatus.vue";
import OrderPie from "./components/OrderPie.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import NewWindowSharp from "@iconify-icons/material-symbols/new-window-sharp";
import WaitlistConfirm from "@iconify-icons/fluent-mdl2/waitlist-confirm";

defineOptions({
  name: "largeProcurementOrder"
});
const loading = ref<boolean>(true);
const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});
setTimeout(() => {
  loading.value = !loading.value;
}, 800);
</script>

<template>
  <div>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-[18px]">
        <el-card shadow="never" style="height: 100%">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it1'"
                :values="['订单任务管理']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <div class="rowClass">
              <el-button type="primary" :icon="useRenderIcon(NewWindowSharp)"
                >新增订单</el-button
              >
              <el-button type="primary" :icon="useRenderIcon(WaitlistConfirm)"
                >确认下单</el-button
              >
            </div>
          </el-skeleton>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <OrderTask />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-[18px]">
        <el-card shadow="never" style="height: 100%">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it2'"
                :values="['订单状态信息']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <OrderStatus />
            </template>
          </el-skeleton>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <OrderPie />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.rowClass {
  margin-bottom: 20px;
}
</style>
