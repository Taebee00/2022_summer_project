'use strict'

// XMLHttpRequest()로 서버에 요청할 수 있는 객체 생성
// open('GET', 서버 주소)로 서버에 파일을 요청
let request = new XMLHttpRequest()
// 127.0.0.1 -> 자기 자신의 IP 주소 (파일을 요청할 서버의 주소)
// 5501: 포트 
// true: 비동기식 / false: 동기식
request.open('GET','http://127.0.0.1:5501/5th_week_1.html',false) // 요청을 만듬
request.send(null) // 요청을 보냄

// status 값이 200 이면 서버로부터 값을 잘 받았다는 의미
if (request.status===200) {
    console.log(request.responseText) // responseText: 받아온 값
}
