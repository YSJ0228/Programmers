function solution(num_list) {
    let even = 0; 
    let odd = 0;  
    
    for (let n of num_list) {
        if (n % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    
    return [even, odd];
}
