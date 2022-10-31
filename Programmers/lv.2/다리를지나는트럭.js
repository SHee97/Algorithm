function solution(bridge_length, weight, truck_weights) {
  const waiting = truck_weights.slice().reverse();
  const timeQ = [];
  const bridgeQ = [];
  let currentWeight = 0;
  let answer = 1;

  do {
    checkTruckEntry();
    increaseTime();
  } while (waiting.length || bridgeQ.length);

  function checkTruckEntry() {
    const nextTruck = waiting[waiting.length - 1];
    const weightCondition = currentWeight + nextTruck <= weight;
    const lengthCondition = bridgeQ.length < bridge_length;

    if (weightCondition && lengthCondition) {
      waiting.pop();
      bridgeQ.push(nextTruck);
      timeQ.push(0);
      currentWeight += nextTruck;
    }
  }

  function increaseTime() {
    for (let i = 0; i < timeQ.length; i++) {
      timeQ[i]++;
    }

    if (timeQ[0] >= bridge_length) {
      currentWeight -= bridgeQ[0];
      bridgeQ.shift();
      timeQ.shift();
    }

    answer++;
  }

  return answer;
}
