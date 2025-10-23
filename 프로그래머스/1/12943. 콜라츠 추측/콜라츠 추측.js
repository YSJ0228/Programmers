function solution(num) {
    let count = 0;

    // num이 1인 경우
    if (num === 1) return 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        count++;

        if (count === 500) return -1;
    }

    return count;
}
