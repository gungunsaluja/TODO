// import th model
const Todo = require("../models/todo");


exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Todo deleted",
        })



    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });

    }
}
// blogging app = define routes for creating retriving posts
// liking and unliking posts /likes/like and likes/unlike
// define route for creating and retrivng comments
// /comments/create and /comments
// 

