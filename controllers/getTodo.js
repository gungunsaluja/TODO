// import the model
// mongoose library bhoot sare functions provide karti h
// jese create find by id and delete 

const Todo = require("../models/todo");
// define route handler
exports.getTodo = async(req,res)=>{
    try{
        // fetch all todo items from database
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success:true,
            data:todos,
            // data ke andr sare todos item daal doo
            message:"Entire todo data is fetched",
        })
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })

    }
}

exports.getTodoById = async(req,res)=>{
    try{

        // extract todo items basis on id
        // ye h id fetch krne ki ninja technique
        const id = req.params.id;
        const todo = await Todo.findById({
            _id:id
        })
        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }
        // data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })


    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server Error",

        });

    }
}