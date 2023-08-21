import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },

});
const TodoData = mongoose.model("todolist", todoSchema);
export default TodoData;