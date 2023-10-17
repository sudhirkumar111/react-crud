import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import Task from './models/Task.js'
import User from './models/User.js'
import mongoose from 'mongoose'

try{
    await mongoose.connect("mongodb://127.0.0.1:27017/task")
    console.log("connection completed")
}
catch(error){
    console.log(" error occured in data base connection")
}

const app=express()
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.post('/register',async (req,res)=>{
    const {firstName,lastName,email,password} = req.body
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.findOne({email:email});
    console.log(user,"----------------user")
    if(user){
        res.send({message:"User already Registered",success:false})
    }
    else{
        await User({firstName:firstName, lastName:lastName,email:email,password:hashedPassword}).save();
        res.send({message:"User registered successfully",success:true})
    }
       });

app.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email});
    let checkPassword  = false;
    if(user){
        checkPassword = await bcrypt.compare(password,user.password);
    if(checkPassword){ 
        res.send({message:"Login Successfully",success:true})
           }
    else{
        res.send({message:"Wrong Credentials",success:false})

        
    }

    }else{
        res.send({message:"User not available",})
    }
    
 
       });


app.get('/all-task',async (req,res)=>{
    try{
        const task = await Task.find();
        res.send(task)
    }
    catch(error){
        console.log(error)
    }
});


app.post('/create',async (req,res)=>{
    try
    {
    const {description,priority} = req.body
    const task = new Task(req.body);
    await task.save()
    res.send({message:"Task Added Successfully",success:true})
    }
    catch(error){
        res.send({message:"something went wrong",success:false})
        console.log(error)  
    }    
});

app.delete('/delete-task/:id',async (req,res)=>{
    const id=req.params.id
    const data = await Task.findByIdAndDelete(id);
    console.log(data,"============data")
    if(data._id)
    res.send({message:"Task deleted successfully",success:true})
    else
    res.send({message:"Something went wrong",success:false})
})


app.patch('/edit-task',async (req,res)=>{
    const {id,data}=req.body;
    try{
        const response = await Task.findByIdAndUpdate({_id:id},data)
        res.send({message:"Task Updated Successfully",success:true})

    }
    catch(error){
        res.send({message:error,status:false})
    }

})

app.post('/edit-task',async (req,res)=>{
        await Student.findByIdAndUpdate({_id:req.params.id},req.body)
        res.redirect('/home')
})

app.listen(4000,(err)=>{
    if(err)
    console.log(err)

    console.log("server running successfully")


})