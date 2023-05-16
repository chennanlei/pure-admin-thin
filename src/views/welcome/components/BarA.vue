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
const data = [
  { name: "设备AM5", used: 95, unused: 5 },
  { name: "设备AM4", used: 85, unused: 15 },
  { name: "设备AM3", used: 70, unused: 30 },
  { name: "设备AM2", used: 80, unused: 20 },
  { name: "设备AM1", used: 81, unused: 19 }
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
    xAxis: {
      type: "value"
    },
    yAxis: {
      type: "category",
      data: data.map(item => item.name)
    },
    series: [
      {
        name: "工作时间占比",
        type: "bar",
        stack: "total",
        color: "#1da60f",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: data.map(item => item.used)
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
        data: data.map(item => item.unused)
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
