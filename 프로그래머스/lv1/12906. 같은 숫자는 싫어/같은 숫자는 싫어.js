function solution(arr)
{
    const answer = arr.filter((el, idx) => {
        if (idx === 0) return true;
       
        return el !== arr[idx - 1];
    });
    
    return answer;
}