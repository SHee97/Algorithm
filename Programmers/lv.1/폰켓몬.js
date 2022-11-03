function solution(nums) {
  const set = new Set();
  const max = nums.length / 2;

  for (let n of nums) {
    set.add(n);
  }

  const sp = set.size;

  return Math.min(sp, max);
}
