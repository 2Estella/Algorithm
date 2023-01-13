// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
  let answer = 0

  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2

    } else {
      num = (num * 3) + 1
    }

    answer += 1
  }

  return (answer >= 500) ? -1 : answer
}

console.log(solution(6))