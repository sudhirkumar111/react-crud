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
    console.log(req.body,'ererferferferferferferferf')
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
    console.log(user,"===========user")
    let checkPassword;
    if(user)
    checkPassword = await bcrypt.compare(password,user.password);
    if(user && checkPassword){ 
        res.redirect('/home')
           }
    else{
        res.render('index',{'user':1 ,"register":1,"userNotFound":1})
    }
 
       });


app.get('/home',async (req,res)=>{
    try{
        const studentData = await Student.find();
        console.log(studentData,"QQQQQQQQQQQQ")
        res.render('home',{"data":studentData})
    }
    catch(error){
        console.log(error)
    }
});


app.post('/home',async (req,res)=>{
    try
    {
    const {fullName,course,email} = req.body
    const student = new Student({fullName:fullName,course:course,email:email});
    await student.save()
    res.redirect('/home')
    }
    catch(error){
        console.log(error)  
    }    
});

app.get('/delete/:id',async (req,res)=>{
    const id=req.params.id;
    await Student.findByIdAndDelete(id);
    res.redirect('/home')
})


app.get('/edit/:id',async (req,res)=>{
    const id=req.params.id;
    const std=await Student.findById({_id:id});
    res.render('edit',{"std":std})
})

app.post('/edit/:id',async (req,res)=>{
        await Student.findByIdAndUpdate({_id:req.params.id},req.body)
        res.redirect('/home')
})

app.listen(4000,(err)=>{
    if(err)
    console.log(err)

    console.log("server running successfully")


})