import { machineData, carData, orderData } from "./data";
import { message } from "@/utils/message";

export function useColumns() {
  const machineColumns = [
    {
      label: "资源编号",
      prop: "machineNumber"
    },
    {
      label: "资源类型",
      prop: "type"
    },
    {
      label: "可用容量上限",
      prop: "capacity"
    },
    {
      label: "设备地理位置",
      prop: "location"
    },
    {
      label: "资源状态",
      prop: "status",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>资源状态: {row.status}</div>
              </>
            ),
            reference: () => <el-tag type="success">{row.status}</el-tag>
          }}
        </el-popover>
      )
    }
  ];
  const carColumns = [
    {
      label: "资源编号",
      prop: "carNumber"
    },
    {
      label: "资源类型",
      prop: "type"
    },
    {
      label: "可用容量上限",
      prop: "capacity"
    },
    {
      label: "资源状态",
      prop: "status",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>资源状态: {row.status}</div>
              </>
            ),
            reference: () => <el-tag type="success">{row.status}</el-tag>
          }}
        </el-popover>
      )
    }
  ];
  const orderColumns = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "任务编号",
      prop: "orderNumber"
    },
    {
      label: "任务名称",
      prop: "name"
    },
    {
      label: "加工时间",
      prop: "processingTime"
    },
    {
      label: "容量",
      prop: "capacity"
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
  const handleEdit = (index: number, row) => {
    message(`您编辑了第 ${index} 行，数据为：${JSON.stringify(row)}`, {
      type: "success"
    });
  };
  return {
    machineData,
    machineColumns,
    carData,
    carColumns,
    orderData,
    orderColumns
  };
}
