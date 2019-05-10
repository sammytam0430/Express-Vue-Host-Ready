const express = require("express");
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(require('connect-history-api-fallback')());
app.use("/api", api);
app.use("")

app.listen(process.env.PORT || 5000);
