const maxSum = (board) => {
  let rowSum = 0;
  let colSum = 0;
  let diSum1 = 0;
  let diSum2 = 0;

  for (let i = 0; i < 5; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < 5; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];

      if (i === j) {
        diSum1 += board[i][j];
      }

      if (i + j === 4) {
        diSum2 += board[i][j];
      }
    }

    if (sum1 > rowSum) rowSum = sum1;
    if (sum2 > colSum) colSum = sum2;
  }

  return Math.max(rowSum, colSum, diSum1, diSum2);
};

console.log(
  maxSum([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 33, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
