function solution(price, money, count) {
    // 총 이용 요금 계산
    const totalCost = price * (count * (count + 1)) / 2;
    
    // 부족한 금액 계산
    const shortfall = totalCost - money;
    
    // 부족하지 않다면 0을 반환
    return shortfall > 0 ? shortfall : 0;
}
