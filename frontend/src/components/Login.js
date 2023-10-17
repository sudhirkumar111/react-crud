import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm();

  const onSubmit =async (data)=>{
      const res = await axios.post('/login',data);
      console.log(res,"=============res")
      if(res.status ===200){
        navigate("/dashboard")
      }}




  
    return(
        <>
        {/* <h1 className='display-6 text-center text-danger mx-auto  mt-3 pb-2 bg-dark w-75'>Welcome to Task Management System</h1> */}
        {/* <img className='text-center' src='https://cdn.pixabay.com/photo/2019/01/15/11/09/time-3933842_1280.jpg' width="800px" height="300px"></img> */}
            <div id="login-form" className='bg-dark mx-auto pt-2 pb-3 mt-5'>
            <p className='text-center display-6 text-light'>Login Here</p>
            <form id='signup-form' onSubmit={handleSubmit(onSubmit)} className='mx-1 px-4 '>         
          <div className="form-group">
            <input type="email" {...register('email',{required:"Email is required"})} className="form-control"  placeholder='Email' />
          </div>
          <div className="form-group mt-2">
            <input type="password"  {...register('password',{required:"Password is required"})} className="form-control"  placeholder='Password' />
          </div>
          
          <button type="submit"  className="btn btn-success mt-2">Login</button>
       



            </form>


                
            </div>

        </>
    )

}


export default Login