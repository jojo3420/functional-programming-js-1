const _ = require('lodash');

//  학생들의 평균 점수를 구하여라
const input = [80, 90, 100];

// 명령형 프로그래밍 컨셉
function averageFunc(arr) {
  let total = 0;
  // 함수의 스코프가 넓다. 그래서 외부 forEach 스코프에는 없는 total이 사용한다. ==> 불순하다.
  arr.forEach(num => total += num);
  return total / arr.length;
}
console.log('명령형 프로그래밍 평균점수: ', averageFunc(input));


//  함수형 프로그래밍 컨셉
// const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
// const total = arr => sum(arr);
const sum = (a, b) => a + b;
const total = arr => arr.reduce(sum);
const size = arr => arr.length;
const division = (a, b) => a / b;
const getAverage = arr => division(total(arr), size(arr));
console.log('함수형 프로그래밍 평균점수:', getAverage(input));


// 문제2. 복수 과목을 수강한 학생의 평균 구하기
const students = [
  {grade: 100, enrolled: 2},
  {grade: 80, enrolled: 2},
  {grade: 80, enrolled: 1},
];

// 2-1 명령형 관점에서 풀기
let totalGrade = 0, totalEnrolled = 0;
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student) {
    if (student.enrolled > 1) {
      totalGrade += student.grade;
      totalEnrolled++;
    }
  }
}
console.log('명령형 관점에서 풀기 average2: ', totalGrade / totalEnrolled);

// 2-2  함수형 프로그래밍 관점
// _.chain(students)
//   .filter(student => student.enrolled > 1)
//   .pluck('grade')
//   .average()
//   .value();
// => 체이닝을 통해 느슨한 평가를 한다.



function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

const man1 = new Person('james', 'boby', 20);

// 객체의 값을 조작하지 않고 값만 리턴한다는 컨셉을 보여줌
const fullname = person => [person.firstname, person.lastname].join(' ');
console.log(fullname(man1), man1); // man1의 프로퍼티를 조작하지 않음.
// 배열에 담아서 조인하여 리턴한다.?  객체의 값들을 복사해서 원본 데이터를 조작하지 않으려는 의지로 해석됨.









