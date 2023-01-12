// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  // 최대공약수
  let gn = 1

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gn = i
    }
  }

  // 최소공배수
  let ln = 0

  ln = n * m / gn

  return [gn, ln]
}

console.log(solution(3, 12))