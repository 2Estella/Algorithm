// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let numArr = String(x).split('').map(item => Number(item))
  let total = 0

  total = numArr.reduce((num, currValue) => num + currValue)

  return  (x % total === 0) ? true : false
}

console.log(solution(13))