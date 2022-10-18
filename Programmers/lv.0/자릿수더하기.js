function solution(n) {
  const str = [...String(n)];
  const answer = str.reduce((acc, el) => acc + Number(el), 0);

  return answer;
}
