const removeDuplicate = (str) => {
  let answer = "";

  for (let i of str) {
    if (!answer.includes(i)) {
      answer += i;
    }
  }

  return answer;
};
