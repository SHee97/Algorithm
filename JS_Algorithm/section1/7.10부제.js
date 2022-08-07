const noDriving = (n, input) => {
  const numbers = input.map((e) => e % 10);
  let answer = 0;

  for (let m of numbers) {
    if (n === m) answer++;
  }

  return answer;
};
