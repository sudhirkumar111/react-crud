import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
    {
        description:{type:String, required:true},
        priority:{type:String, required:true},
        dueDate: {type:Date, required:true},
        userId:{type:mongoose.ObjectId}
       
    }
);

const Task = mongoose.model('Task',TaskSchema)

export default Task