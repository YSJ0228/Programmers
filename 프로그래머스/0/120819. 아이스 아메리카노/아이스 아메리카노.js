function solution(money) {
    const price = 5500; // 아이스 아메리카노 가격
    const cups = Math.floor(money / price); // 살 수 있는 잔 수
    const change = money % price; // 남는 돈
    return [cups, change];
}
