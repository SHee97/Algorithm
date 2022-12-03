function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    let idx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        idx = j;
      }
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr;
}
