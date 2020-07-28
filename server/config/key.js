//development mode인지 production mode인지 체크
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod'); // prod.js에서 가져옴
} else {
    module.exports = require('./dev');
}