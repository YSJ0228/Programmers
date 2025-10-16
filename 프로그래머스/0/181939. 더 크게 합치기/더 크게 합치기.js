function solution(a, b) {
    // a와 b를 문자열로 결합한 뒤 숫자로 변환
    const ab = Number(String(a) + String(b));
    const ba = Number(String(b) + String(a));
    
    return ab >= ba ? ab : ba;
}
