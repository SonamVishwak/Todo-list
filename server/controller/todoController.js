import { request, response } from "express";
import TodoData from "../model/todomodel.js";
export const addTodo= async(req, response)=>{
    // return res;
   
   try {
    const  text = req.body; 
    const newuser = new TodoData(text);
    await newuser.save();
    response.status(200).json({ message: newuser });

   } catch (error) {
    response.status(500).json({message:error})
   };

};

export const getTodos = async(req, response)=>{
    try {
        const todo = await TodoData.find({});
        response.status(200).json(todo);
    } catch (error) {
    response.status(404).json({message: error.message}); 
    }
}
export const deleteTodo = async(request, response)=>{
    try {
       const todo = await TodoData.deleteOne({_id:request.params.id});
       response.status(200).json(todo)
    } catch (error) {
      response.status(404).json({message: error.message})  
    }
}

export const getTodo = async(request, response)=>{
    // console.log(request.params.id)
    try {
       const todo = await TodoData.find({_id:request.params.id}); 
       response.status(200).json(todo);
    } catch (error) {
    console.log(error)    
    }
}

export const updateTodo = async(request, response)=>{
    try {
        const requestbody = {todo: request.body.todo};
     const todo = await TodoData.findByIdAndUpdate(request.params.id, requestbody,{new:true});  
     response.status(200).json(todo)
    } catch (error) {
        response.status(409).json({message:error.message});
       console.log(error); 
    }
}