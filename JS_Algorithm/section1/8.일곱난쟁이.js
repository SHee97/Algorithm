const snowWhite = (input) => {
  const answer = input.slice();
  const sum = answer.reduce((acc, e) => acc + e, 0);

  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1);
        return answer;
      }
    }
  }
};
