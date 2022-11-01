function solution(arr) {
  const answer = arr.slice();

  for (let i = 0; i < answer.length - 1; i++) {
    let idx = i;
    let min = Infinity;

    for (let j = i; j < answer.length; j++) {
      if (answer[j] < min) {
        idx = j;
        min = answer[j];
      }
    }

    [answer[i], answer[idx]] = [answer[idx], answer[i]];
  }

  return answer;
}
