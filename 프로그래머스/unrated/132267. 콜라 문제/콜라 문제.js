function solution(a, b, n) {
    let empty = n;
    let count = 0;
    
    while (empty >= a) {
        const get = Math.floor(empty / a) * b; 
        count += get;
        empty = (empty % a) + get;
    }
    
    return count;
}