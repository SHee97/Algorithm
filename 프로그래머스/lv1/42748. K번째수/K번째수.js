function solution(array, commands) {
    const result = [];
    for (let i = 0; i < commands.length; i++) {
        const arr = array.slice(commands[i][0] - 1, commands[i][1]);
        const num = arr.sort((a, b) => {return a - b})[commands[i][2] - 1];
        result.push(num);
        
    }
    
    return result;
}