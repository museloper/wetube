// const express = require("express");
import express from "express";

const PORT = 4000;

// 서버 생성
const app = express();

// GET Request
app.get("/", (req, res) => {
  //   return res.end();
  return res.send("I love you 😍");
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`)
);
