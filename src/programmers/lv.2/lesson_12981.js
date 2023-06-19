// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

/**
 * 영어 끝말잇기
 * @param {*} n 끝말잇기에 참여하는 사람의 수(2이상 10이하 자연수)
 * @param {*} words 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열(n 이상 100 이하)
 * @returns 탈락하는 경우 [ 번호, 차례 ] or 탈락자가 없는 경우 [0, 0]
 */
function solution(n, words) {
  for ( let i = 1; i < words.length; i++ ) {
    if (words[i-1].slice(-1) !== words[i][0] || words.slice(0, i).includes(words[i])) {
      return [i % n + 1, parseInt(i / n) + 1]
    }
  }
  return [0, 0]
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))