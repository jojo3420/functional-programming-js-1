//
class Person {
  constructor(firstname, lastname, age) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._age = age;
  }

  get firstName() {
    return this._firstname;
  }

  get lastName() {
    return this._lastname;
  }

  get age() {
    return this._age;
  }
}

const jojo = new Person('jojo', 'park', 30)
console.log(jojo.firstName, jojo.lastName, jojo.age);
jojo._firstname = 'jihoon';
// setter 가 없어도 변경할 수있다.
console.log(jojo.firstName, jojo.lastName, jojo.age);

// 함수도 객체다. 즉 함수는 first-class => 일급 시민 이다.
// 함수 선언 방식
function f1(a, b) {
  return a + b;
}

// 익명함수로 선언
const f2 = function (a, b) {
  return a + b;
};

// 익명함수로 함수 표현식
const f3 = (a, b) => a + b;

// 함수 클래스의 인스턴스로 함수 선언
const f4 = Function('a', 'b', 'return a + b');
console.log('f4:', f4(1, 2));


// 고계함수 : 매개변수로 함수(를 받는 함수
// 함수도 객체 이므로. 객체 처럼 사용이 가능 하다. 즉 함수의 매개변수로 함수를 넣을 있다.
// 객체도 값이고 함수도 객체이므로 함수도 값(value) 이며 값처럼 사용 한다.
const sum = (a, b) => a + b;
const applyRun = (a, b, opt) => opt(a, b);
console.log('applyRun: ', applyRun(10, 20, sum));

const add = a => b => a + b;
console.log('add:', add(10)(20));


// 클로저 : 이너 함수에서 아웃터 함수의 매개변수 또는 지역변수에 전급이 가능한 것
// "클로저" 는 함수를 선언할 당시의 환경에 함수를 묶어 둔 자료 구조이다!

function makeAddFunc(amount) {
  return function add(number) {
    return number + amount; // outter 함수의 매개변수 사용
  }
}

const addFunc = makeAddFunc(10);
console.log('add:', addFunc(5));

// 예시2 캡슐화 된 객체 리터럴 리턴
function zipCode(code, location) {
  let _code = code;
  let _location = location;

  return {
    // 클로저 를 통해서 블록 레벨이 다른 멤버 변수에도 접근이 가능함!
    code: () => _code,
    location: () => _location,
    toString: () => `${_code}-${_location}`

  }
}

const myZip = zipCode(123, 22);
console.log(myZip.toString());

// 클로저가 접근 할 수 있는 범위
// 1. 함수 스코프내의 모든 매개변수 : param1, param2
// 2. 전역 변수 및 함수 스코프 내의 있는 모든 변수 : globalVar, outerVar, localVar
// 3. 의사 블록 스코프(함수 선언부 이후의 선언한 변수) : wow
const globalVar = 'Global Variable';

function outerFunction(param1) {
  let outerVar = 'Outer Variable';

  function innerFunction(param2) {
    const localVar = 'localVar';
    console.log(`global: ${globalVar}, outerVar: ${outerVar}, outer.param1: ${param1}, param2: ${param2}, localVar: ${localVar}`);
  }

  return innerFunction;
  // var wow = 'wow'; // const 선언하면 에러남, var 로하면 언디파인드
}

const innerFunc = outerFunction('param1');
innerFunc('param2');


// 클로저 응용
// 1. 자바 스크립트에서 지원하지 않는 private 변수 모방
var MyModule = (function MyModule(_export) {
  let _myPrivateVar = 'private variable';

  _export.method1 = function () {
    return _myPrivateVar;
  };
  _export.method2 = function () {
    return _myPrivateVar;
  };
  return _export

}(MyModule || {}));

console.log('my module:',MyModule);
console.log('my module:', MyModule.method1(), MyModule.method2());

//2. 서버 측 비동기 호출에서 체이닝 스킬을 이용하여 간단하게 응용 가능.
// 다음 챕터에서 보여줌

//3. 가상의 블록 스코프 변수를 생성
// 함수형으로 접근한다면, 클로저와 함수스코프를 적극 이용한 forEach() 가 정답!
[100, 200, 300].forEach((n, i) => console.log(n, i));
// console.log('i:', i); // i is not defined
