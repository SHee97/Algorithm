const bigger = (n, input) => {
  const answer = [input[0]];

  for (let i = 1; i < n; i++) {
    if (input[i] > input[i - 1]) {
      answer.push(input[i]);
    }
  }

  return answer;
};
