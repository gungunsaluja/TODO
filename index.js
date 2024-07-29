//instance create kiya
const express = require("express");
const app = express();// value return karta hai

// console.dir(app);
// app.listen(3000,()=>{
//     console.log(`App is running successfully ${3000}`);
// })
//load config from enf file
// is line se jo b config aapne env file me rkhi hai vo load hojayegi
require("dotenv").config();
// dotenv library ka use karke process object me jo b configurations .env file me h usko load krva liya

const PORT = process.env.PORT || 4000;
//middleware to parse json request body
app.use(express.json());
//import routes for TODO api
const todoRoutes = require("./routes/todos");

//mount the todo api routes
// server ko map kar diya todoRoutes ke sath /api/v1 mounting ka use karke
app.use("/api/v1",todoRoutes);
//start server 

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connection to he databse
const dbconnect = require("./config/database");
dbconnect();


//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is HomePage Babee</h1>`);
})

