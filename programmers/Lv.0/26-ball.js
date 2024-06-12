function solution(numbers, k) {
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    console.log(i);
    i %= numbers.length;
    const item = numbers[i];
    if (cnt === k) {
      return item;
    }
    cnt += 1;
  }
}
console.log(solution([1, 2, 3, 4, 5, 6], 5));
