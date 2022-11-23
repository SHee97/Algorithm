process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const [a, b] = n.map(Number);
    let answer = '';
    
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            answer += '*';
        }
        
        answer += '\n';
    }
    
    console.log(answer);
});