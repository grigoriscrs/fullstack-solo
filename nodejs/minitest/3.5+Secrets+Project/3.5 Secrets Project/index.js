import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "math";
var authorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPass(req, res, next) {
  if(req.body["password"] == password){
    authorised = true;
  }
  next();
}

app.use(checkPass);

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
  if(authorised){
    res.sendFile(__dirname + "/public/secret.html");
  }else {
    res.redirect("/");
  }
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});