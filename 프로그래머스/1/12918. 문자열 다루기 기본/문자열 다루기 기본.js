function solution(s) {
    // 길이가 4 또는 6이 아닌 경우 바로 false
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 숫자로만 이루어져 있는지 정규식으로 확인
    return /^\d+$/.test(s);
}
