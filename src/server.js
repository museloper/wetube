// const express = require("express");
import express from "express";

const PORT = 4000;

// 서버 생성
const app = express();

const middleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next(); // 다음 미들웨어를 호출한다.
}

const log = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const ban = (req, res, next) => {
  const url = req.url;
  if(url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
}

app.use(log); // 글로벌 미들웨어 이다.
app.use(ban); 

// GET Request
app.get("/", middleware, (req, res) => {
  //   return res.end();
  return res.send("I love you 😍");
});

app.get("/protected", (req, res) => {
  return res.send("Welcome to the private lounge"); // 미들웨어에 의해 실행되지 않음.
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`)
);
