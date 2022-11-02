function solution(arr) {
  const meetings = arr.slice().sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let answer = 0;
  let end = 0;

  for (let m of meetings) {
    if (m[0] >= end) {
      answer++;
      end = m[1];
    }
  }

  console.log(meetings);
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
