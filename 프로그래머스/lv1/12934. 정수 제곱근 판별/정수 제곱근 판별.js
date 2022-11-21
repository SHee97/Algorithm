function solution(n) {
    const root = Math.sqrt(n);
    
    return Math.floor(root) === root ? Math.pow(root + 1, 2) : -1;
}