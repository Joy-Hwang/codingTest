// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

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
  console.log(i); //0 2 4 6 (내부 반복문을 타면서 i가 1씩 증감. 2번 순회하고 끝)
  const sliceArr = [];
  for (let j = 0; j < n; j++) {
    console.log(j);
    sliceArr.push(num_list[i]);
    i++;
  }
  result.push(sliceArr);
}
console.log(result);
