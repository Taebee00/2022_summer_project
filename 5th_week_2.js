// requset.onload()를 사용한 비동기식 실행

'use strict'

// XMLHttpRequest()로 서버에 요청할 수 있는 객체 생성
let request = new XMLHttpRequest()

// 미리 request에 대한 이벤트 핸들러를 만듬, onload()는 request가 로딩되면 실행됨
request.onload=()=>{
    if (request.status===200) {
        console.log(request.responseText) // responseText: 받아온 값
    }
    else
    {
        console.log('에러 발생')
    }
}

request.open('GET','http://127.0.0.1:5501/5th_week_1.html',true) // 요청을 만듬, true: 비동기식
request.send(null) // 요청을 보냄


