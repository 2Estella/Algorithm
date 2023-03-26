// 땅따먹기
// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  let answer = 0

  for (i = 0; i < land.length; i++) {
    if (i) {
      for (j = 0; j < land[i].length; j++) {
        let arr = land[i - 1].slice()
        
        arr[j] = 0
        land[i][j] += Math.max.apply(null, arr)
        answer = Math.max(land[i][j], answer)
        
      }
    }
  }

  return answer
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))