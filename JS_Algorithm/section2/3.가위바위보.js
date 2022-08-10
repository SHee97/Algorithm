const rsp = (n, A, B) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const [a, b] = [A[i], B[i]];

    if (a === b) {
      answer.push("D");
    } else if (a > b) {
      if (b === 1 && a === 3) {
        answer.push("B");
      } else {
        answer.push("A");
      }
    } else {
      if (a === 1 && b === 3) {
        answer.push("A");
      } else {
        answer.push("B");
      }
    }
  }

  return answer;
};
