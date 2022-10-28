const solution = (input) => {
  const stack = [];
  let opened = false;
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (current === "(") {
      stack.push(current);
      opened = true;
    } else if (current === ")" && opened) {
      stack.pop();
      opened = false;
      answer += stack.length;
    } else {
      stack.pop();
      answer++;
    }
  }

  return answer;
};

console.log(solution("(((()(()()))(())()))(()())"));
