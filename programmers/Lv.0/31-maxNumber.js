// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

//방법 1 (모든 수 서로 곱해서 최대값 구하기)
const numbers = [0, 31, 24, 10, 1, 9];
let answer = [];
for (let i = 0; i < numbers.length - 1; i++) {
  console.log("i는 " + i);
  for (let j = i + 1; j < numbers.length; j++) {
    console.log("j는 " + j);
    answer.push(numbers[i] * numbers[j]);
    console.log(numbers[i] + "*" + numbers[j]);
  }
  console.log(answer);
  console.log(Math.max(...answer));
}
console.log(Math.max(...answer));

//방법 2 (내림차순으로 정렬하여 앞 두 수를 곱하기)
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(sortedNumbers[0] * sortedNumbers[1]);
