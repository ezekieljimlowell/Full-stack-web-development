import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = '';

app.use(bodyParser.urlencoded({ extended: true }))

const setBandName = (req, res, next) => {
  bandName = req.body['street'] + req.body['pet']
  next();
}

app.use(setBandName)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/submit', (req, res) => {
  res.send(bandName)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
