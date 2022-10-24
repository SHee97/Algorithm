const solution = (N, M, nums) => {
  let answer = 0;

  let index1 = 0;
  let index2 = 0;
  let sum = 0;

  while (index2 < nums.length) {
    if (sum < M) {
      sum += index1;
      index1++;
    } else if (M <= sum) {
      if (sum === M) answer++;

      sum = 0;
      index1 = ++index2;
    }
  }

  return answer;
};
