import { partData, groupData, timeData, shutdownData } from "./data";
import { delay } from "@pureadmin/utils";
import { ref, reactive } from "vue";
import type { LoadingConfig } from "@pureadmin/table";

export function useColumns() {
  const partColumns = [
    {
      label: "序号",
      type: "index",
      align: "left"
    },
    {
      label: "零件ID",
      prop: "partID",
      width: 70
    },
    {
      label: "长",
      prop: "length",
      width: 60
    },
    {
      label: "宽",
      prop: "width",
      width: 60
    },
    {
      label: "高",
      prop: "height",
      width: 60
    },
    {
      label: "最小铺叠人数",
      prop: "minWorkerNum",
      width: 60
    },
    {
      label: "最大铺叠人数",
      prop: "maxWorkerNum",
      width: 60
    },
    {
      label: "加工人时",
      prop: "processingTime",
      width: 60
    },
    {
      label: "建议班组ID集合",
      prop: "suggestedTeamID"
    },
    {
      label: "建议人员ID集合",
      prop: "suggestedWorkerID"
    }
  ];
  const groupColumns = [
    {
      label: "ID",
      type: "index",
      align: "left"
    },
    {
      label: "班组编号",
      prop: "groupID",
      align: "center"
    },
    {
      label: "班组名称",
      prop: "groupName"
    },
    {
      label: "班组人数",
      prop: "groupNum",
      align: "center"
    },
    {
      label: "工作状态",
      prop: "groupStatus",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>
                  {{
                    default: () =>
                      row.groupStatus === 1
                        ? "工作状态：正常"
                        : "工作状态：停工"
                  }}
                </div>
              </>
            ),
            reference: () => (
              <el-tag type={row.groupStatus === 1 ? "success" : "danger"}>
                {{ default: () => (row.groupStatus === 1 ? "正常" : "停工") }}
              </el-tag>
            )
          }}
        </el-popover>
      )
    },
    {
      label: "所属类别",
      prop: "groupType"
    }
  ];
  const timeColumns = [
    {
      label: "ID",
      type: "index",
      align: "left"
    },
    {
      label: "班组ID",
      prop: "groupID",
      align: "center"
    },
    {
      label: "班次类别",
      prop: "classType",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>
                  {{
                    default: () =>
                      row.groupStatus === 1
                        ? "工作状态：正常"
                        : "工作状态：停工"
                  }}
                </div>
              </>
            ),
            reference: () => (
              <el-tag type={getRowType(row.classType)}>
                {{
                  default: () => {
                    switch (row.classType) {
                      case 1:
                        return "早班";
                      case 2:
                        return "中班";
                      case 3:
                        return "晚班";
                      default:
                        return "";
                    }
                  }
                }}
              </el-tag>
            )
          }}
        </el-popover>
      )
    },
    {
      label: "班次人数",
      prop: "classNum",
      align: "center"
    },
    {
      label: "开始时间",
      prop: "startTime"
    },
    {
      label: "结束时间",
      prop: "endTime"
    },
    {
      label: "备注",
      prop: "notes",
      align: "center"
    }
  ];
  const shutdownColumns = [
    {
      label: "ID",
      type: "index",
      align: "left"
    },
    {
      label: "班组ID",
      prop: "groupID",
      align: "center"
    },
    {
      label: "停工开始时间",
      prop: "startTime"
    },
    {
      label: "停工结束时间",
      prop: "endTime"
    },
    {
      label: "备注",
      prop: "notes",
      align: "center",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>
                  {{
                    default: () =>
                      row.groupStatus === 1
                        ? "工作状态：正常"
                        : "工作状态：停工"
                  }}
                </div>
              </>
            ),
            reference: () => (
              <el-tag type={getRowType(row.notes)}>
                {{
                  default: () => {
                    switch (row.notes) {
                      case 1:
                        return "休假";
                      case 2:
                        return "培训";
                      case 3:
                        return "其他";
                      default:
                        return "";
                    }
                  }
                }}
              </el-tag>
            )
          }}
        </el-popover>
      )
    }
  ];

  const getRowType = (rowType: number): string => {
    switch (rowType) {
      case 1:
        return "default";
      case 2:
        return "success";
      case 3:
        return "info";
      default:
        return "warning";
    }
  };

  const loading = ref(true);
  /** 加载动画配置 */
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第一页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    // svg: "",
    // background: rgba()
  });

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(600).then(() => {
      loading.value = false;
    });
  }
  return {
    partData,
    groupData,
    timeData,
    shutdownData,
    partColumns,
    groupColumns,
    timeColumns,
    shutdownColumns,
    loading,
    loadingConfig,
    onCurrentChange
  };
}
