// 가운데 글자 가져오기
//https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const middle = Math.ceil(s.length / 2) - 1

  return (s.length % 2 === 0) ? s.substr(middle, 2) : s.substr(middle, 1)
}

console.log(solution('sdfsfsd'))

