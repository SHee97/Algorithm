function solution(arr) {
  const answer = arr.slice();

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i; j++) {
      if (answer[j + 1] < answer[j]) {
        [answer[j + 1], answer[j]] = [answer[j], answer[j + 1]];
      }
    }
  }

  console.log(answer);
  return answer;
}

solution([1, 2, 3, 10, 100, 89, 11, 8]);
