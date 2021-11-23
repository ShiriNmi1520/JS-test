// 4. Count total hours worked in 1 day ? // => 39
const employeeType = [
  {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
  {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
  {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
  {id: 1, name: "Alice", type: 2},
  {id: 2, name: "Bob", type: 3},
  {id: 3, name: "John", type: 2},
  {id: 4, name: "Karen", type: 1},
  {id: 5, name: "Miles", type: 3},
  {id: 6, name: "Henry", type: 1}
];
function countWorksHour(employeeType) {
  const timeStamp = [];
  employeeType.forEach((content) => {
    let workBegin = new Date('01/01/2007' + ' ' + content['work_begin']).getHours();
    let workEnd = new Date('01/01/2007' + ' ' + content['work_end']).getHours();
    if (workEnd === 0) workEnd = 24; // for calculating work hours.
    timeStamp.push(workBegin);
    timeStamp.push(workEnd);
  })
  let timeStampCopy = timeStamp.sort((i, j) => {
    return i - j;
  });
  let workHour = timeStampCopy[timeStampCopy.length - 1] - timeStampCopy[0];
  console.log('work hours in day:' + ' ' + workHour);
}

countWorksHour(employeeType);