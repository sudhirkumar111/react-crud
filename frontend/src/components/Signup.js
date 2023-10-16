import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify';
import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';

const Signup=()=>{
  const {register, handleSubmit,reset}=useForm();
  const onSubmit= async (data)=>{
    if(data.password !== data.confirm_password){
      toast.error("Password and confirm password should be same")
    }
    else{
      const res = await axios.post('/register',data);
      if(res.status === 200 && res.data.success === true) {
           toast.success(res.data.message)
           reset({firstName:'',lastName:'',email:'',password:'',confirm_password:''})

      }
      else
      toast.warning(res.data.message)
    }
  }
    return(
        <>
        <ToastContainer/>
      
          <div id="tms" className='bg-dark mx-auto pt-2 mt-3'>
            <p className='text-center display-6 pb-0 text-light mx-auto'>Register Here</p>
            <form id='signup-form' onSubmit={handleSubmit(onSubmit)} className='px-3'>         
          <div className="form-group">
            <input {...register('firstName')} placeholder='First Name' className="form-control mt-2"></input>
          </div>
          <div className="form-group">
          <input {...register('lastName')} placeholder='Last Name' className="form-control mt-2"></input>

          </div>
          <div className="form-group">
            <input type="email" {...register('email')} placeholder='email' className="form-control mt-2"></input>
          </div>
          <div className="form-group">
            <input type="password" {...register('password',{required:"Password is required"})} className="form-control mt-2" placeholder='Password'></input>
          </div>
          <div className="form-group">
            <input type="password" {...register('confirm_password' ,{required:"Confirm Password is required"})} className="form-control mt-2" placeholder='Confirm Password'></input>
          </div>
          <button type="submit"  className="btn btn-success my-2 ">Signup</button>    
            </form>                
            </div>

        </>
    )

}


export default Signup