const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const re = Number(input[0]);
let farms = [];
let start = 1;

function dfs(farm, x, y, m, n) {
  if (x < 0 || x >= n || y < 0 || y >= m) return;
  if (farm[y][x] !== 1) return;

  farm[y][x] = 0;

  dfs(farm, x + 1, y, m, n);
  dfs(farm, x - 1, y, m, n);
  dfs(farm, x, y + 1, m, n);
  dfs(farm, x, y - 1, m, n);
}

for (let i = 0; i < re; i++) {
  const [m, n, k] = input[start].split(' ').map(Number);
  let farm = Array.from(Array(m), () => Array(n).fill(0));
  start++;

  for (let j = start; j < start + k; j++) {
    const [x, y] = input[j].split(' ').map(Number);
    farm[y][x] = 1;
  }

  farms.push(farm);
  start += k;
}

for (const farm of farms) {
  const m = farm.length;
  const n = farm[0].length;
  let count = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (farm[y][x] === 1) {
        dfs(farm, x, y, m, n);
        count++;
      }
    }
  }
  console.log(count);
}
