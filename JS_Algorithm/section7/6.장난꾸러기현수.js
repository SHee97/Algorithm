function solution(arr) {
  const origin = arr.slice();
  const sorted = arr.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < origin.length; i++) {
    if (origin[i] !== sorted[i]) answer.push(i + 1);
  }

  return answer.join(" ");
}
