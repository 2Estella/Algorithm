// 멀리 뛰기
// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  const arr = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567
  }

  return arr[n] 
}

console.log(solution(4))