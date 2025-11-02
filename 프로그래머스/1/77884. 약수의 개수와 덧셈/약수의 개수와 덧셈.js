function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        // i가 제곱수인지 확인
        if (Number.isInteger(Math.sqrt(i))) {
            // 제곱수면 약수의 개수가 홀수 → 빼기
            answer -= i;
        } else {
            // 제곱수가 아니면 약수의 개수가 짝수 → 더하기
            answer += i;
        }
    }

    return answer;
}
