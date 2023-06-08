// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

/**
 * JadenCase 문자열 만들기
 * @param s 숫자 + 영문으로 이루어진 문자열
 * @returns JadenCase로 바꾼 문자열
 */
function solution(s) {
  return s
        .toLowerCase()
        .split(' ')
        .map(item => item.charAt(0).toUpperCase() + item.substring(1))
        .join(' ')
}

console.log(solution("3people unFollowed me"))