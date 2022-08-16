// node_modules 에 있는 express 관련 파일을 가져옴
const express = require('express')

// 반환값을 변수에 저장
const app = express()

app.use('/',express.static(__dirname))

// 3000: 포트 번호
app.listen(3000, ()=>{
    console.log('3000번 포트에 입력을 받을 준비가 됐음')
})

app.get('/',(req, res)=>{
    console.log('root페이지에 대한 요청이 들어옴')
    res.sendFile(__dirname+'/root.html')
})

app.get('/index',(req,res)=>{
    console.log('index페이지에 대한 요청이 들어옴')
    res.sendFile(__dirname+'/index.html')
})

app.get('/about',(req,res)=>{
    console.log('about페이지에 대한 요청이 들어옴')
    res.sendFile(__dirname+'/about.html')
})

app.get('/count',(req,res)=>{
    console.log('count페이지에 대한 요청이 들어옴')
    res.sendFile(__dirname+'/count.html')
})









