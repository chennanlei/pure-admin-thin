<script setup lang="ts">
import TypeIt from "@/components/ReTypeit";
import { ref, computed } from "vue";
import PartInfo from "./components/partInfo.vue";
import GroupInfo from "./components/groupInfo.vue";
import TimeInfo from "./components/timeInfo.vue";
import ShutdownInfo from "@/views/dataManagement/components/shutdownInfo.vue";

defineOptions({
  name: "DataManagement"
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
    <el-row :gutter="30">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="10"
        :xl="10"
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
            <div :class="titleClass">
              <TypeIt
                :className="'type-it1'"
                :values="['零件信息']"
                :cursor="false"
                :speed="120"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <PartInfo />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="10"
        :xl="10"
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
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it4'"
                :values="['班组人员信息']"
                :cursor="false"
                :speed="120"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <GroupInfo />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="10"
        :xl="10"
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
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it3'"
                :values="['班期信息']"
                :cursor="false"
                :speed="120"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <TimeInfo />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="10"
        :xl="10"
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
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <div :class="titleClass">
              <TypeIt
                :className="'type-it5'"
                :values="['班组停工信息']"
                :cursor="false"
                :speed="120"
              />
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <shutdown-info />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.el-card :deep(.el-card__header) {
  padding-bottom: 5px;
  padding-top: 5px;
}

.el-card :deep(.el-card__body) {
  padding: 5px;
}

:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}

.main-content {
  margin: 20px 20px 0 20px !important;
}
</style>
