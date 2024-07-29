//instance create kiya
const express = require("express");
const app = express();// value return karta hai

// console.dir(app);
// app.listen(3000,()=>{
//     console.log(`App is running successfully ${3000}`);
// })
//load config from enf file
require("dotenv").config();

const PORT = process.env.PORT || 4000;
//middleware to parse json request body
app.use(express.json());
//import routes for TODO api
const todoRoutes = require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);
//start server 
app.listen(PORT,()=>{
    consolelog(`Server started successfully at ${PORT}`);
})

//connection tot he databse
const dbconnect = require("./config/database");
dbconnect();
//default route
// app.get("/",(req,res)=>{
//     res.send(`<h1> This is HomePage Babee</h1>`);
// })