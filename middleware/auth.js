const { User } = require('../models/User');

// authentication 처리
let auth = (req, res, next) => {
    // 클라이언트 쿠키에서 token 가져오기
    let token = req.cookies.x_auth;

    // token 복호화해 user 찾기 (user가 있으면 인증됨)
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true});

        req.token = token;
        req.user = user; // 이후 index.js에서 req.token이나 req.user 통해 유저 정보 받을 수 있게 하려고 함
        next(); // 미들웨어에서 빠져나가기 위해 next() 해야 함
    });
}

module.exports = { auth };