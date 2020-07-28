# boiler-plate

## server

### express js:
npm install express --save
일련의 미들웨어 함수를 호출하는 애플리케이션.
미들웨어 함수: 요청 오브젝트(req), 응답 오브젝트(res), 다음 미들웨어 함수(next)에 대한 액세스 권한을 가짐

### 몽고DB
npm install mongoose --save
몽고DB에 생성한 유저와 연결됨. mongoose.connect() 확인
(보안을 위해 비밀번호는 config의 dev.js 안에 있음)
username: taewon
password: abcd1234

### bodyparser, postman
npm install body-parser --save
클라이언트가 서버에게 'Body'를 통해 요청한다. (Body = 문자열, JSON, URL 등)
Body 데이터를 분석(Parse)하여 req.body로 출력해줌.
현재는 client가 없어 postman 프로그램 이용하여 요청함.

### 노드몬:
npm install nodemon --save-dev
노드몬을 통해 run하면, 서버를 껐다 켜지 않아도 수정사항이 자동반영됨.
현재는 npm run monstart로 실행. monstart는 이름 맘대로 바꿀 수 있음.

### Bcrypt:
npm install bcrypt --save
비밀번호 등 mongoDB에 저장할 때 암호화하기

### jsonwebtoken
npm install jsonwebtoken --save
토큰 생성하기

### cookie-parser
npm install cookie-parser --save
쿠키에 저장이 가능하게 해줌

## client

### react
npx create-react-app .
(client 디렉토리 안에다 설치)
* npm: node package manager
1. dependency(라이브러리들)을 담는 저장소(registry) 역할. npm install ~~ 등.
-g 옵션으로 global하게 설치할 수 있음 (윈도우: %appdata%/npm)
npm install -g create-react-app처럼 사용
2. build해서 배포할 때 사용. npm run build 등.
* npx: npm registry에서 create-react-app을 찾아서 다운로드 없이 실행시켜줌.
disk space 절약, 항상 최신 버전 사용 가능

client에서 npm run start 하면 react-scripts start 실행됨. react 켜짐.

webpack이 관리해주는 부분: src(source)만. public 부분은 관리 안 됨.
이미지 등을 넣을 때는 src에 넣어야 제대로 관리됨.