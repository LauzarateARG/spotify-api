const express = require("express");
const product = require("./api/products");
const app = express();

const PORT = process.env.PORT || 5050;

app.use("/api/product", product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
