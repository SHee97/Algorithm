const center = (str) => {
  let answer;

  const leng = str.length;
  if (leng % 2) {
    answer = str[Math.floor(leng / 2)];
  } else {
    const index = Math.floor(leng / 2);
    answer = str[index - 1] + str[index];
  }

  return answer;
};
