<script setup lang="ts">
import { computed, ref } from "vue";
import TypeIt from "@/components/ReTypeit";
import OrderSelect from "./components/OrderSelect.vue";
import Parameter from "./components/Parameter.vue";
// import Rule from "./components/Rule.vue";

defineOptions({
  name: "DGFJSPScheduling"
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
                :values="['动态监控信息']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <OrderSelect />
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
                :values="['动态调度']"
                :cursor="false"
                :speed="80"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Parameter />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
    <!--    <el-row :gutter="24">-->
    <!--      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-[18px]">-->
    <!--        <el-card shadow="never" style="height: 100%">-->
    <!--          <template #header>-->
    <!--            <div :class="titleClass">-->
    <!--              <TypeIt-->
    <!--                :className="'type-it5'"-->
    <!--                :values="['决策规则']"-->
    <!--                :cursor="false"-->
    <!--                :speed="80"-->
    <!--              />-->
    <!--            </div>-->
    <!--          </template>-->
    <!--          <el-skeleton animated :rows="7" :loading="loading">-->
    <!--            <template #default>-->
    <!--              <Rule />-->
    <!--            </template>-->
    <!--          </el-skeleton>-->
    <!--        </el-card>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>
