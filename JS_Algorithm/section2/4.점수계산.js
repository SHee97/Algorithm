const score = (n, input) => {
  let answer = 0;
  let acc = 0;

  for (let i of input) {
    if (i) {
      acc++;
      answer += acc;
    } else {
      acc = 0;
    }
  }

  return answer;
};

console.log(score(10, [1, 0, 1, 1, 1, 0, 0, 1, 0, 1]));
