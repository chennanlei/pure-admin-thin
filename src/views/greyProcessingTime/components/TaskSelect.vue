<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";

const size = "default";

const value1 = ref("");

const parentBorder = ref(false);
const childBorder = ref(false);
const { taskData, columns, childColumns } = useColumns();
</script>

<template>
  <div>
    任务筛选：
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :size="size"
    />
    <pure-table
      :data="taskData"
      :columns="columns"
      :border="parentBorder"
      stripe
    >
      <template #expand="{ row }">
        <div class="m-4">
          <h3>铺叠工艺流程</h3>
          <pure-table
            :data="row.ProcessInfo"
            :columns="childColumns"
            :border="childBorder"
            stripe
          />
        </div>
      </template>
    </pure-table>
  </div>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
