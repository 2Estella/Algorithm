// 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function solution(numbers, hand) {
  function findKey(key) {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['*', 0, '#']
    ]

    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (key === keypad[i][j]) {
          return [i, j]
        }
      }
    }
  }

  let answer = ''
  let left = '*'
  let right = '#'

  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L'
      left = num
      console.log('left', left)

    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R'
      right = num - 2

    } else {
      let l = findKey(left)
      let r = findKey(right)
      let middle = findKey(num)

      let lDistance = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1])
      let rDistance = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1])

      if (lDistance === rDistance) {
        if (hand === 'left') {
          left = num
          answer += 'L'
        } else {
          right = num
          answer += 'R'
        }

      } else if (lDistance < rDistance) {
        left = num
        answer += 'L'

      } else {
        right = num
        answer += 'R'
      }
    }
  }

  return answer
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))