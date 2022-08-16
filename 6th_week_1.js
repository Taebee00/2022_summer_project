// nodejs 는 자바스크립트를 웹 브라우저가 아닌 곳에서 실행 시켜줄 수 있는 프로그램
console.log('hello, node js');

// require(모듈을 가져올 파일) 로 다른 파일에 있는 모듈을 가져올 수 있음
const test = require('./6th_week_2.js')

// 모듈을 변수로 만든 후 클래스처럼 사용 가능
test.mod_print_log();
test.mod_print_log2();
console.log(test.mod_val);
