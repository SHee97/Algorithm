const peak = (n, input) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let isPeak = true;
      for (let k = 0; k < 4; k++) {
        const x = i - dx[k];
        const y = j - dy[k];

        if (x >= 0 && x < n && y >= 0 && y < n && input[x][y] >= input[i][j]) {
          isPeak = false;
          break;
        }
      }

      if (isPeak) answer++;
    }
  }

  return answer;
};
