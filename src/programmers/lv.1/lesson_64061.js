// 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let count = 0
  let bucket = []

  let newBoard = Array.from(Array(board.length), () => Array())

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      newBoard[j].push(board[i][j])
    }
  }

  let filterBoard = []

  for (let i = 0; i < board.length; i++) {
    filterBoard.push(newBoard[i].filter((v) => v !== 0))
  }

  for (let i = 0; i < moves.length; i++) {
    if (bucket.length === 0) {
      bucket.push(filterBoard[moves[i] - 1].shift())

    } else {
      let latestPick = bucket[bucket.length - 1]
      let newPick = filterBoard[moves[i] - 1].shift()

      if (latestPick === newPick && newPick !== undefined) {
        count++
        bucket.pop()

      } else {
        bucket.push(newPick)
      }
    }
  }
  return count * 2
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))