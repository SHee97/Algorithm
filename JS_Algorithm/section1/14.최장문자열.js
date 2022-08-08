const long = (n, input) => {
  let answer = input[0];
  for (let i = 1; i < n; i++) {
    if (answer.length < input[i].length) {
      answer = input[i];
    }
  }

  return answer;
};
