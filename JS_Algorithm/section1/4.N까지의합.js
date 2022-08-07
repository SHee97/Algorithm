const sum = (n) => {
  const half = Math.floor(n / 2);

  if (n % 2) {
    return (n + 1) * half + (n + 1) / 2;
  }
  return (n + 1) * half;
};
