function solution(numbers, hand) {
  const position = {
    1: [0, 0], 2: [1, 0], 3: [2, 0],
    4: [0, 1], 5: [1, 1], 6: [2, 1],
    7: [0, 2], 8: [1, 2], 9: [2, 2],
    '*': [0, 3], 0: [1, 3], '#': [2, 3]
  };

  // 처음 손 위치 설정
  let left = position['*'];
  let right = position['#'];

  let result = '';

  // numbers를 순서대로 탐색
  for (let num of numbers) {
    if ([1, 4, 7].includes(num)) {
      result += 'L';
      left = position[num];
    }
    else if ([3, 6, 9].includes(num)) {
      result += 'R';
      right = position[num]; 
    }
    // 거리 비교
    else {
      const [x, y] = position[num];
      const leftDist = Math.abs(left[0] - x) + Math.abs(left[1] - y);
      const rightDist = Math.abs(right[0] - x) + Math.abs(right[1] - y);

      if (leftDist < rightDist) {
        result += 'L';
        left = position[num];
      } else if (leftDist > rightDist) {
        result += 'R';
        right = position[num];
      } else {
        // 거리가 같을 때 
        if (hand === 'right') {
          result += 'R';
          right = position[num];
        } else {
          result += 'L';
          left = position[num];
        }
      }
    }
  }

  return result;
}
