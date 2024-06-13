//조합 문제에는 팩토리얼 사용
// 4! = 4*3*2*1 = 24
// n! = n * (n-1) * (n-2) ... * 1
// nCr = n! / ((n-r)! * r!)

function solution(balls, share) {
  var answer = 0;

  const n = balls;
  const r = share;

  let one = 1;
  for (let i = n; i >= n - r + 1; i--) {
    one *= i;
  }
  let three = 1;
  for (let i = r; i >= 1; i--) {
    three *= i;
  }
  answer = Math.floor(one / three);
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120840#
