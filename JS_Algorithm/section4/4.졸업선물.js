const garduationGift = (n, m, price) => {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let money = m;
    const saled = Array.from(Array(n), (e, i) => price[i].slice());
    saled[i][0] /= 2;
    saled.sort((a, b) => a[0] + a[1] - b[0] - b[1]);

    for (let j = 0; j < n; j++) {
      money -= saled[j][0] + saled[j][1];

      if (money < 0) break;

      count++;
    }

    answer = Math.max(answer, count);
  }

  return answer;
};

console.log(
  garduationGift(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
