const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("เว็บทำงานแล้ว 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
