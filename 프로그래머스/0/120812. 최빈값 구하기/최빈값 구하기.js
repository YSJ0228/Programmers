function solution(array) {
    let count = {}, max = 0, mode = -1;
    array.forEach(n => {
        count[n] = (count[n] || 0) + 1;
        if(count[n] > max) { max = count[n]; mode = n; }
        else if(count[n] === max && mode !== n) mode = -1;
    });
    return mode;
}
