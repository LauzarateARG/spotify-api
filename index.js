const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const gets = require("./api/get");
const posts = require("./api/post");

const app = express();
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5050;

app.use("/api/get", gets);
app.use("/api/post",posts)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
