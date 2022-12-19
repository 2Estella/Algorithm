// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = []

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i])
    } 
  }

  return answer.length > 1 ? answer.sort((a, b) =>  a - b) : [-1]
}

console.log(solution([1, 2, 32, 43], 4))