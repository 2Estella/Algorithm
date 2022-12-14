// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

function solution(a, b) {
  let answer = 0

  const maxNumber = Math.max(a, b)
  const minNumber = Math.min(a, b)

  for (i = minNumber; i <= maxNumber; i++) {
    answer += i
  }

  return answer
}


console.log(solution(2,5))