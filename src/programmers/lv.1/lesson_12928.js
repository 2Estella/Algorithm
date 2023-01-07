// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0

  for (i = 0; i < n; i++) {
    if (n % i === 0) {
      console.log(i)
      answer += i
    }
  }

  return answer + n
}

console.log(solution(12))