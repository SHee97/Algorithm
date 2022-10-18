function solution(array, n) {
  const answer = array.reduce((acc, el) => {
    if (el === n) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return answer;
}
