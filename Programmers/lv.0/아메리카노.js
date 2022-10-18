function solution(money) {
  const n = Math.floor(money / 5500);
  const m = money % 5500;

  return [n, m];
}
