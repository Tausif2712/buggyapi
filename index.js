const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const driverRoute = require("./routes/driver");
const path = require("path");
const PORT = 5000;
// db connection
mongoose.connect("mongodb://127.0.0.1:27017/userDb").then((e) => {
  console.debug(`DataBase is connected......`);
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));
app.use("/driver", driverRoute);
app.use("/user", userRouter);
//router
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Sever on Port-->${PORT}`);
});
