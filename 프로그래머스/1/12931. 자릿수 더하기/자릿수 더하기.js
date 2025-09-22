function solution(n) {
    // n을 문자열로 바꾸고 한 글자씩 배열로 분리
    let digits = String(n).split("");
    
    // 각 자릿수를 숫자로 변환 후 합계 구하기
    let answer = digits.reduce((sum, digit) => sum + Number(digit), 0);
    
    return answer;
}
