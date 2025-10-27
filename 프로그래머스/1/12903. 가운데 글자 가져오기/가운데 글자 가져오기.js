function solution(s) {
    const len = s.length;
    const mid = Math.floor(len / 2);
    
    if (len % 2 === 0) {
        // 짝수일 때 → 가운데 두 글자
        return s[mid - 1] + s[mid];
    } else {
        // 홀수일 때 → 가운데 한 글자
        return s[mid];
    }
}
