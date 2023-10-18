import express from 'express'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import Task from './models/Task.js'
import User from './models/User.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task")
    console.log("connection completed")
}
catch (error) {
    console.log(" error occured in data base connection")
}

const SECRET_KEY = 'yuy76w7rwueruywe7rw8e7r78weruwe87we6f78wefy7g'
const app = express()
app.use(express.json());

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.findOne({ email: email });
    if (user) {
        res.send({ message: "User already Registered", success: false })
    }
    else {
        await User({ firstName: firstName, lastName: lastName, email: email, password: hashedPassword }).save();
        res.send({ message: "User registered successfully", success: true })
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    let checkPassword = false;
    if (user) {
        checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
            const token = await jwt.sign({ firstName: user.firstName, lastName: user.lastName, id: user._id }, SECRET_KEY)

            res.send({ token, user, message: "Login Successfully", success: true })
        }
        else {
            res.send({ message: "Wrong Credentials", success: false })


        }

    } else {
        res.send({ message: "User not available", })
    }


});


app.get('/all-task', async (req, res) => {
    try {
        const task = await Task.find({ userId: req.query.userId });
        res.send(task)
    }
    catch (error) {
        console.log(error)
    }
});


app.post('/create', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save()
        res.send({ message: "Task Added Successfully", success: true })
    }
    catch (error) {
        res.send({ message: "something went wrong", success: false })
        console.log(error)
    }
});

app.delete('/delete-task/:id', async (req, res) => {
    const id = req.params.id
    const data = await Task.findByIdAndDelete(id);
    if (data._id)
        res.send({ message: "Task deleted successfully", success: true })
    else
        res.send({ message: "Something went wrong", success: false })
})


app.patch('/edit-task', async (req, res) => {
    const { id, data } = req.body;
    try {
        const response = await Task.findByIdAndUpdate({ _id: id }, data)
        res.send({ message: "Task Updated Successfully", success: true })

    }
    catch (error) {
        res.send({ message: error, status: false })
    }

})

app.post('/edit-task', async (req, res) => {
    await Student.findByIdAndUpdate({ _id: req.params.id }, req.body)
    res.redirect('/home')
})

app.listen(4000, (err) => {
    if (err)
        console.log(err)

    console.log("server running successfully")


})