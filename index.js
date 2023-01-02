// console.log(helloB());
// console.log(helloA());

// // let helloA = function () {
// //   return "안녕하세요 여러분";
// // }; //함수 표현식 (호이스팅x)
// // //쉽게(화살표 함수) : let helloA = () => "안녕하세요 여러분";

// function helloB() {
//   return "안녕하세요 여러분";
// } //함수 선언식 자바스크립트가 호이스팅(인터프리터가 메모리공간을 선언전에 미리할당 최상단으로)

// //단락회로평가: 뒤에꺼상관x 앞에거만봐도 알수있는 논리연산자
// const getName = (person) => {
//   const name = person && person.name;
//   return name || "객체가아닙니다";
// };
// let person = null;
// const name = getName(person);
// console.log(name);

// //비구조화할당
// let arr = ["one", "two", "three"];

// //let [one,two,three] = arr;
// //let [one, two, three, four = "four"] = ["one", "two", "three"];

// console.log(one, two, three, four);
// //스왑
// let [a, b] = [10, 20];
// [a, b] = [b, a];
// let object = { one: "one", two: "two", three: "three", name: "이정환" };
// let { name: myName, one: oneOne, two, three, abc = "four" } = object;

//비동기방식
function taskA() {}

//wqeqwewqeqwe
