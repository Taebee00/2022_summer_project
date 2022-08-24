// require 을 통해서 필요한 패키지를 가져옴
const { exec } = require('child_process')
const express = require('express')
const mysql = require('mysql')
const path = require('path')
const static = require('serve-static')
const dbconfig = require('./config/dbconfig') // ./config/dbconfig 모듈을 가져옴(보안 문제)

// sql 서버와 연결선을 만들어주는 것
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', 
    user: 'root',
    datebase: 'firstdabase',
    password: 'tvp9uq6r!',
    port: '3306',
    debug: false
})

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// /public이라는 요청이 들어오면 찾을 주소(path)를 설정해주는 것
app.use('/public', static(path.join(__dirname, 'public')))

// post 형태로 요청을 받으면
app.post('/process/adduser',(req,res)=>{
    console.log('/process/adduser 호출됨'+req);
    // 받은 req의 body 에서 id, name, age, password 정보를 저장
    const paramId = req.body.id;
    const paramName = req.body.name;
    const paramAge = req.body.age;
    const paramPassword = req.body.password;

    // sql 서버와 연결해달라고 요청
    pool.getConnection((err, conn)=>{
        
        if (err) {
            console.log('Mysql getConnection error')
            return;
        }

        console.log('Mysql getConnection success')

        conn.query('insert into users (id, name, age, password) values (?,?,?,password(?));',
            [paramId, paramName, paramAge, paramPassword],
            (err, result)=>{
            console.log('실행된 SQL: '+exec.sql)

            if (err) {
                console.log('SQL 실행시 오류 발생')
                console.dir(err);
                res.writeHead('200', {'Content-Type':'text/html; charset-utf8'})
                res.write('<h1>SQL 실행 실패</h1>')
                res.end();
                return;
            }
            
            if (result) {
                console.dir(result);
                console.log('Inserted 성공')

                res.writeHead('200', {'Content-Type':'text/html; charset-utf8'})
                res.write('<h2>사용자 추가 성공</h2>')
                res.end()
            }
            else {
                console.log('Inserted 실패')

                res.writeHead('200', {'Content-Type':'text/html; charset-utf8'})
                res.write('<h2>사용자 추가 실패</h2>')
                res.end()
            }
        }
        )
    })
})

app.listen(3000,()=> {
    console.log('Listening')
})