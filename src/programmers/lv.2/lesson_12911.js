// 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let answer = n + 1
  let onesInN = n.toString(2).split('').filter(v => v === '1').length

  while (true) {
    let onesInAnswer = answer.toString(2).split('').filter(v => v === '1').length

    if (onesInN === onesInAnswer) {
      break;
    }

    answer++
  }

  return answer
}

console.log(solution(78))