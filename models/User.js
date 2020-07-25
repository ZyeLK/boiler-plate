const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema) // model은 schema를 감싸주는 역할

module.exports = {User} // 이 모델을 다른 파일에서도 쓸 수 있게