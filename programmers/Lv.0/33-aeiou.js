// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string) {
//   let answer = "";
//   return answer;
// }

let answer = "";
let my_string = "bus";
let vowel = ["a", "e", "i", "o", "u"];
for (i = 0; i < my_string.length; i++) {
  if (!vowel.includes(my_string[i])) answer += my_string[i];
}
console.log(answer);
