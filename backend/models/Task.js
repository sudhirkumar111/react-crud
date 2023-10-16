import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
    {
        description:{type:String, required:true},
        priority:{type:String, required:true},
       
    }
);

const Task = mongoose.model('Task',TaskSchema)

export default Task