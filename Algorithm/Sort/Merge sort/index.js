function merge(arr, left, mid, right) {
  const sorted = [];
  let leftIdx = left;
  let rightIdx = mid + 1;

  while (leftIdx <= mid && rightIdx <= right) {
    if (arr[leftIdx] <= arr[rightIdx]) {
      sorted.push(arr[leftIdx++]);
    } else {
      sorted.push(arr[rightIdx++]);
    }
  }

  sorted.push(
    ...(leftIdx > mid
      ? arr.slice(rightIdx, right + 1)
      : arr.slice(leftIdx, mid + 1))
  );

  for (let i = left; i <= right; i++) {
    arr[i] = sorted[i - left];
  }
}

function mergeSort(arr, left, right) {
  const mid = Math.floor((left + right) / 2);

  if (left === right) return;

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

mergeSort(array, 0, array.length - 1);
