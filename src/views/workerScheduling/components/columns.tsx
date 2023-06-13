import { resultData } from "./data";

export function useColumns() {
  const resultColumns = [
    {
      label: "序号",
      type: "index",
      align: "center",
      width: 60
    },
    {
      label: "订单ID",
      prop: "orderId",
      align: "center"
    },
    {
      label: "零件ID",
      prop: "partId",
      align: "center"
    },
    {
      label: "班组ID",
      prop: "groupId",
      align: "center"
    },
    {
      label: "铺叠人数",
      prop: "workerNum",
      align: "center"
    },
    {
      label: "建议人员",
      prop: "suggestWorker",
      align: "center"
    },
    {
      label: "开始时间",
      prop: "startTime",
      align: "center"
    },
    {
      label: "结束时间",
      prop: "endTime",
      align: "center"
    }
  ];
  return { resultData, resultColumns };
}
