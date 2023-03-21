// 2 x n 타일링
// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 다이나믹 프로그래밍(DP), 피보나치의 수 공식
function solution(n) {
  const arr = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }

  return arr[n]
}

console.log(solution(4))