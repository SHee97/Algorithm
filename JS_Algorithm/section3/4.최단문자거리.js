const distance = (str, t) => {
  const answer = [];

  let dist = Infinity;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      dist = 0;
    } else {
      dist++;
    }
    answer.push(dist);
  }

  dist = Infinity;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === t) {
      dist = 0;
    } else {
      dist++;
    }
    answer[j] = Math.min(answer[j], dist);
  }

  return answer.join(" ");
};

console.log(distance("teachermode", "e"));
