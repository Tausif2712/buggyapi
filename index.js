const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const PORT = 5000;
// db connection
mongoose.connect("mongodb://127.0.0.1:27017/").then((e) => {
  console.debug(`DataBase is connected......`);
});

//middleware
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Sever on Port-->${PORT}`);
});
