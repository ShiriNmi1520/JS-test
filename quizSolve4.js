// 4. Count total hours worked in 1 day ? // => 39

exports.countWorksHour = ((employeeType) => {
  const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
  ];
  let totalHour = 0;
  employees.forEach((content) => {
    let workBegin = new Date('01/01/2007' + ' ' + employeeType[content['type'] - 1]['work_begin']).getHours();
    let workEnd = new Date('01/01/2007' + ' ' + employeeType[content['type'] - 1]['work_end']).getHours();
    if (workEnd === 0) workEnd = 24; //for calculating purpose
    totalHour += workEnd - workBegin;
  })
  return totalHour;
})
