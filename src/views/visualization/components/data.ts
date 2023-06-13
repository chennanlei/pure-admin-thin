export const tasks = [
  {
    id: 1,
    text: "XA一组",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 17:00",
    duration: 17,
    progress: 1,
    description: "XA一组",
    color: "#f17781"
  },
  {
    id: 2,
    text: "CB一组",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 17:30",
    duration: 17.5,
    progress: 1,
    description: "CB一组",
    color: "#f17781"
  },
  {
    id: 11,
    parent: 1,
    text: "员工#01123",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 14:30",
    render: "split",
    duration: 2.5,
    progress: 1,
    description: "任务#001,任务#004"
  },
  {
    id: 111,
    parent: 11,
    text: "员工#01123",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 02:30",
    duration: 2.5,
    progress: 1,
    description: "任务#001"
  },
  {
    id: 112,
    parent: 11,
    text: "员工#01123",
    start_date: "2016-09-04 10:30",
    end_date: "2016-09-04 14:30",
    duration: 4,
    progress: 1,
    description: "任务#004"
  },
  {
    id: 12,
    parent: 1,
    text: "员工#01567",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 02:30",
    duration: 2.5,
    progress: 1,
    description: "任务#001"
  },
  {
    id: 13,
    parent: 1,
    text: "员工#01876",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 17:00",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#002,任务#005"
  },
  {
    id: 131,
    parent: 13,
    text: "员工#01876",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 07:30",
    duration: 4.5,
    progress: 1,
    description: "任务#002"
  },
  {
    id: 132,
    parent: 13,
    text: "员工#01876",
    start_date: "2016-09-04 13:30",
    end_date: "2016-09-04 17:00",
    duration: 3.5,
    progress: 1,
    description: "任务#005"
  },
  {
    id: 14,
    parent: 1,
    text: "员工#01210",
    start_date: "2016-09-04 05:30",
    end_date: "2016-09-04 12:00",
    duration: 6.5,
    progress: 1,
    description: "任务#003"
  },
  {
    id: 15,
    parent: 1,
    text: "员工#01765",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 17:00",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#002, 任务#005"
  },
  {
    id: 151,
    parent: 15,
    text: "员工#01765",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 07:30",
    duration: 4.5,
    progress: 1,
    description: "任务#002"
  },
  {
    id: 152,
    parent: 15,
    text: "员工#01765",
    start_date: "2016-09-04 13:30",
    end_date: "2016-09-04 17:00",
    duration: 4,
    progress: 1,
    description: "任务#005"
  },
  {
    id: 16,
    parent: 1,
    text: "员工#01234",
    start_date: "2016-09-04 05:30",
    end_date: "2016-09-04 12:00",
    duration: 6.5,
    progress: 1,
    description: "任务#003"
  },
  {
    id: 17,
    parent: 1,
    text: "员工#01432",
    start_date: "2016-09-04 10:30",
    end_date: "2016-09-04 14:30",
    duration: 4,
    progress: 1,
    description: "任务#004"
  },
  {
    id: 18,
    parent: 1,
    text: "员工#01198",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 17:00",
    render: "split",
    duration: 2.5,
    progress: 1,
    description: "任务#001,任务#005"
  },
  {
    id: 181,
    parent: 18,
    text: "员工#01198",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 02:30",
    duration: 2.5,
    progress: 1,
    description: "任务#001"
  },
  {
    id: 182,
    parent: 18,
    text: "员工#01198",
    start_date: "2016-09-04 13:30",
    end_date: "2016-09-04 17:00",
    duration: 4,
    progress: 1,
    description: "任务#005"
  },
  {
    id: 19,
    parent: 1,
    text: "员工#01654",
    start_date: "2016-09-04 05:30",
    end_date: "2016-09-04 17:00",
    render: "split",
    duration: 6.5,
    progress: 1,
    description: "任务#003,任务#005"
  },
  {
    id: 191,
    parent: 19,
    text: "员工#01654",
    start_date: "2016-09-04 05:30",
    end_date: "2016-09-04 12:00",
    duration: 6.5,
    progress: 1,
    description: "任务#003"
  },
  {
    id: 192,
    parent: 19,
    text: "员工#01654",
    start_date: "2016-09-04 13:30",
    end_date: "2016-09-04 17:00",
    duration: 4,
    progress: 1,
    description: "任务#005"
  },
  {
    id: 20,
    parent: 1,
    text: "员工#01321",
    start_date: "2016-09-04 10:30",
    end_date: "2016-09-04 14:30",
    duration: 4,
    progress: 1,
    description: "任务#004"
  },
  {
    id: 21,
    parent: 2,
    text: "员工#02876",
    start_date: "2016-09-04 07:30",
    end_date: "2016-09-04 11:00",
    duration: 3.5,
    progress: 1,
    description: "任务#008"
  },
  {
    id: 22,
    parent: 2,
    text: "员工#02789",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 14:00",
    render: "split",
    duration: 4,
    progress: 1,
    description: "任务#007,任务#009"
  },
  {
    id: 221,
    parent: 22,
    text: "员工#02789",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 07:00",
    duration: 4,
    progress: 1,
    description: "任务#007"
  },
  {
    id: 222,
    parent: 22,
    text: "员工#02789",
    start_date: "2016-09-04 10:00",
    end_date: "2016-09-04 14:00",
    duration: 4,
    progress: 1,
    description: "任务#009"
  },
  {
    id: 23,
    parent: 2,
    text: "员工#02456",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 11:00",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#006"
  },
  {
    id: 231,
    parent: 23,
    text: "员工#02456",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 04:30",
    duration: 4.5,
    progress: 1,
    description: "任务#006"
  },
  {
    id: 232,
    parent: 23,
    text: "员工#02456",
    start_date: "2016-09-04 07:30",
    end_date: "2016-09-04 11:00",
    duration: 3.5,
    progress: 1,
    description: "任务#008"
  },
  {
    id: 24,
    parent: 2,
    text: "员工#02234",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 17:30",
    render: "split",
    duration: 4,
    progress: 1,
    description: "任务#007,任务#010"
  },
  {
    id: 241,
    parent: 24,
    text: "员工#02234",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 07:00",
    duration: 4,
    progress: 1,
    description: "任务#007"
  },
  {
    id: 242,
    parent: 24,
    text: "员工#02234",
    start_date: "2016-09-04 12:00",
    end_date: "2016-09-04 17:30",
    duration: 5.5,
    progress: 1,
    description: "任务#010"
  },
  {
    id: 25,
    parent: 2,
    text: "员工#02543",
    start_date: "2016-09-04 07:30",
    end_date: "2016-09-04 11:00",
    duration: 3.5,
    progress: 1,
    description: "任务#008"
  },
  {
    id: 26,
    parent: 2,
    text: "员工#02321",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 17:30",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#006,任务#010"
  },
  {
    id: 261,
    parent: 26,
    text: "员工#02321",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 04:30",
    duration: 4.5,
    progress: 1,
    description: "任务#006"
  },
  {
    id: 262,
    parent: 26,
    text: "员工#02321",
    start_date: "2016-09-04 12:00",
    end_date: "2016-09-04 17:30",
    duration: 5.5,
    progress: 1,
    description: "任务#010"
  },
  {
    id: 27,
    parent: 2,
    text: "员工#02198",
    start_date: "2016-09-04 07:30",
    end_date: "2016-09-04 11:00",
    duration: 4.5,
    progress: 1,
    description: "任务#008"
  },
  {
    id: 28,
    parent: 2,
    text: "员工#02654",
    start_date: "2016-09-04 10:00",
    end_date: "2016-09-04 14:00",
    duration: 4,
    progress: 1,
    description: "任务#009"
  },
  {
    id: 29,
    parent: 2,
    text: "员工#02210",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 14:00",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#006,任务#009"
  },
  {
    id: 291,
    parent: 29,
    text: "员工#02210",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 04:30",
    duration: 4.5,
    progress: 1,
    description: "任务#006"
  },
  {
    id: 292,
    parent: 29,
    text: "员工#02210",
    start_date: "2016-09-04 10:00",
    end_date: "2016-09-04 14:00",
    duration: 4,
    progress: 1,
    description: "任务#009"
  },
  {
    id: 30,
    parent: 2,
    text: "员工#02765",
    start_date: "2016-09-04 03:00",
    end_date: "2016-09-04 07:00",
    duration: 4,
    progress: 1,
    description: "任务#007"
  },
  {
    id: 31,
    parent: 2,
    text: "员工#02567",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 14:00",
    render: "split",
    duration: 4.5,
    progress: 1,
    description: "任务#006,任务#009"
  },
  {
    id: 311,
    parent: 31,
    text: "员工#02567",
    start_date: "2016-09-04 00:00",
    end_date: "2016-09-04 04:30",
    duration: 4.5,
    progress: 1,
    description: "任务#006"
  },
  {
    id: 312,
    parent: 31,
    text: "员工#02567",
    start_date: "2016-09-04 10:00",
    end_date: "2016-09-04 14:00",
    duration: 4,
    progress: 1,
    description: "任务#009"
  },
  {
    id: 32,
    parent: 2,
    text: "员工#02123",
    start_date: "2016-09-04 07:30",
    end_date: "2016-09-04 11:00",
    duration: 3.5,
    progress: 1,
    description: "任务#008"
  }
];

export const columns = [
  { align: "left", name: "text", label: "班组名称", tree: true },
  { align: "left", name: "start_date", label: "开始时间" },
  { align: "left", name: "duration", label: "持续时间" }
];
