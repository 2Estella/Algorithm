// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let strArr = [...s]

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== ' ') {
      if (strArr[i].toUpperCase().charCodeAt() + n > 90) {
        strArr[i] = String.fromCharCode(strArr[i].charCodeAt() + n - 26)

      } else {
        strArr[i] = String.fromCharCode(strArr[i].charCodeAt() + n)
      }
    }
  }

  return strArr.join('')
}

console.log(solution('akF jdls', 2))
