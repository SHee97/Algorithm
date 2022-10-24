const solution = (N, arr1, M, arr2) => {
  const answer = [...arr1, ...arr2];

  answer.sort((a, b) => a - b);

  return answer;
};

solution(2, [1, 3], 4, [2, 4, 1, 1]);
