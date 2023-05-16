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

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

// 数据，这里假设已经从后端获取到了对应的数据
const machineData = [
  { name: "设备组BM1", used: 90, unused: 10, color: "#1da60f" },
  { name: "设备组BM2", used: 90, unused: 10, color: "#1da60f" },
  { name: "设备组BM3", used: 95, unused: 5, color: "#1da60f" },
  { name: "设备组BM4", used: 89, unused: 11, color: "#1da60f" },
  { name: "设备组BM5", used: 85, unused: 15, color: "#1da60f" },
  { name: "工作组BW1", used: 95, unused: 5, color: "#0f99a6" },
  { name: "工作组BM2", used: 85, unused: 15, color: "#0f99a6" },
  { name: "工作组BM3", used: 70, unused: 30, color: "#0f99a6" },
  { name: "工作组BM4", used: 80, unused: 20, color: "#0f99a6" },
  { name: "工作组BM5", used: 81, unused: 19, color: "#0f99a6" }
];

setOptions(
  {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      right: 1
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    yAxis: {
      type: "value"
    },
    xAxis: {
      type: "category",
      data: machineData.map(item => item.name)
    },
    series: [
      {
        name: "工作时间占比",
        type: "bar",
        stack: "total",
        color: "#0f99a6",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: machineData.map(item => item.used)
      },
      {
        name: "未工作时间占比",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        color: "#b4b9b4",
        data: machineData.map(item => item.unused)
      }
    ]
  },
  {
    name: "click",
    callback: params => {
      console.log("click", params);
    }
  },
  // 点击空白处
  {
    type: "zrender",
    name: "click",
    callback: params => {
      console.log("点击空白处", params);
    }
  }
);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 35vh" />
</template>
