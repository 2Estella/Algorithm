// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let total = 0

  total = arr.reduce((sum, currValue) => {
    return sum + currValue
  }, 0)

  return total / arr.length
}

console.log(solution([1, 2, 3, 4]))