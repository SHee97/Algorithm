function solution(arr) {
  const answer = arr.slice();

  for (let i = 1; i < answer.length; i++) {
    const currentElement = answer[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentElement < answer[j]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }

  return answer;
}
