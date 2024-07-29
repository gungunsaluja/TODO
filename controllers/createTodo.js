// import th model
const TOdo = require('../models/todo');
//define route handler
exports.createTodo = async(req,res)=>{
    try{

        //extract title and description ki body
        const {title,body} = req.body;
        //create a new todo obj and insert in db
        const response = await todo.create({title,description});
        //send a json response with a succes flag
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