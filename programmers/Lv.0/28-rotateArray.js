// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

//방법 1
// function solution(numbers, direction) {
//   let answer = [];
//   if (direction === "right") {
//     answer.push(numbers[numbers.length - 1]); //마지막 원소를 맨 앞 인덱스에 넣기
//     for (let i = 0; i < numbers.length - 1; i++) {
//       //그 뒤로 차례대로 원소 넣기
//       answer.push(numbers[i]);
//     }
//   } else {
//     for (let i = 1; i < numbers.length; i++) {
//       answer.push(numbers[i]); //1번째 인덱스부터 차례대로 원소 넣기
//     }
//     answer.push(numbers[0]); //0번째 원소를 마지막 인덱스에 넣기
//   }
//   return answer;
// }

//방법 2 (배열메서드 이용)
function solution(numbers, direction) {
  if (direction === "right") {
    const n = numbers.pop(); //배열 마지막 원소
    numbers.unshift(n); //배열 맨 앞에 추가
  } else {
    const n = numbers.shift(); //배열 맨 앞 요소
    numbers.push(n); //배열 맨 끝에 추가
  }
  return numbers;
}
console.log(solution([1, 2, 3], "right"));
