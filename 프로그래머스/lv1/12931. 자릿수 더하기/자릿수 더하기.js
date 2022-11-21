function solution(n) {
    return n.toString().split('').reduce((acc, e) => acc + +e, 0);
}