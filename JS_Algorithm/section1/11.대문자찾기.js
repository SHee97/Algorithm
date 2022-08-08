const capital = (str) => {
  let answer = 0;

  for (let i of str) {
    const lower = i.toLowerCase();

    if (i !== lower) answer++;
  }

  return answer;
};
