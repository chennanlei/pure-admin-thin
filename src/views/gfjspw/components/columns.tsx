import { orderData, machineData, workerData } from "./data";
import { message } from "@/utils/message";

export function useColumns() {
  const orderColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "任务编号",
      prop: "taskNumber"
    },
    {
      label: "零件编号",
      prop: "partNumber"
    },
    {
      label: "零件类型",
      prop: "type",
      width: 100
    },
    {
      label: "所属机型",
      prop: "flight"
    },
    {
      label: "操作",
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
  const machineColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "设备组编号",
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
      label: "设备组状态",
      prop: "status"
    }
  ];
  const workerColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "工作组编号",
      prop: "workerNumber"
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
      label: "人数",
      prop: "number"
    },
    {
      label: "工作组状态",
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
    workerData,
    machineColumns,
    workerColumns,
    orderColumns
  };
}
