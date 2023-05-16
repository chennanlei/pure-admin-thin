import { message } from "@/utils/message";
import { taskData, recordData } from "./data";
import { clone, delay } from "@pureadmin/utils";
import { onMounted, reactive, ref, watchEffect } from "vue";
import type { PaginationProps, LoadingConfig, Align } from "@pureadmin/table";
// 如果您不习惯tsx写法，可以传slot，然后在template里写
// 需是hooks写法（函数中有return），避免失去响应性
export function useColumns() {
  const columns: TableColumnList = [
    {
      type: "expand",
      slot: "expand"
    },
    {
      label: "任务编号",
      prop: "taskNumber"
    },
    {
      label: "任务交期",
      prop: "dueDate"
    },
    {
      label: "所属周次",
      prop: "weekNumber"
    },
    {
      label: "零件编号",
      prop: "partNumber"
    },
    {
      label: "零件类型",
      prop: "type"
    },
    {
      label: "所属机型",
      prop: "flight"
    }
  ];
  const childColumns: TableColumnList = [
    {
      label: "流程序号",
      prop: "processNumber"
    },
    {
      label: "工序名称",
      prop: "name"
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
            获取历史数据
          </el-button>
        </>
      )
    }
  ];
  const recordColumns: TableColumnList = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "序号",
      prop: "index",
      width: 100
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
      label: "操作",
      cellRenderer: ({ index, row }) => (
        <>
          <el-button
            size="small"
            type="primary"
            onClick={() => handleEdit(index + 1, row)}
          >
            编辑数据
          </el-button>
          <el-button
            size="small"
            type="danger"
            onClick={() => handleEdit(index + 1, row)}
          >
            删除数据
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
  const paginationAlign = ref("right");
  const tableSize = ref("default");
  const loading = ref(true);
  const dataList = ref([]);
  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 5,
    currentPage: 1,
    pageSizes: [5, 10, 15],
    total: 0,
    align: "right",
    background: true,
    small: false
  });
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

  function onSizeChange(val) {
    console.log("onSizeChange", val);
  }

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(600).then(() => {
      loading.value = false;
    });
  }

  watchEffect(() => {
    pagination.align = paginationAlign.value as Align;
  });
  onMounted(() => {
    delay(600).then(() => {
      const newList = [];
      Array.from({ length: 6 }).forEach(() => {
        newList.push(clone(recordData, true));
      });
      dataList.value = newList.flat(Infinity);
      pagination.total = dataList.value.length;
      loading.value = false;
    });
  });
  return {
    taskData,
    recordData,
    dataList,
    loading,
    tableSize,
    loadingConfig,
    onCurrentChange,
    onSizeChange,
    columns,
    childColumns,
    recordColumns,
    pagination
  };
}
