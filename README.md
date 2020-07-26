# boiler-plate

## 설치할 것들

### express js:
npm install express --save

### 몽고DB
npm install mongoose --save
몽고DB에 생성한 유저와 연결됨. mongoose.connect() 확인
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