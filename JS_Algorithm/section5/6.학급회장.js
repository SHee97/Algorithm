const solution = (N, V) => {
  let answer = "A";
  const vote = V.split("");
  const result = new Map();

  vote.forEach((e) => {
    if (result.has(e)) result.set(e, result.get(e) + 1);
    else result.set(e, 1);
  });

  console.log(result);

  for (let [key, value] of result) {
    if (result.get(answer) < value) {
      answer = key;
    }
  }

  return answer;
};
