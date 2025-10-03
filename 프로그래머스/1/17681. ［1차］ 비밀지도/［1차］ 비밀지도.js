function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        let merged = arr1[i] | arr2[i];
        let binary = merged.toString(2).padStart(n, "0");
        let line = binary.replace(/1/g, "#").replace(/0/g, " ");
        
        answer.push(line);
    }

    return answer;
}
