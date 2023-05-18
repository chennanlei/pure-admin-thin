<script setup lang="ts">
import { computed, ref } from "vue";
import TypeIt from "@/components/ReTypeit";
import OrderTask from "./components/OrderTask.vue";
import IntegratedScheduling from "./components/IntegratedScheduling.vue";
defineOptions({
  name: "largeProcurementScheduling"
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
                :values="['订单任务']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <OrderTask :showOperation="false" :showSelect="false" />
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
                :values="['集成调度']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <IntegratedScheduling :showStatus="false" />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
