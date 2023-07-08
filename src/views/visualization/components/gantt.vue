<template>
  <div ref="ganttRef" />
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";
import "dhtmlx-gantt"; // 引入dhtmlx-gantt

const props = defineProps({
  // 任务对象
  tasks: {
    type: Object,
    default: () => {
      return {
        data: [], // 数据数组
        links: [] // 连接关系
      };
    }
  },
  // 显示列设置
  columns: {
    type: Array,
    default: () => {
      return [];
    }
  },
  // 显示单位
  scales: {
    type: Array,
    default: () => {
      return [];
    }
  },
  // 时间显示格式
  dateScale: {
    type: String,
    default: "%Y-%m-%d"
  },
  rowHeight: {
    type: Number,
    default: 100
  },
  barHeight: {
    type: Number,
    default: 50
  }
});
const ganttRef = ref();
onMounted(() => {
  const gantt = Gantt.getGanttInstance();
  // 清空之前的配置
  gantt.clearAll();
  // 默认配置
  gantt.i18n.setLocale("cn"); // 设置中文
  gantt.config.readonly = false; // 设置为只读
  gantt.config.open_tree_initially = true; // 默认展开
  // 显示列配置
  gantt.config.columns = props.columns;
  gantt.config.min_column_width = 20;
  gantt.config.scale_height = 20 * 3;
  gantt.config.date_format = props.dateScale;
  // 遍历props.tasks每一项，新增row_height属性，值为30
  props.tasks.data.forEach(item => {
    item.row_height = props.rowHeight;
  });
  gantt.config.bar_height = props.barHeight;
  gantt.templates.timeline_cell_class = function (task, date) {
    if (date.getHours() == 8) {
      return "day_start";
    }
    if (date.getHours() == 18) {
      return "day_end";
    }
    return "";
  };
  gantt.config.scales = props.scales;
  gantt.ignore_time = function (date) {
    if (date.getDay() == 0 || date.getDay() == 6) return true;
    return (
      date.getHours() < 8 ||
      date.getHours() > 17 ||
      (date.getHours() > 11 && date.getHours() < 14)
    );
  };
  gantt.templates.task_text = function (start, end, task) {
    // 若task中有render属性，且值为"split"，则返回""，否则返回task.description
    if (task.render === "split") {
      return "";
    } else return task.description;
  };
  // 初始化甘特图
  gantt.init(ganttRef.value);
  // 渲染数据
  gantt.parse(props.tasks);
});
</script>

<style scoped></style>
