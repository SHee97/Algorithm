function solution(N, arr) {
  const sorted = arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = sorted.length - 1;

  while (lt <= rt) {
    const center = Math.floor((lt + rt) / 2);

    if (sorted[center] === N) {
      return center + 1;
    } else if (sorted[center] < N) {
      lt = center - 1;
    } else {
      rt = center + 1;
    }
  }
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
