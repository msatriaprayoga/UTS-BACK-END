import router from './routes/index';

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
app.options("*", cors());
app.use("/api", router);

// app.post("/api/auth/login", (req, res) => {
//   res.json({
//     message: "Login berhasil"
//   });
// });

// module.exports = app;

export default app;
