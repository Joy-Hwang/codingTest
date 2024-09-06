// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
let my_string = "hi12392";
let array = my_string.split("");
let answer = [];

for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    answer.push(Number(array[i]));
  }
}
answer.sort((a, b) => a - b);
console.log(answer);
