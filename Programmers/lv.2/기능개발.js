function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    let deploy = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      deploy++;
      progresses.shift();
      speeds.shift();
    }

    if (deploy > 0) answer.push(deploy);
  }

  return answer;
}
