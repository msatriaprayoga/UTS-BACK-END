const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://uts-front-end-six.vercel.app"
  ],

  if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS"));
    }
  },
 methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors());

// IMPORT ROUTES
const routes = require("../routes"); 
app.use("/api", routes);

// app.post("/api/auth/login", (req, res) => {
//   res.json({
//     message: "Login berhasil"
//   });
// });

module.exports = app;
