// 3 x n 타일링
// https://school.programmers.co.kr/learn/courses/30/lessons/12902

// 다이나믹 프로그래밍(DP), 피보나치의 수 공식
function solution(n) {
  const arr = [0, 3, 11]
  const idx = n / 2

  if (n % 2) {
    return 0
  } 

  for (let i = 3; i <= idx; i++) {
    arr[i] = arr[i - 1] * 3 + 2

    for (let j = 1; j < i - 1; j++) {
      arr[i] += arr[j] * 2
    }

    arr[i] %= 1000000007
  }

  return arr[idx]
}

console.log(solution(4))