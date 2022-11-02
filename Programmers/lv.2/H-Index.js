function solution(citations) {
  let answer = 0;
  const sorted = citations.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const h = Math.min(sorted[i], sorted.length - i);
    answer = Math.max(answer, h);
  }

  return answer;
}
