function solution(n) {
    // 숫자를 문자열로 변환 -> 글자 배열로 분리 -> 뒤집기 -> 숫자로 변환
    return String(n).split("").reverse().map(Number);
}
