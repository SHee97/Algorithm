function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n].charCodeAt() === b[n].charCodeAt()) {
            const shuffle = [a, b].slice().sort();
            
            return shuffle[0] === a ? -1 : 1;
        }
        
        return a[n].charCodeAt() - b[n].charCodeAt();
    });
    
    return strings;
}