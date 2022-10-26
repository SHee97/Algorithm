const solution = (str) => {
  let answer = "";
  const stack = [];

  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else if (s === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) answer += s;
    }
  }

  return answer;
};
