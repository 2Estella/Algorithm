// 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = n - lost.length

  lost = lost
    .sort((a, b) => a - b)
    .filter((lostItem) => {
      if (reserve.includes(lostItem)) {
        answer++
        reserve = reserve.filter((reserveItem) => lostItem !== reserveItem)

      } else {
        return lostItem
      }
    })

  if (answer !== n) {
    lost.map((lostNumber) => {
      if (reserve.includes(lostNumber - 1)) {
        reserve = reserve.filter((item) => item !== lostNumber - 1);
        answer++

      } else if (reserve.includes(lostNumber + 1)) {
        reserve = reserve.filter((item) => item !== lostNumber + 1);
        answer++
      }
    })
  }

  return answer
}

console.log(solution(5, [2, 4], [1, 3, 5]))