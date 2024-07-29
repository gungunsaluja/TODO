//mongoose ka instance

const mongoose = require("mongoose");

require("dotenv").config();

//connection vala kaam dbconnect krega btw nodejs and mongodb


const dbconnect = () => {
    // jo b data env file me rkha h usko feed karna h 
    // process object ke andr tw hm .env ka use karke krenge
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("DB ka connect succ"))
    .catch((error)=>{
        console.log("issue hai");
        console.log(error.message);
        // iska matlab
        
        process.exit(1);
    });
    // databse url bhr pdha tw feed krna pdega process vale code m feed krnee ke liyee .env library ka use krke  
}

module.exports = dbconnect;
//database.js file ka kaam h connection ensure karna btw application and db

