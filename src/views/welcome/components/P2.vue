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
const planCompletionRate = [
  { month: 7, rate: 0.602 },
  { month: 8, rate: 0.895 },
  { month: 9, rate: 0.817 },
  { month: 10, rate: 0.884 },
  { month: 11, rate: 0.652 },
  { month: 12, rate: 0.442 },
  { month: 1, rate: 0.573 },
  { month: 2, rate: 0.847 },
  { month: 3, rate: 0.644 },
  { month: 4, rate: 0.417 },
  { month: 5, rate: 0.751 },
  { month: 6, rate: 0.612 }
];

// 配置项
const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["平均负荷率"],
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
    data: planCompletionRate.map(item => `${item.month}月`)
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    axisLabel: {
      formatter: "{value}%"
    }
  },
  series: [
    {
      name: "平均负荷率",
      type: "bar",
      data: planCompletionRate.map(item => (item.rate * 100).toFixed(1)),
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
        position: "top",
        formatter: "{c}%"
      }
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
