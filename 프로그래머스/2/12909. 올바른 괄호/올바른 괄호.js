function solution(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else {
            count--;
        }

        // 닫는 괄호가 먼저 나온 경우
        if (count < 0) {
            return false;
        }
    }

    // 모두 짝지어졌는지 확인
    return count === 0;
}
