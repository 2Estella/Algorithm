// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let answer = []

  if (arr.length <= 1) {
    answer = [-1]

  } else {
    let minNum = Math.min(...arr)
    let idx = arr.indexOf(minNum)

    arr.splice(idx, 1)
    answer = arr
  }

  return answer
}

console.log(solution([4, 2, 3, 4]))