function solution(coords) {
  const answer = coords.slice();

  answer.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  return answer;
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
