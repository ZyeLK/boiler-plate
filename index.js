const express = require('express')
const app = express()
const port = 3000 // localhost:3000 으로 접속가능

const config = require('./config/key')
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded 꼴 데이터 분석해서 가져올 수 있게
app.use(bodyParser.json()); // application/json 꼴 데이터 분석해서 가져올 수 있게

const { User } = require("./models//User");

app.get('/', (req, res) => res.send('Hello World!'))

// register route
app.post('/register', (req, res) => { // postman에서 http://localhost:3000/register로 POST해야 함
    //회원가입 시 필요한 정보들을 클라이언트에서 가져오면
    const user = new User(req.body)

    //정보를 데이터베이스에 넣어준다
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err}) // 에러 뜰 경우 false 출력
        return res.status(200).json({ success: true}) // status(200): 성공이란 뜻
    })
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))