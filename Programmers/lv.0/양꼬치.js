function solution(n, k) {
  const service = Math.floor(n / 10);
  const answer = 12000 * n + 2000 * (k - service);

  return answer;
}
