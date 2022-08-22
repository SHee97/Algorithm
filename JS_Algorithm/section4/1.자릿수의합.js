const sum = (arr) => {
  let answer = -Infinity;
  let number = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let result = 0;
    const num = arr[i].toString();

    for (let j of num) {
      result += +j;
    }

    if (result >= number) {
      number = result;
      answer = Math.max(answer, arr[i]);
    }
  }

  return answer;
};

console.log(sum([128, 460, 603, 40, 227, 137, 123]));
