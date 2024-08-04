
// Phía server (giả sử dùng Node.js và Express)
//const fetch = require("node-fetch");
const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

const port = 3001;
const secretKey = "P8RIXgwHs3Gh7M9j8J4S";  // Đảm bảo rằng bạn đã thay thế bằng secret key của bạn
app.use(express.json());

app.post("/decodeToken", async function (req, res) {
  const { token, accessToken } = req.body;
  const response = await fetch("https://graph.zalo.me/v2.0/me/info", {
    headers: {
      access_token: accessToken,
      code: token,
      secret_key: secretKey,
    },
  });
  const { data } = await response.json();
  res.send(data);
  console.log(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
