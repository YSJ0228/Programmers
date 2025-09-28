function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    let len = numbers.length;
    return numbers[len - 1] * numbers[len - 2];
}
