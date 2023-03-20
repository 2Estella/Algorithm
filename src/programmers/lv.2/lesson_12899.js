// 124 나라의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = ''
  // 3진법과 비슷하고, 0이 나올때만 달라짐. 
  // 3으로 나눈 나머지 값이 0일 때 4, 1일 때 1, 2일 때 2로 대체. 해당 값을 배열로 담아서 계산
  const numbers = [4, 1, 2]

  while(n) {
    answer = numbers[n % 3] + answer
    n = (n % 3 === 0) ? (n / 3 - 1) : Math.floor(n / 3)
  }

  return answer
}

console.log(solution(21))

