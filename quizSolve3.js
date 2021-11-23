// 3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }

const factories = [
  {name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"]},
  {name: "BR2", employees: ["Jessie", "Karen", "John"]},
  {name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"]},
  {name: "BR4", employees: []}
];

function orderEmployeesList(factories) {
  let factoriesCopy = factories;
  factoriesCopy.forEach((content) => {
    content['employees'] = content['employees'].sort();
  })
  console.log(factoriesCopy);
}

orderEmployeesList(factories);