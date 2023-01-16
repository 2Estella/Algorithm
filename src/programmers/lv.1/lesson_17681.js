// 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = []
  
  for (let i = 0; i < n; i++) {
    let row = []

    for (let j = 0; j < n; j++) {
      let cell1 = arr1[i].toString(2).padStart(n, 0).split('')[j]
      let cell2 = arr2[i].toString(2).padStart(n, 0).split('')[j]
      
      row.push((cell1 == '0' && cell2 == '0') ? ' ' : '#')
    } 

    answer.push(row.join(''))
  }
  
  return answer
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))