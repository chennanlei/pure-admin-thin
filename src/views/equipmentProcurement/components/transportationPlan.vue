<script setup lang="ts">
import { useColumns } from "./columns";
const { transportationData, transportationColumns } = useColumns();
const rowSpanMethod = ({ row, rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if (
      rowIndex > 0 &&
      row.carNumber === transportationData[rowIndex - 1].carNumber
    ) {
      return {
        rowspan: 0,
        colspan: 0
      };
    } else {
      let count = 1;
      for (let i = rowIndex + 1; i < transportationData.length; i++) {
        if (
          transportationData[i].carNumber ==
          transportationData[rowIndex].carNumber
        ) {
          count++;
        }
      }
      return {
        rowspan: count,
        colspan: 1
      };
    }
  }
};
</script>

<template>
  <div>
    <pure-table
      :data="transportationData"
      :columns="transportationColumns"
      :span-method="rowSpanMethod"
      stripe
    />
  </div>
</template>
t="650
