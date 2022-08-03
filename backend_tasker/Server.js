const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require("./routes/route");
const cors = require("cors");
app.use(express.static('public'));
app.use(cors());
const fs = require('fs')
fs.existsSync("uploads") || fs.mkdirSync("uploads");
app.use("/", routes);
const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
