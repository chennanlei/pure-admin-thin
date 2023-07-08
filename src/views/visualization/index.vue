<script setup lang="ts">
defineOptions({
  name: "Visualization"
});
import { ref, reactive } from "vue";
import Gantt from "./components/gantt.vue";
import { tasks, columns } from "./components/data";
const ganttTasks = reactive({ data: tasks });
const ganttColumns = ref(columns);
const rowHeight = ref(100);
const barHeight = ref(60);
const scales = [
  { unit: "day", step: 1, format: "%n月%d日 %l" },
  { unit: "hour", step: 1, format: "%G" }
];
const dateScale = ref("%Y-%m-%d %H:%i");
</script>

<template>
  <gantt
    :tasks="ganttTasks"
    :columns="ganttColumns"
    :scales="scales"
    :dateScale="dateScale"
    :rowHeight="rowHeight"
    :barHeight="barHeight"
    style="height: 700px"
  />
</template>

<style lang="scss" scoped>
:deep(.gantt_task .gantt_task_scale .gantt_scale_cell) {
  color: #000000;
}

:deep(.gantt_grid_scale .gantt_grid_head_cell) {
  color: #000000;
}

:deep(.gantt_grid_data .gantt_cell) {
  color: #000000;
}
:deep(.gantt_task_content) {
  font-size: 18px;
}
:deep(.gantt_tree_content) {
  font-size: 18px;
}
:deep(.gantt_scale_cell) {
  font-size: 18px;
}
:deep(.gantt_grid_scale) {
  font-size: 18px;
}
</style>
