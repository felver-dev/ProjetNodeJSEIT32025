const express = require("express");
const cors = require("cors");
const { Connection } = require("./config/db");
const userRouter = require("./routes/useRoutes");

const app = express();
const PORT = 8080;
const API = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  allowHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(`${API}/users`, userRouter);

Connection();

app.listen(PORT, () => {
  console.log(`The server is running on port : ${PORT}`);
});
