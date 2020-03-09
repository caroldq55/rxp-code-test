require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoute = require("./routers/product").productRoute;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/product", productRoute);

app.listen(process.env.PORT, err => {
  if (err) {
    console.error(chalk.red("Error! ", err));
  } else {
    console.log(`App Listening on port ${process.env.PORT}`);
  }
});
