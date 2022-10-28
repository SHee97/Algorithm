const solution = (N, K) => {
  let arr = Array.from({ length: N }, (_, idx) => idx + 1);

  while (arr.length > 1) {
    for (let i = 1; i < K; i++) {
      arr.push(arr.shift());
    }

    arr.shift();
  }

  return arr;
};

console.log(solution(8, 3));
