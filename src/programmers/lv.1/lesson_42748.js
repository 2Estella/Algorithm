// K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = []

  commands.map((item) => {
    let commandsArr = []

    commandsArr = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)

    if (commandsArr.length < 1) {
      answer.push(commandsArr[0])

    } else {
      answer.push(commandsArr[item[2] - 1])
    }
  })

  return answer
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))