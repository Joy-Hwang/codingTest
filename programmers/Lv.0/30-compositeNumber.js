// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    //i가 합성수인지 비교해야하는 숫자.
    let isCount = false;
    for (let num = 2; num < i - 1; num++) {
      if (i % num === 0) {
        //합성수
        isCount - true;
        //isCount ==> 합성수 여부 확인
      }
    }
    if (isCount) {
      answer += 1;
    }
  }

  return answer;
}
