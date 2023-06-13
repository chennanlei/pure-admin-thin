<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "OrderManage"
});
const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});
import { ref, reactive } from "vue";
import Gantt from "./components/gantt.vue";
import { tasks, columns } from "./components/data";
const ganttTasks = reactive({ data: tasks });
const ganttColumns = ref(columns);
const scale = [
  { unit: "day", step: 1, format: "%F %d %l" },
  { unit: "hour", step: 1, format: "%G" }
];
const dateScale = ref("%Y-%m-%d %H:%i");
</script>

<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        :offset="0"
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
            <div :class="titleClass">人员排班甘特图</div>
          </template>
          <gantt
            :tasks="ganttTasks"
            :columns="ganttColumns"
            :scale="scale"
            :dateScale="dateScale"
            style="height: 800px"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
