const solution = (input) => {
  const nums = [];
  let answer;

  for (let i of input) {
    if (isNaN(i)) {
      answer = calculate(i);
    } else {
      nums.push(+i);
    }
  }

  return answer;

  function calculate(operator) {
    const prevValue = answer ?? nums.pop();
    const operand = nums.pop();
    let result;

    switch (operator) {
      case "+":
        result = prevValue + operand;
        break;
      case "-":
        result = prevValue - operand;
        break;
      case "*":
        result = prevValue * operand;
        break;
      case "/":
        result = prevValue / operand;
        break;
    }

    return result;
  }
};
