function solution(numbers) {
    const sorted = numbers.sort((a, b) => b - a);
    const pos = sorted[0] * sorted[1];
    const nag = sorted[sorted.length - 1] * sorted[sorted.length - 2];
    
    return Math.max(pos, nag);
}