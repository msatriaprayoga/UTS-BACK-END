const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://uts-front-end-six.vercel.app"
  ],
  credentials: true
}));

app.post("/api/auth/login", (req, res) => {
  res.json({
    message: "Login berhasil"
  });
});

app.post("/api/auth/dashboard", (req, res) => {

});

module.exports = app;
