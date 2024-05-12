const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//データを受信
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "test" && password === "pass") {
    console.log("ログインに成功！！");
    loginStatus = true;
    res.json({ loginStatus: true }); // ログインステータスを JSON 形式で返す
  } else {
    res.status(401).json({ loginStatus: false }); // ログインステータスを JSON 形式で返す
  }
});

// app.get("/api/data", (req, res) => {
//   res.json({ message: loginStatus });
// });

app.listen(8000, () => console.log("listening on port 8000!"));
