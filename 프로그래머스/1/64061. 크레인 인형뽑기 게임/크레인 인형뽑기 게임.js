function solution(board, moves) {
  let basket = [];  // 인형을 담는 바구니
  let count = 0;    // 터진 인형 개수

  for (let move of moves) {
    let col = move - 1; // 인덱스 맞추기

    // 각 행(row)을 위에서부터 내려오면서 인형 찾기
    for (let row = 0; row < board.length; row++) {
      let doll = board[row][col];

      if (doll !== 0) {        // 인형 발견
        board[row][col] = 0;   // 그 자리를 빈칸으로 변경

        if (basket[basket.length - 1] === doll) {
          basket.pop();        // 같은 인형이면 터뜨림
          count += 2;
        } else {
          basket.push(doll);   // 아니면 바구니에 넣기
        }

        break; // 인형 하나만 집을 수 있음
      }
    }
  }

  return count;
}
