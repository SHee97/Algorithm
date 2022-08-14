const extract = (str) => {
  let answer = [];

  for (let i of str) {
    if (!isNaN(i)) {
      answer.push(i);
    }
  }

  return Number(answer.join(""));
};

console.log(extract("g0en2T0s8eSoft"));
