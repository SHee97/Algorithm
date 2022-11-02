function solution(arr) {
  const answer = arr.slice();

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i; j++) {
      if (answer[j] > answer[j + 1]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }

  return answer;
}
