const input = Number(require('fs').readFileSync('/dev/stdin').toString());

console.log(fibonacci(input));

function fibonacci (num) {
    let term;
    
    if (num < 2) {
        return num;
    }
    
    term = fibonacci(num - 1) + fibonacci(num - 2);
    
    return term;
}