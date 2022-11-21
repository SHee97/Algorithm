function solution(x) {
    const sum = x.toString().split('').reduce((acc, e) => acc + +e, 0);
    
    return !(x % sum);
}