let employees = [
  {
    name: 'Mayuri',
    age: 26,
    sal: 100,
  },
  {
    name: 'Adhij',
    age: 28,
    sal: 200,
  },
  {
    name: 'Nitish',
    age: 28,
    sal: 300,
  },
  {
    name: 'Nisha',
    age: 28,
    sal: 100,
  },
  {
    name: 'Shruti',
    age: 28,
    sal: 200,
  },
];

let salGrouped = {};

employees.map((item, index) => {
  if (Object.keys(salGrouped).indexOf(item.sal.toString()) !== -1) {
    salGrouped[item.sal].push({ ...item });
  } else {
    salGrouped[item.sal] = [{ ...item }];
  }
});
console.log(salGrouped);
