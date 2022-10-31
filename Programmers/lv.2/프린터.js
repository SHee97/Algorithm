function solution(priorities, location) {
  let idx = location;
  let order = 1;

  while (true) {
    const j = priorities[0];

    if (isMostTopPirority(j)) {
      if (idx === 0) return order;

      priorities.shift();
      order++;
      idx--;
    } else {
      priorities.shift();
      priorities.push(j);

      idx = idx > 0 ? idx - 1 : priorities.length - 1;
    }
  }

  function isMostTopPirority(currentTask) {
    for (let i = 1; i < priorities.length; i++) {
      if (currentTask < priorities[i]) return false;
    }

    return true;
  }
}
