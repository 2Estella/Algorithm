// 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

/**
 * 예상 대진표
 * @param {*} n 참가 인원
 * @param {*} a 참가자 번호
 * @param {*} b 경쟁자 번호
 * @returns a와 b가 만나는 라운드
 */
function solution(n, a, b) {
  let answer = 0;

  while(a !== b) {
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
    
    answer++
  } 

  return answer;
}

console.log(solution(8, 4, 7)) // 3