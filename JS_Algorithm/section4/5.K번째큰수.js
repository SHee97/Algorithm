const solution = (N, K, nums) => {
  const results = [];

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (results.includes(sum)) continue;

        results.push(sum);
      }
    }
  }

  results.sort((a, b) => b - a);

  return results[K - 1];
};
