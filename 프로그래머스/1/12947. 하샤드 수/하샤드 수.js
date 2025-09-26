function solution(x) {
    const sum = String(x).split('').reduce((acc, d) => acc + Number(d), 0);
    return x % sum === 0;
}
