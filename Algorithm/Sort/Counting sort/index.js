function solution(arr) {
  const max = arr.reduce((acc, e) => Math.max(acc, e), -Infinity);
  let counts = new Array(max + 1).fill(0);
  const answer = new Array(max).fill(null);

  arr.forEach((e) => counts[e]++);

  for (let i = 1; i <= max; i++) {
    counts[i] += counts[i - 1];
  }

  arr.forEach((e) => {
    const idx = --counts[e];
    answer[idx] = e;
  });

  return answer;
}
