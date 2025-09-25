function solution(s){
    // 모두 소문자로 변환하기
    s = s.toLowerCase();
    
    let pCount = 0;
    let yCount = 0;
    
    for (let char of s) {
        if (char === 'p') pCount++;
        if (char === 'y') yCount++;
    }
    
    // 개수 비교
    return pCount === yCount;
}
