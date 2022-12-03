function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    const val = arr[idx];

    while (idx > 0 && val < arr[idx - 1]) {
      arr[idx] = arr[idx - 1];
      idx--;
    }

    arr[idx] = val;
  }

  return arr;
}
