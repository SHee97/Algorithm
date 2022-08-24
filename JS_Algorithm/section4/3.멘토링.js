const mentoring = (n, m, test) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const mentor = i;
    const mentee = Array.from(Array(n), (e, index) => index + 1);
    for (let j = 0; j < m; j++) {
      const result = test[j];
      for (let k = 0; k < n; k++) {
        const index = mentee.findIndex((e) => e === result[k]);
        if (index >= 0) {
          mentee.splice(index, 1);
        }

        if (result[k] === mentor) break;
      }
    }

    answer += mentee.length;
  }

  return answer;
};

console.log(
  mentoring(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
