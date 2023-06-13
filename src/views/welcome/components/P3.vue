<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const barChartRef = ref<HTMLDivElement | null>(null);

const { setOptions, resize } = useECharts(barChartRef as Ref<HTMLDivElement>, {
  theme
});

// 系统实施前后计划完成率
const planCompletionCount = [
  { month: 6, total: 437, completed: 405 },
  { month: 7, total: 365, completed: 345 },
  { month: 8, total: 468, completed: 430 },
  { month: 9, total: 523, completed: 497 },
  { month: 10, total: 533, completed: 513 }
];

// 通过total/completed计算完成率，乘以100，并保留1位小数, 加上百分号
planCompletionCount.forEach(item => {
  item.rate = ((item.completed / item.total) * 100).toFixed(1);
});
// 配置项
const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["下达数", "准时完成数", "准时完成率"],
    right: 1
  },
  grid: {
    left: "8%",
    right: "8%",
    bottom: "8%",
    containLabel: false
  },
  xAxis: {
    type: "category",
    data: planCompletionCount.map(item => `${item.month}月`)
  },
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 600,
      name: "数量",
      axisLabel: {
        formatter: "{value}"
      }
    },
    {
      type: "value",
      min: 91,
      max: 100,
      name: "完成率",
      axisLabel: {
        formatter: "{value}%"
      }
    }
  ],
  series: [
    {
      name: "下达数",
      type: "bar",
      data: planCompletionCount.map(item => item.total),
      itemStyle: {
        color: "#ecd36d",
        emphasis: {
          barBorderWidth: 1,
          shadowBlur: 4,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
          shadowColor: "rgba(0,0,0,0.3)"
        }
      },
      label: {
        show: true,
        position: "top"
      }
    },
    {
      name: "准时完成数",
      type: "bar",
      data: planCompletionCount.map(item => item.completed),
      itemStyle: {
        color: "#58b966",
        emphasis: {
          barBorderWidth: 1,
          shadowBlur: 4,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
          shadowColor: "rgba(0,0,0,0.3)"
        }
      },
      label: {
        show: true,
        position: "top"
      }
    },
    {
      name: "准时完成率",
      type: "line",
      yAxisIndex: 1,
      label: {
        show: true,
        position: "top",
        formatter: "{c}%",
        backgroundColor: "#eee"
      },
      data: planCompletionCount.map(item =>
        ((item.completed / item.total) * 100).toFixed(1)
      )
    }
  ]
};

setOptions(option);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="barChartRef" style="width: 100%; height: 35vh" />
</template>
