// 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  participant.sort()
  completion.sort()

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))