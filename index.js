// express
const express = require('express');
const app = express();
const port = 3000; // localhost:3000 으로 접속가능

// mongoose
const config = require('./config/key');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded 꼴 데이터 분석해서 가져올 수 있게
app.use(bodyParser.json()); // application/json 꼴 데이터 분석해서 가져올 수 있게

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// 다른 파일 포함
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');

app.get('/', (req, res) => res.send('Hello World!')) // req: 요청 오브젝터, res: 응답 오브젝트

// register route
app.post('/api/users/register', (req, res) => { // postman에서 http://localhost:3000/api/users/register로 POST해야 함
    //회원가입 시 필요한 정보들을 클라이언트에서 가져오면
    const user = new User(req.body)

    //정보를 데이터베이스에 넣어준다
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err}) // 에러 뜰 경우 false 출력
        return res.status(200).json({ success: true}) // status(200): 성공이란 뜻
    })
})

// login route
app.post('/api/users/login', (req, res) => {
    //요청된 이메일이 데이터베이스에 있는지 확인
    User.findOne({email: req.body.email}, (err, user) => { //mongoDB에서 제공하는 메소드
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "존재하지 않는 이메일입니다."
            });
        }

        //요청된 비밀번호가 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                });
            }

            //user 위한 토큰 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err); // 400: 에러가 있다는 뜻

                // 토큰을 저장한다(저장 장소는 cookie, local storage, session storage 등 여러 곳이 가능)
                // 저장한 건 크롬에서 F12 -> application 탭에서 확인가능
                // cookie-parser 활용해 쿠키에 저장하기
                res.cookie("x_auth", user.token)
                   .status(200).json({loginSuccess: true, userId: user._id}) // 성공, json 데이터 보내기
            });
        });
    });
});

// auth route (get)
app.get('/api/users/auth', auth, (req, res) => { // 중간 auth는 미들웨어로, request 받고 callback function 하기 전에 중간에서 해줄 것
    // 미들웨어 성공적으로 통과한 후 여기로 옴
    res.status(200).json({
        isAuth: true,
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    }) // 이렇게 하면 유저 정보 받아오기 가능
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))