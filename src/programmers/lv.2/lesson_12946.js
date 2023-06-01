// 하노이의 탑
// https://school.programmers.co.kr/learn/courses/30/lessons/12946

/**
 * 하노이의 탑
 * DFS(깊이 우선 탐색) 알고리즘, 재귀함수
 * 
 * @param n 원판의 개수
 * @returns [] 원판을 최소로 옮기는 방법 
 */
function solution(n) {
  const answer = []

  const hanoi = (n, from, to, by) => {
    // 재귀함수 종료 조건! 1번(from)에 원판(n)이 하나인 경우 바로 3번(to)으로 옮기고 종료
    if (n === 1) { 
      answer.push([from, to])
      return
    }

    hanoi(n - 1, from, by, to)
    answer.push([from, to])
    hanoi(n - 1, by, to, from)
  }

  hanoi(n, 1, 3, 2)

  return answer
}

console.log(solution(2))
