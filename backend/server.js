import express from "express";
import connection from "./config/config.js";
import userRouter from "./routes/user.routes.js";
import fileRouter from "./routes/userFiles.routes.js";
import dotnev from "dotenv";
import cookieParser from "cookie-parser";

dotnev.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRouter);
app.use("/api/file", fileRouter);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  connection.then(() => {
    console.log("connected to Database");
  });
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || " Internal Server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
