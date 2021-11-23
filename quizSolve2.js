// 2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]

const factories = [
  {name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"]},
  {name: "BR2", employees: ["Jessie", "Karen", "John"]},
  {name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"]},
  {name: "BR4", employees: []}
];

function returnFactoriesNumber(factories) {
  const nameArray = [];
  const resultArray = [];
  const nameObject = {};
  factories.forEach((content) => {
    content['employees'].forEach((nestedContent, nestedIndex) => {
      nameArray.push(nestedContent);
    })
  })
  nameArray.forEach((content) => {
    nameObject[content] = (nameObject[content] || 0) + 1;
  })
  Object.entries(nameObject).forEach((index) => {
    let data = {};
    data['employee'] = index[0];
    data['count'] = index[1];
    resultArray.push(data);
  })
  return resultArray;
}

console.log(returnFactoriesNumber(factories));