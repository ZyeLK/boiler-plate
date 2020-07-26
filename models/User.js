const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // salt가 몇 글자인지 나타냄

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50 // 최대 길이
    },
    email: {
        type: String,
        trim: true, // 스페이스바 없애줌
        unique: 1 // 못 겹침
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 // 기본값
    },
    image: String, // 오브젝트로 안 만들고 이런 식으로 할 수도
    token: {
        type: String // 유효 관리
    },
    tokenExp: {
        type: Number // 유효기간 (Expiration)
    }
})

// 유저 모델에 유저 정보 저장하기 전에 할 것 (새로운 정보를 저장할 때마다 이 부분 실행됨)
userSchema.pre('save', function(next){
    var user = this; // 새로 받은 user을 가리키는 변수

    // 비밀번호 업데이트 시
    if(user.isModified('password')){
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) { // 10자리 salt 이용해 비밀번호 암호화
            if(err) return next(err) // 에러 발생 시 바로 에러로 보내줌(index.js의 user.save 부분으로)
            
            bcrypt.hash(user.password, salt, function(err, hash) { // plain text로 된 비밀번호와 salt 이용. hash가 암호화된 비밀번호
                if(err) return next(err)
                user.password = hash // 암호화된 비밀번호로 교체해 저장
                next() // 원래로 돌아감
            });
        });
    }else{
        next() // next를 반드시 해 줘야 원래로 돌아감
    }
})

const User = mongoose.model('User', userSchema) // model은 schema를 감싸주는 역할

module.exports = {User} // 이 모델을 다른 파일에서도 쓸 수 있게