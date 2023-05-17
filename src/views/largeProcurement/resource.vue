<script setup lang="ts">
import { computed, ref } from "vue";
import TypeIt from "@/components/ReTypeit";
import ResourceManagement from "./components/ResourceManagement.vue";
import MachineStatus from "./components/MachineStatus.vue";
import MachineBar from "./components/MachineBar.vue";

defineOptions({
  name: "largeProcurementResource"
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
                :values="['资源管理']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <ResourceManagement />
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
                :values="['状态信息']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <MachineStatus />
            </template>
          </el-skeleton>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <MachineBar />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
