function solution(cipher, code) {
    return cipher.split('').reduce((acc, e, i) => {
        if ((i + 1) % code === 0) {
            acc += e;
        }
        
        return acc;
    }, '');
}