import express from "express";
 
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
  res.send("home");
});

app.get("/about", (req,res)=>{
  res.send("about page");
});

app.get("/contact", (req, res)=>{
  res.send("contact me");
});


app.listen(port, ()=> {
  console.log(`server being hosted on ${port}`);
});