function solution(hp) {
    // 장군개미(5)
    const general = Math.floor(hp/5);
    hp%=5; // 남은 체력
    
    // 병정개미(3)
    const soldier = Math.floor(hp/3);
    hp%=3;
    
    // 일개미(1)
    const worker = hp;
    
    return general + soldier + worker;
}