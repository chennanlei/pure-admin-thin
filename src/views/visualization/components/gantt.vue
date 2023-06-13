<template>
  <div ref="ganttRef" />
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";
import { gantt } from "dhtmlx-gantt"; // 引入dhtmlx-gantt
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
  scale: {
    type: Array,
    default: () => {
      return [];
    }
  },
  // 时间显示格式
  dateScale: {
    type: String,
    default: "%Y-%m-%d"
  }
});
const ganttRef = ref();
onMounted(() => {
  // 清空之前的配置
  gantt.clearAll();
  // 默认配置
  gantt.i18n.setLocale("cn"); // 设置中文
  gantt.config.readonly = true; // 设置为只读
  gantt.config.open_tree_initially = true; // 默认展开
  // 显示列配置
  gantt.config.columns = props.columns;
  // gantt.config.scale_unit = props.scaleUnit;
  gantt.config.date_format = props.dateScale;
  gantt.config.scales = props.scale;
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
