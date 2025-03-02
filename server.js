const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const port = process.env.PORT || 8080;
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json()).use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
