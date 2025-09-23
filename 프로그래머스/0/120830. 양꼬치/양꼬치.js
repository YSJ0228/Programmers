function solution(n, k) {
    const lamb = n * 12000;  
    const drink = k * 2000;  
    const service = Math.floor(n / 10) * 2000; 
    return lamb + drink - service;
}
