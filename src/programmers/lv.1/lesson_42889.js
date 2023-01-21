// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let answer = []
  let users = stages.length

  for (let i = 1; i <= N; i++) {
    let notClear = stages.filter((user) => i === user).length
    
    users -= notClear
    answer.push({ stage: i, ratio: notClear/users })
  }

  answer.sort((a, b) => {
      if (a.ratio === b.ratio) {
        return a.stage - b.stage

      } else {
        return b.ratio - a.ratio 
      }
  })

  return answer.map(obj => obj.stage)
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))