// import th model
// har path kisi controller se map hoga
// createtodo ka mtlb h todo naam ka object bnao or usko database me insert karo
// import kroo todo model ka schema from model
const todo = require('../models/todo');
//define route handler
exports.createTodo = async(req,res)=>{
    try{

        //extract title and description from request ki body
        const {title,description} = req.body;
        //create a new todo obj and insert in db
        const response = await todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created SuccessFully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
} 