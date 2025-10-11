function solution(n) {
    const sqrt = Math.sqrt(n);

    if (Number.isInteger(sqrt)) {
        return 1; // 제곱수일 경우
    } else {
        return 2; // 제곱수가 아닐 경우
    }
}
