const solution = (N, M) => {
  const n = N.split("");
  const m = M.split("").reverse();

  let ref = n.pop();

  for (let i of m) {
    if (ref === i) {
      ref = n.pop();
    }
  }

  return ref ? "NO" : "YES";
};

console.log(solution("CBA", "CDABGE"));
