import { transportationData } from "./data";

export function useColumns() {
  const transportationColumns = [
    {
      label: "车辆",
      prop: "carNumber"
    },
    {
      label: "工序",
      prop: "process",
      width: 250
    },
    {
      label: "供应商",
      prop: "supplier",
      align: "center",
      children: [
        {
          label: "从",
          prop: "from",
          width: 100
        },
        {
          label: "到",
          prop: "to",
          width: 100
        }
      ]
    },
    {
      label: "出发时间",
      prop: "startTime"
    },
    {
      label: "抵达时间",
      prop: "endTime"
    }
  ];
  return {
    transportationColumns,
    transportationData
  };
}
