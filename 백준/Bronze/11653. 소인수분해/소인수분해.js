const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
const answer = [];
let n = N;
if (N > 1) {
    for (let i = 2; i <= N / 2; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
                answer.push(i);
            }
        }
    }
    
    if (n === N) answer.push(N);
    
    console.log(answer.join('\n'));
}
