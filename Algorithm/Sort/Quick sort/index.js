function solution(arr) {
  quick(arr, 0, arr.length - 1);

  return arr;

  function devide(arr, left, right) {
    const pivot = arr[left];
    let low = left;
    let high = right + 1;

    do {
      do {
        low++;
      } while (low < right && arr[low] < pivot);

      do {
        high--;
      } while (high > left && arr[high] > pivot);

      if (low < high) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
      }
    } while (low < high);

    [arr[left], arr[high]] = [arr[high], arr[left]];

    return high;
  }

  function quick(arr, left, right) {
    if (left >= right) return;

    const sorted = devide(arr, left, right);

    quick(arr, left, sorted - 1);
    quick(arr, sorted + 1, right);
  }
}
