function solution(N, stages) {
    let answer = [];
    let total = stages.length; 
    
    for (let i = 1; i <= N; i++) {
        let count = stages.filter(s => s === i).length;
        
        let rate = 0;
        if (total > 0) {
            rate = count / total;  
        }
        
        answer.push({ stage: i, rate: rate });
        
        total -= count;
    }
    
    answer.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage; 
        }
        return b.rate - a.rate;       
    });
    
    return answer.map(x => x.stage);
}
