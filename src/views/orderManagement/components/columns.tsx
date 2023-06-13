import { orderData } from "./data";
import { message } from "@/utils/message";

export function useColumns() {
  const orderColumns = [
    {
      type: "selection",
      align: "center"
    },
    {
      label: "序号",
      type: "index",
      align: "center",
      width: 60
    },
    {
      label: "型号",
      prop: "model",
      align: "center"
    },
    {
      label: "批次",
      prop: "batchNum",
      align: "center"
    },
    {
      label: "架次",
      prop: "sortieNum",
      align: "center"
    },
    {
      label: "零件ID",
      prop: "partId",
      align: "center"
    },
    {
      label: "质量编号",
      prop: "qualityId",
      align: "center"
    },
    {
      label: "零件类型",
      prop: "partType",
      align: "center"
    },
    {
      label: "订单所属年",
      prop: "year",
      align: "center"
    },
    {
      label: "订单所属月",
      prop: "month",
      align: "center"
    },
    {
      label: "操作",
      align: "center",
      cellRenderer: ({ index, row }) => (
        <>
          <el-button
            size="small"
            type="primary"
            onClick={() => handleEdit(index + 1, row)}
          >
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            onClick={() => handleEdit(index + 1, row)}
          >
            删除
          </el-button>
        </>
      )
    }
  ];
  const handleEdit = (index: number, row) => {
    message(`您编辑了第 ${index} 行，数据为：${JSON.stringify(row)}`, {
      type: "success"
    });
  };
  return { orderData, orderColumns };
}
