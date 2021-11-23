//1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]

const factories = [
  {name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"]},
  {name: "BR2", employees: ["Jessie", "Karen", "John"]},
  {name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"]},
  {name: "BR4", employees: []}
];


function returnEmployeesNumber(factory) {
  const resultArray = [];
  factory.forEach((content) => {
    const data = {};
    data['name'] = content['name'];
    data['count'] = content['employees'].length;
    resultArray.push(data);
  })
  console.log(resultArray);
}

returnEmployeesNumber(factories);