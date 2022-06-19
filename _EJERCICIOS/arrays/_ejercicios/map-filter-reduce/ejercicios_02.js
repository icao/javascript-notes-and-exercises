const results = [
  { _id: "F1", group: "Frutas", name: "Banana" },
  { _id: "V1", group: "Verduras", name: "Brocoli" },
  { _id: "G1", group: "Garnachas", name: "Quesadillas" },
  { _id: "F2", group: "Frutas", name: "Uva" },
  { _id: "F3", group: "Frutas", name: "Sandia" },
  { _id: "V2", group: "Verduras", name: "Papa" },
  { _id: "V3", group: "Verduras", name: "Tomate" },
  { _id: "G1", group: "Garnachas", name: "Tacos" },
];

function transformData(data) {
  let groups = [];
  for (const item of data) {
    let isExist = groups.includes(item.group);
    if (!isExist) {
      groups.push(item.group);
    }
  }
  console.log(groups);

  return groups.map((group) => {
    return {
      group: group,
      items: data
        .filter((item) => item.group === group)
        .map((item) => ({
          _id: item._id,
          name: item.name,
        })),
    };
  });
}

console.log(transformData(results));

// const resultados = [
//   {
//     group: "Frutas",
//     items: [
//       { _id: "F1", name: "Banana" },
//       { _id: "F2", name: "Uva" },
//       { _id: "F3", name: "Sandia" },
//     ],
//   },
//   {
//     group: "Verduras",
//     items: [
//       { _id: "V1", name: "Brocoli" },
//       { _id: "V2", name: "Papa" },
//       { _id: "V3", name: "Tomate" },
//     ],
//   },
// ];

// const ResultadoFinal = [
//   {
//     group: "Frutas",
//     items: [
//       { _id: "F1", name: "Banana" },
//       { _id: "F2", name: "Uva" },
//       { _id: "F3", name: "Sandia" },
//     ],
//   },
//   {
//     group: "Verduras",
//     items: [
//       { _id: "V1", name: "Brocoli" },
//       { _id: "V2", name: "Papa" },
//       { _id: "V3", name: "Tomate" },
//     ],
//   },
//   {
//     group: "Garnachas",
//     items: [
//       { _id: "G1", name: "Quesadillas" },
//       { _id: "G1", name: "Tacos" },
//     ],
//   },
// ];
