const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

app.use(express.json());

app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("vercel.app") ||
      origin === "http://localhost:5173"
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.options('*', cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Event Management API is running' });
});

app.use('/api', routes);

// app.post("/api/auth/login", (req, res) => {
//   res.json({
//     message: "Login berhasil"
//   });
// });

module.exports = app;
