const express = require('express');
const path=require("path");
const port= process.env.PORT || 5000

const app= express()

app.use(express.static(path.resolve("./client/build/"))) //Serves from the build folder

app.get("*", (req, res)=>{
  res.sendFile("index.html")
} )

app.listen(port)

