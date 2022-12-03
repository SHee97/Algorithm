function solution(array) {
  const result = [];
  const heap = array.reduce(
    (acc, e) => {
      acc.push(e);

      let currentNode = acc.length - 1;
      let parent = Math.floor(currentNode / 2);

      while (parent > 0 && e < acc[parent]) {
        acc[currentNode] = acc[parent];
        acc[parent] = e;

        currentNode = parent;
        parent = Math.floor(currentNode / 2);
      }

      return acc;
    },
    [null]
  );

  while (result.length < array.length) {
    result.push(heap[1]);
    heap[1] = heap.pop();

    let currentNode = 1;
    let child = currentNode * 2;

    while (child < heap.length) {
      if (heap[child] > heap[child + 1]) child++;
      if (heap[currentNode] < heap[child]) break;

      [heap[currentNode], heap[child]] = [heap[child], heap[currentNode]];
      currentNode = child;
      child = currentNode * 2;
    }
  }

  return result;
}
