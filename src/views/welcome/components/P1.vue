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
  { month: 7, before: 0.602, after: 0.507 },
  { month: 8, before: 0.895, after: 0.675 },
  { month: 9, before: 0.117, after: 0.378 },
  { month: 10, before: 0.884, after: 0.391 },
  { month: 11, before: 0.652, after: 0.4 },
  { month: 12, before: 0.442, after: 0.172 },
  { month: 1, before: 0.223, after: 0.739 },
  { month: 2, before: 0.847, after: 0.583 },
  { month: 3, before: 0.444, after: 0.862 },
  { month: 4, before: 0.117, after: 0.628 },
  { month: 5, before: 0.351, after: 0.282 },
  { month: 6, before: 0.612, after: 0.517 }
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
    data: ["实施前", "实施后"],
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
      name: "实施前",
      type: "bar",
      data: planCompletionRate.map(item => (item.before * 100).toFixed(1)),
      itemStyle: {
        color: "#d08080",
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
    },
    {
      name: "实施后",
      type: "bar",
      data: planCompletionRate.map(item => (item.after * 100).toFixed(1)),
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
        formatter: "{c}%",
        backgroundColor: "#eee"
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
