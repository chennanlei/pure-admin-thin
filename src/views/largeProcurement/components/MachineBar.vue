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

// 数据，这里假设已经从后端获取到了对应的数据
const data = [
  { name: "AM06", used: 95, unused: 5 },
  { name: "AM05", used: 85, unused: 15 },
  { name: "AM04", used: 70, unused: 30 },
  { name: "AM03", used: 80, unused: 20 },
  { name: "AM02", used: 81, unused: 19 },
  { name: "AM01", used: 81, unused: 19 }
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
      orient: "horizontal",
      itemGap: 10,
      right: 1,
      padding: [0, 30, 0, 0]
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
        color: "#4296de",
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
  <div>
    <div>设备占用状态：</div>
    <div ref="barChartRef" class="tl" />
  </div>
</template>

<style scoped>
.tl {
  height: 350px;
  margin: 10px 30px 0;
}
</style>
