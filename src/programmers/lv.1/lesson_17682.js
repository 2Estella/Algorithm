// [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let score = 0
  let cnt = []

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = (Number(dartResult[i - 1]) === 1) ? 10 : Number(dartResult[i])

    } else {
      switch(dartResult[i]) {
        case 'S' :
        cnt.push(score)
        break

        case 'D' :
        cnt.push(Math.pow(score, 2))
        break

        case 'T' :
        cnt.push(Math.pow(score, 3))
        break

        case '*' :
        cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2
        cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2
        break

        case '#' :
        cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1]
        break
      }
    }
  }

  return cnt.reduce((acc, cur) => acc + cur, 0)
}

console.log(solution('1S2D*3T'))