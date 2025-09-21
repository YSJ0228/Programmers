function solution(price) {
    let answer = price; // 기본값은 원래 가격
    
    if (price >= 500000) {
        answer = price * 0.8; // 20% 할인
    } else if (price >= 300000) {
        answer = price * 0.9; // 10% 할인
    } else if (price >= 100000) {
        answer = price * 0.95; // 5% 할인
    }
    
    return Math.floor(answer); // 정수만 반환 (소수점 버림)
}
