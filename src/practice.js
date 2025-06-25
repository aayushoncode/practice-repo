// // you have an array of students marks

// let marks = [25, 30, 35, 40, 55]

// // 1. to give each students 5 as a bonus mark

// const addFive = marks
//   .map((mark) => mark + 5)
//   .filter((mark) => mark >= 40)
//   .reduce((acc, mark) => {
//     return acc + mark
//   }, 0)
// console.log(addFive)

const data = [
  {
    name: 'raj',
    score: 80,
  },
  {
    name: 'simran',
    score: 80,
  },
  {
    name: 'ram',
    score: 80,
  },
  {
    name: 'neha',
    score: 80,
  },
]

const Data = data.map((item)=>({...item ,name : item.name = "neha"}) )
console.log(Data);


