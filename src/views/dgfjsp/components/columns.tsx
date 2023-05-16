import { orderData, machineData } from "./data";
import { message } from "@/utils/message";

export function useColumns() {
  const orderColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "任务编号",
      prop: "taskNumber",
      width: 100
    },
    {
      label: "交货时间",
      prop: "dueDate",
      width: 100
    },
    {
      label: "零件编号",
      prop: "partNumber",
      width: 80
    },
    {
      label: "零件类型",
      prop: "type",
      width: 80
    },
    {
      label: "任务权重",
      prop: "weight",
      width: 80
    },
    {
      label: "操作",
      cellRenderer: ({ index, row }) => (
        <>
          <el-button
            size="small"
            type="success"
            onClick={() => handleEdit(index + 1, row)}
          >
            详情
          </el-button>
          <el-button
            size="small"
            type="primary"
            onClick={() => handleEdit(index + 1, row)}
          >
            详情
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
  const machineColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "设备编号",
      prop: "machineNumber"
    },
    {
      label: "类别",
      prop: "type"
    },
    {
      label: "位置",
      prop: "location"
    },
    {
      label: "设备状态",
      prop: "status"
    }
  ];
  const handleEdit = (index: number, row) => {
    message(`您编辑了第 ${index} 行，数据为：${JSON.stringify(row)}`, {
      type: "success"
    });
  };
  return {
    orderData,
    machineData,
    machineColumns,
    orderColumns
  };
}
