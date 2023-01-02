console.log(helloB());
console.log(helloA());

let helloA = function () {
  return "안녕하세요 여러분";
}; //함수 표현식 (호이스팅x)
//쉽게(화살표 함수) : let helloA = () => "안녕하세요 여러분";

function helloB() {
  return "안녕하세요 여러분";
} //함수 선언식 자바스크립트가 호이스팅(인터프리터가 메모리공간을 선언전에 미리할당 최상단으로)
