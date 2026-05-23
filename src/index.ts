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

app.get("/api/pembicara", (req, res) => {
  res.json({ message: "List pembicara" });
});

app.get("/api/events", (req, res) => {
  res.json({ message: "List events" });
});

app.get("/api/categories", (req, res) => {
  res.json({ message: "List categories" });
});


module.exports = app;
