const solution = (N, M, nums) => {
  let answer = 0;

  let p = 0;
  let q = 0;
  let sum = 0;

  while (p < nums.length) {
    sum += nums[q];

    if (sum > M) {
      reset();
    } else if (sum <= M) {
      answer++;
      if (nums.length <= ++q) reset();
    }
  }

  function reset() {
    sum = 0;
    q = ++p;
  }

  return answer;
};

console.log(solution(5, 5, [1, 3, 1, 2, 3]));
