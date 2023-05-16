import TypeIt from "@/components/ReTypeit";
import OfficeBuilding from "@iconify-icons/ep/office-building";
import Tickets from "@iconify-icons/ep/tickets";
import Location from "@iconify-icons/ep/location";
import Iphone from "@iconify-icons/ep/iphone";
import Notebook from "@iconify-icons/ep/notebook";
import User from "@iconify-icons/ri/user-3-fill";

export function useColumns() {
  const lists = [
    { type: "", label: "1. 周计划分析" },
    { type: "success", label: "2. 车间完成情况分析" },
    { type: "danger", label: "3. 车间问题分析" },
    { type: "warning", label: "4. 计划追踪" }
  ];

  const columnsA = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={User} />
          </el-icon>
          用户名
        </div>
      ),
      value: "管理员 Admin"
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Iphone} />
          </el-icon>
          联系方式
        </div>
      ),
      value: "12345678910"
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Location} />
          </el-icon>
          所属部门
        </div>
      ),
      value: "铺叠车间管理部"
    }
  ];

  const columnsB = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Tickets} />
          </el-icon>
          每周任务
        </div>
      ),
      cellRenderer: () => {
        return lists.map(v => {
          return (
            <el-tag class="mr-[10px]" type={v.type} size="small" effect="dark">
              {v.label}
            </el-tag>
          );
        });
      }
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={OfficeBuilding} />
          </el-icon>
          办公室地址
        </div>
      ),
      value: "铺叠车间办公室310"
    }
  ];

  const columnsC = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Notebook} />
          </el-icon>
          个人消息
        </div>
      ),
      cellRenderer: () => (
        <TypeIt
          className={"github"}
          values={["请尽快完成周计划分析工作"]}
          cursor={false}
          speed={100}
        />
      )
    }
  ];

  return {
    columnsA,
    columnsB,
    columnsC
  };
}
