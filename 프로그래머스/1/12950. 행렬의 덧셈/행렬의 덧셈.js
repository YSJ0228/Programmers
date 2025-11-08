function solution(arr1, arr2) {
    // map을 사용하여 각 행(row)을 순회
    return arr1.map((row, i) => 
        // 각 열(column)을 순회하면서 같은 위치의 원소끼리 더하기
        row.map((value, j) => value + arr2[i][j])
    );
}
