function solution(n) {
    // 최대공약수(GCD) 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 최소공배수(LCM) = (a * b) / gcd(a, b)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    return lcm(n, 6) / 6;
}
