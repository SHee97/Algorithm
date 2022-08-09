const student = (n, input) => {
  let max = 0;
  let answer = 0;

  for (let h of input) {
    if (h > max) {
      max = h;
      answer++;
    }
  }

  return answer;
};

console.log(student(8, [130, 135, 148, 140, 145, 150, 150, 153]));
