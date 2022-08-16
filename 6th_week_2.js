// Node.js 에서는 모듈을 통해서 다른 파일에 있는 함수와 변수에 접근 가능함

function print_log() {
    console.log('첫번째 모듈이 불렸습니다')
}

function print_log2() {
    console.log('두번째 모듈이 불렸습니다')
}

const val='나영조'

// modue.exports.다른 파일에서 부를 이름 = 함수, 변수 이름

module.exports.mod_print_log=print_log;
module.exports.mod_print_log2=print_log2;
module.exports.mod_val=val;
