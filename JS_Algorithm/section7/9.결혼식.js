function solution(time) {
  const timeLine = [];
  let answer = 0;
  let count = 0;

  for (let t of time) {
    timeLine.push([t[0], 1]);
    timeLine.push([t[1], 0]);
  }

  timeLine.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  console.log(timeLine);

  for (let t of timeLine) {
    t[1] > 0 ? count++ : count--;

    answer = Math.max(count, answer);
  }

  return answer;
}
