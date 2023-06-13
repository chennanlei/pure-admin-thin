const partData = [
  {
    partID: "001",
    length: 10,
    width: 5,
    height: 0.01,
    minWorkerNum: 8,
    maxWorkerNum: 8,
    processingTime: 80,
    suggestedTeamID: [5, 6],
    suggestedWorkerID: null
  },
  {
    partID: "002",
    length: 9,
    width: 4,
    height: 0.01,
    minWorkerNum: 8,
    maxWorkerNum: 8,
    processingTime: 100,
    suggestedTeamID: [5, 8, 9],
    suggestedWorkerID: null
  },
  {
    partID: "003",
    length: 9,
    width: 2,
    height: 0.015,
    minWorkerNum: 7,
    maxWorkerNum: 7,
    processingTime: 60,
    suggestedTeamID: [1],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    partID: "004",
    length: 8,
    width: 4,
    height: 0.01,
    minWorkerNum: 7,
    maxWorkerNum: 7,
    processingTime: 90,
    suggestedTeamID: [4],
    suggestedWorkerID: [1, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    partID: "005",
    length: 8,
    width: 5,
    height: 0.015,
    minWorkerNum: 7,
    maxWorkerNum: 7,
    processingTime: 70,
    suggestedTeamID: [5, 6],
    suggestedWorkerID: null
  },
  {
    partID: "006",
    length: 7,
    width: 1,
    height: 0.01,
    minWorkerNum: 5,
    maxWorkerNum: 8,
    processingTime: 120,
    suggestedTeamID: [1],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    partID: "007",
    length: 2,
    width: 1,
    height: 0.01,
    minWorkerNum: 5,
    maxWorkerNum: 8,
    processingTime: 40,
    suggestedTeamID: [2],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    partID: "008",
    length: 4,
    width: 3,
    height: 0.01,
    minWorkerNum: 5,
    maxWorkerNum: 8,
    processingTime: 50,
    suggestedTeamID: [3],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    partID: "009",
    length: 3,
    width: 2,
    height: 0.015,
    minWorkerNum: 4,
    maxWorkerNum: 6,
    processingTime: 70,
    suggestedTeamID: [4],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    partID: "010",
    length: 9,
    width: 1,
    height: 0.01,
    minWorkerNum: 4,
    maxWorkerNum: 6,
    processingTime: 90,
    suggestedTeamID: [3],
    suggestedWorkerID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

const groupData = [
  {
    groupID: "S1",
    groupName: "XA一组",
    groupNum: 10,
    groupStatus: 1,
    groupType: "XA"
  },
  {
    groupID: "S2",
    groupName: "XA二组",
    groupNum: 13,
    groupStatus: 1,
    groupType: "XA"
  },
  {
    groupID: "S3",
    groupName: "XA三组",
    groupNum: 13,
    groupStatus: 1,
    groupType: "XA"
  },
  {
    groupID: "S4",
    groupName: "CB一组",
    groupNum: 12,
    groupStatus: 0,
    groupType: "CB"
  },
  {
    groupID: "S5",
    groupName: "CB五组",
    groupNum: 14,
    groupStatus: 1,
    groupType: "CB"
  },
  {
    groupID: "S6",
    groupName: "CB六组",
    groupNum: 13,
    groupStatus: 1,
    groupType: "CB"
  },
  {
    groupID: "S7",
    groupName: "CB二组",
    groupNum: 15,
    groupStatus: 1,
    groupType: "CB"
  },
  {
    groupID: "S8",
    groupName: "BZ一组",
    groupNum: 13,
    groupStatus: 1,
    groupType: "BZ"
  },
  {
    groupID: "S9",
    groupName: "CA三组",
    groupNum: 10,
    groupStatus: 1,
    groupType: "CA"
  },
  {
    groupID: "S10",
    groupName: "CA四组",
    groupNum: 14,
    groupStatus: 1,
    groupType: "CA"
  }
];

const timeData = [
  {
    groupID: "1",
    classType: 1,
    classNum: 4,
    startTime: "8:00",
    endTime: "16:00",
    notes: "两班制"
  },
  {
    groupID: "1",
    classType: 2,
    classNum: 5,
    startTime: "16:00",
    endTime: "0:00",
    notes: "两班制"
  },
  {
    groupID: "1",
    classType: 3,
    classNum: 3,
    startTime: "0:00",
    endTime: "8:00",
    notes: "三班制"
  },
  {
    groupID: "2",
    classType: 1,
    classNum: 6,
    startTime: "8:00",
    endTime: "16:00",
    notes: "两班制"
  },
  {
    groupID: "2",
    classType: 2,
    classNum: 5,
    startTime: "16:00",
    endTime: "0:00",
    notes: "两班制"
  },
  {
    groupID: "2",
    classType: 3,
    classNum: 5,
    startTime: "0:00",
    endTime: "8:00",
    notes: "两班制"
  },
  {
    groupID: "3",
    classType: 1,
    classNum: 5,
    startTime: "8:00",
    endTime: "16:00",
    notes: "两班制"
  },
  {
    groupID: "3",
    classType: 2,
    classNum: 5,
    startTime: "16:00",
    endTime: "0:00",
    notes: "三班制"
  },
  {
    groupID: "3",
    classType: 3,
    classNum: 5,
    startTime: "0:00",
    endTime: "8:00",
    notes: "两班制"
  },
  {
    groupID: "4",
    classType: 1,
    classNum: 7,
    startTime: "8:00",
    endTime: "16:00",
    notes: "两班制"
  }
];

const shutdownData = [
  {
    groupID: "1",
    startTime: "2016/10/1  0:00:00",
    endTime: "2016/10/2 8:00:00",
    notes: 1
  },
  {
    groupID: "4",
    startTime: "2016/10/15 0:00:00",
    endTime: "2016/10/17 8:00:00 ",
    notes: 2
  },
  {
    groupID: "1",
    startTime: "2016/11/1 0:00:00",
    endTime: "2016/11/2 8:00:00 ",
    notes: 1
  },
  {
    groupID: "5",
    startTime: "2016/11/16 0:00:00",
    endTime: "2016/11/17 8:00:00",
    notes: 3
  },
  {
    groupID: "1",
    startTime: "2016/12/1 0:00:00",
    endTime: "2016/12/2 0:00:00",
    notes: 2
  },
  {
    groupID: "1",
    startTime: "2016/12/16 0:00:00",
    endTime: "2016/12/17 8:00:00",
    notes: 3
  },
  {
    groupID: "2",
    startTime: "2016/10/2 0:00:00",
    endTime: "2016/10/3 8:00:00",
    notes: 1
  },
  {
    groupID: "2",
    startTime: "2016/10/16 0:00:00",
    endTime: "2016/10/18 8:00:00",
    notes: 1
  },
  {
    groupID: "6",
    startTime: "2016/11/2 0:00:00",
    endTime: "2016/11/3 8:00:00",
    notes: 1
  },
  {
    groupID: "2",
    startTime: "2016/11/17 0:00:00",
    endTime: "2016/11/18 18:00:00",
    notes: 2
  }
];
export { partData, groupData, timeData, shutdownData };
