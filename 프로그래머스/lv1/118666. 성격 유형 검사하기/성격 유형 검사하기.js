function solution(survey, choices) {
    const answer = [];
    const score = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
            score[survey[i][0]] += 4 - choices[i];
        } else if (choices[i] > 4) {
            score[survey[i][1]] += choices[i] - 4;
        }
    }
    
    answer.push(score['R'] >= score['T'] ? 'R' : 'T');
    answer.push(score['C'] >= score['F'] ? 'C' : 'F');
    answer.push(score['J'] >= score['M'] ? 'J' : 'M');
    answer.push(score['A'] >= score['N'] ? 'A' : 'N');
    
    return answer.join('');
}