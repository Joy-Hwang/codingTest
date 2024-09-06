// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
let my_string = "aAb1B2cC34oOp";
let array = my_string.split("");
let answer = 0;

for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    answer += Number(array[i]);
  }
}

console.log(answer);
