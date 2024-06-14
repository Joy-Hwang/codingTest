//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
//예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
const getFactorial = (i) => {
  let result = 1;
  for (let j = 1; j <= i; j++) {
    //1부터 정수 i까지 커지면서 모두 곱하기
    result *= j;
  }
  return result;
};

const n = 7;
let answer = "";
for (let i = 1; ; i++) {
  const result = getFactorial(i);
  if (n < result) {
    answer = i - 1;
  }
}
console.log(answer);

// function solution(n) {
//   for (let i = 1; ; i++) {
//     const result = getFactorial(i);
//     if (n < result) {
//       return i - 1;
//     }
//   }
// }
