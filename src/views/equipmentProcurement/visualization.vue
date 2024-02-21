<script setup lang="ts">
import { computed, ref } from "vue";
import TypeIt from "@/components/ReTypeit";
import productionPlan from "@/assets/equipmentProcurement/productionPlan.jpg";
import transportationPlan from "./components/transportationPlan.vue";
defineOptions({
  name: "equipmentProcurementVisualization"
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
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        style="height: 800px"
      >
        <el-card shadow="never" style="height: 100%">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it1'"
                :values="['生产计划']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <div style="width: 800px; height: 900px">
              <img :src="productionPlan" class="imgD" />
            </div>
          </el-skeleton>
        </el-card>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        style="height: 800px"
      >
        <el-card shadow="never" style="height: 100%">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it2'"
                :values="['运输计划']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <transportationPlan />
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.imgD {
  display: block;
  width: 900px;
  height: 650px;
  margin-left: 60px;
  clear: both;
}
</style>
