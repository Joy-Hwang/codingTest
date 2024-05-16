// function solution(num_list, n) {
//   const result = [];

//   for (let i = 0; i < num_list.length; ) {
//     console.log(i);
//     const sliceArr = [];
//     for (let j = 0; j < n; j++) {
//       sliceArr.push(num_list[i]);
//       i++;
//       // console.log(sliceArr);
//     }
//     result.push(sliceArr);
//   }
//   return result;
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;
const result = [];

for (let i = 0; i < num_list.length; ) {
  console.log(i); //0 2 4 6
  const sliceArr = [];
  for (let j = 0; j < n; j++) {
    sliceArr.push(num_list[i]);
    i++;
  }
  result.push(sliceArr);
}
console.log(result);
