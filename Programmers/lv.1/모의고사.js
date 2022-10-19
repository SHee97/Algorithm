function solution(answers) {
  const scores = [0, 0, 0];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((answer, answerIdx) => {
    patterns.forEach((pattern, patternIdx) => {
      let idx = answerIdx % pattern.length;

      if (answer === pattern[idx]) {
        scores[patternIdx]++;
      }
    });
  });

  const maxScore = Math.max(...scores);
  const result = scores.reduce((acc, score, idx) => {
    if (score === maxScore) {
      acc.push(idx + 1);
    }

    return acc;
  }, []);

  return result;
}
