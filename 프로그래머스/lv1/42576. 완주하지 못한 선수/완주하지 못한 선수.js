function solution(participant, completion) {
    let answer;
    const mapP = new Map();
    const mapC = new Map();
    
    participant.reduce((map, name) => {
        if (map.has(name)) {
            map.set(name, map.get(name) + 1);
            return map;
        }
        
        map.set(name, 1);
        return map;
    }, mapP);
    
    completion.reduce((map, name) => {
        if (map.has(name)) {
            map.set(name, map.get(name) + 1);
            return map;
        }
        
        map.set(name, 1);
        return map;
    }, mapC);
    
    for (let name of participant) {
        if (mapP.get(name) !== mapC.get(name)) answer = name;    
    }
    
    return answer;
}