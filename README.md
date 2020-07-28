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
client에서 npx create-react-app .
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

### react-router-dom
client에서 npm install react-router-dom --save


### axios
client에서 npm install axios --save
postman 이용 안 하고도 react js 부분에서 request보내기.
jquery에서 ajax에 해당하는 라이브러리.

### proxy
client에서 npm install http-proxy-middleware --save

CORS(cross-origin resource sharing) 정책 때문에, 서로 다른 origin(localhost:3000과 5000) 사이 그냥 request 불가
해결법: 1)same-origin으로 하기, 2)chrome cors extension 등 개발자 도구로 하기, 3) jsonp 이용해 모든 request를 getrequest로 하기, **4) proxy 이용**

프록시의 기능: 1) 유저가 인터넷에 접속 시 ip나 데이터 등 임의로 바꿀 수 있음 - 보안up, 제한된 사이트 들어가기 2) 방화벽 - 보안up
3) 웹 필터 - 어떤 사이트 못 들어가게 막기 4) 캐쉬 데이터, 공유 데이터 제공 - 더 빠른 인터넷 이용

### concurrently 이용법
root에서 npm install concurrently --save
원래는 root 디렉토리에서 npm run backend 통해 백엔드 키고, client 디렉토리에서 npm run start 통해 client 켜야 함
이걸 한번에 하기: package.json에서 정의.
이제 root에서 npm run dev로 실행가능

