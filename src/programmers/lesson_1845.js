// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const availableNumber = nums.length / 2
  const type = [...new Set(nums)]
  // const type = nums.filter((element, index) => {
  //   return nums.indexOf(element) === index
  // })

  return (type.length > availableNumber) ? availableNumber : type.length
}

console.log(solution([1, 4, 2, 4, 5, 1]))