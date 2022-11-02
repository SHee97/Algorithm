function solution(S, tasks) {
  const answer = [];

  tasks.forEach((t) => {
    const idx = answer.findIndex((e) => e === t);

    if (idx >= 0) {
      answer.splice(idx, 1);
    } else if (answer.length === S) {
      answer.shift();
    }

    answer.push(t);
  });

  return answer.reverse();
}
