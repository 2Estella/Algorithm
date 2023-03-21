// 가장 큰 정사각형 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = 0

  const row = board.length
  const col = board[0].length
  
  if (row < 2 || col < 2) return 1
  
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j]) {
        let min = Math.min(
          board[i - 1][j - 1], 
          board[i - 1][j], 
          board[i][j - 1]
        )
        
        board[i][j] = min + 1
      }

      if (answer < board[i][j]) {
        answer = board[i][j]
      } 
    }
  }

  return answer * answer
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))