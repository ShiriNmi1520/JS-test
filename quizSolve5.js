// 5. Make a function that take as parameters dayTim and return number of employee working // howManyEmployeeByTime(time) => int

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
function checkWorkersCount(time) {
  //prototype {"name": works name, "workBegin": work begins hour, "workEnd": work ends hour}
  let workerCount = 0;
  let hourString = '2007-01-01T' + time + ":00" + ":00";
  let desiredHour = new Date(hourString).getHours();
  employees.forEach((content, index) => {
    employees[index]['workBegin'] = employeeType[content['type'] - 1]['work_begin'];
    employees[index]['workEnd'] = employeeType[content['type'] - 1]['work_end'];
    delete employees[index]['id'];
    delete employees[index]['type'];
  })
  employees.forEach((content) => {
    let beginHour = content['workBegin'].split(':')[0];
    let endHour = content['workEnd'].split(':')[0] === '00' ? '24' : content['workEnd'].split(':')[0];
    if (beginHour <= desiredHour && desiredHour <= endHour) workerCount += 1;
  })

  return workerCount;
}

console.log(checkWorkersCount(12));