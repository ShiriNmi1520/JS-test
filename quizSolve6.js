// 6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
const external = require('./quizSolve4');

const tasks = [
  {id: 1, title: "task01", duration: 60},
  {id: 2, title: "task02", duration: 120},
  {id: 3, title: "task03", duration: 180},
  {id: 4, title: "task04", duration: 360},
  {id: 5, title: "task05", duration: 30},
  {id: 6, title: "task06", duration: 220},
  {id: 7, title: "task07", duration: 640},
  {id: 8, title: "task08", duration: 250},
  {id: 9, title: "task09", duration: 119},
  {id: 10, title: "task10", duration: 560},
  {id: 11, title: "task11", duration: 340},
  {id: 12, title: "task12", duration: 45},
  {id: 13, title: "task13", duration: 86},
  {id: 14, title: "task14", duration: 480},
  {id: 15, title: "task15", duration: 900}
];

const employeeType = [
  {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
  {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
  {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

function calculateWorkingDaysNeeded() {
  //convert tasks minutes to hours
  let workHoursNeed = 0;
  let workDaysNeed;
  tasks.forEach((content) => {
    content['duration'] = content['duration'] % 60 === 0 ? content['duration'] / 60 : Math.ceil(content['duration'] / 60);
    workHoursNeed += content['duration'];
  })
  workDaysNeed = Math.ceil(workHoursNeed / external.countWorksHour(employeeType));
  console.log("It takes %d days to complete all tasks.", workDaysNeed);
}

calculateWorkingDaysNeeded();
