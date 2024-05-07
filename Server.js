//express 라이브러리 문법
//express 라이브러리 사용
const express = require("express");
const app = express();

//서버 띄우는 코드
app.listen(8080, () => {
  //8080은 포트번호 / 포트는 타 컴퓨터가 내 컴퓨터로 연결할 수 있는 통로
  console.log("http://localhost:8080 에서 서버 실행중");
});

app.get("/", (요청, 응답) => {
  //get은 누가 메인페이지 접속 시
  응답.send("dd"); //send()를 보냄
});

//서버 기능 코드
app.get("/about", (요청, 응답) => {
  //get은 누가 메인페이지 접속 시
  응답.sendFile(__dirname + "/index.html"); //sendFile : 파일보내기
});

app.get("/news", (요청, 응답) => {
  //get은 누가 메인페이지 접속 시
  응답.send("여다슬ㅈㄴㅈㄴ패기"); //send()를 보냄
});

//function 이랑 =>은 같음/ 콜백함수임
app.get("/shop", function (요청, 응답) {
  //get은 누가 메인페이지 접속 시
  응답.send("쇼핑페이지임"); //send()를 보냄
});

// 영규 개같이 뛰어오는거 작성
app.get("/dog", (요청, 응답) => {
  //get은 누가 메인페이지 접속 시
  응답.sendFile(__dirname + "/test.html"); //sendFile : 파일보내기
});
