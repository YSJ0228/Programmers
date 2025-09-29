function solution(array, height) {
    let count = 0;
    
    for (let h of array) {
        if (h > height) {
            count++;
        }
    }
    
    return count;
}
