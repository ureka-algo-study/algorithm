const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;
const T = Number(input[line++]);

// 방향 벡터 (우, 좌, 하, 상)
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(' ').map(Number);

  // 1. farm 배열 초기화 (M: 가로, N: 세로) -> 문제 조건에 따라 y, x 주의
  const farm = Array.from(Array(N), () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [X, Y] = input[line++].split(' ').map(Number);
    farm[Y][X] = 1;
  }

  let count = 0;

  // 2. 순회 및 탐색
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (farm[y][x] === 1) {
        count++;

        // 반복문(Stack) 기반 DFS로 스택 오버플로우 방지
        const stack = [[x, y]];
        // console.log('stack : ', stack);
        farm[y][x] = 0; // 방문 처리

        while (stack.length > 0) {
          const [currX, currY] = stack.pop();
          //   console.log(`currX, currY: ${currX}, ${currY}`);
          for (let d = 0; d < 4; d++) {
            const nx = currX + dx[d];
            const ny = currY + dy[d];

            // console.log(`nx, ny: ${nx}, ${ny}`);
            if (nx >= 0 && nx < M && ny >= 0 && ny < N && farm[ny][nx] === 1) {
              farm[ny][nx] = 0; // 방문 처리
              stack.push([nx, ny]);
              //   console.log('stack : ', stack, '\n');
            }
          }
        }
      }
    }
  }
  console.log(count);
}
