function solution(before, after) {
    const mapB = new Map();
    
    for (let char of before) {
        if (mapB.has(char)) {
            mapB.set(char, mapB.get(char) + 1);
            continue;
        }
        
        mapB.set(char, 1);
    }
    
    const mapA = new Map();
    
    for (let char of after) {
        if (mapA.has(char)) {
            mapA.set(char, mapA.get(char) + 1);
            continue;
        }
        
        mapA.set(char, 1);
    }
    
    for (let [key, val] of mapA) {
        if (mapB.get(key) !== val) return 0;
    }
    
    return 1;
}