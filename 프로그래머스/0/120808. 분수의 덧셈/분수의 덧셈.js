function solution(numer1, denom1, numer2, denom2) {
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    const gcd = (a, b) => b ? gcd(b, a % b) : a; // 재귀로 최대공약수 구하기
    
    let g = gcd(numerator, denominator);
    return [numerator / g, denominator / g];
}