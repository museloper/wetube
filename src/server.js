// const express = require("express");
import express from "express";

const PORT = 4000;

// 서버 생성
const app = express();

// GET Request
app.get("/", () => console.log("Somebody is trying to go home 🙊"));

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`)
);
