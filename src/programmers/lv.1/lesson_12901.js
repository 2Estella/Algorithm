// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  const days = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]

  let date = new Date(`2016-${a}-${b}`)
  let day = date.getDay()
  
  return days[day]
}

console.log(solution())
