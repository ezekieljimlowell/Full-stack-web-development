import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log('Request method:' + req.method);
  console.log('Request URL:' + req.url);

}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
