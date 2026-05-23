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

app.post("/api/auth/register", (req, res) => {
  res.json({ message: "Register berhasil" });
});

app.get("/api/categories", (req, res) => {
  res.json([]);
});

app.get("/api/categories/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/api/categories", (req, res) => {
  res.json({ message: "Category dibuat" });
});

app.put("/api/categories/:id", (req, res) => {
  res.json({ message: "Category diupdate" });
});

app.delete("/api/categories/:id", (req, res) => {
  res.json({ message: "Category dihapus" });
});

app.get("/api/pembicara", (req, res) => {
  res.json([]);
});

app.get("/api/pembicara/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/api/pembicara", (req, res) => {
  res.json({ message: "Pembicara dibuat" });
});

app.put("/api/pembicara/:id", (req, res) => {
  res.json({ message: "Pembicara diupdate" });
});

app.delete("/api/pembicara/:id", (req, res) => {
  res.json({ message: "Pembicara dihapus" });
});

app.get("/api/events", (req, res) => {
  res.json([]);
});

app.get("/api/events/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/api/events", (req, res) => {
  res.json({ message: "Event dibuat" });
});

app.put("/api/events/:id", (req, res) => {
  res.json({ message: "Event diupdate" });
});

app.delete("/api/events/:id", (req, res) => {
  res.json({ message: "Event dihapus" });
});


module.exports = app;
