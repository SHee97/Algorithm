const solution = (N, K, sales) => {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < N - 2; i++) {
    if (i < K) {
      sum += sales[i];
      answer = sum;
      continue;
    }

    sum = sum - sales[i - K] + sales[i];

    answer = Math.max(sum, answer);
  }

  return answer;
};
