// 점프와 순간 이동
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

/**
 * 점프와 순간 이동
 * @param {*} n 이동하려는 거리(1 이상 10억 이하의 자연수)
 * @returns 건전지 사용량의 최솟값
 */
function solution(n) {
  let answer = 0

  while (n) {
    if (n % 2 === 0) {
      n /= 2

    } else {
      n--
      answer++
    }
  }

  return answer
}

console.log(solution(5))