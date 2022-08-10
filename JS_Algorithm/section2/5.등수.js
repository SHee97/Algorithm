const rank = (n, input) => {
  const answer = [];

  for (let i of input) {
    let ranking = 1;
    for (let j of input) {
      if (j > i) {
        ranking++;
      }
    }

    answer.push(ranking);
  }

  return answer;
};
