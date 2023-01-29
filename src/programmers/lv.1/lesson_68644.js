// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let answer = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j]

      if (answer.indexOf(sum) === -1) {
        answer.push(sum)
      }
    }
  }

  answer.sort((a, b) => a - b)

  return answer
}

console.log(solution([2,1,3,4,1]))