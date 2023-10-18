import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post('/login', data);
    console.log(res.data)
    if (res.data.success === true) {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem('firstName', res.data.user.firstName)
      localStorage.setItem('lastName', res.data.user.lastName)
      localStorage.setItem('userId', res.data.user._id)
      toast.success("Login Successfull")
      navigate('/dashboard')

    } else {
      toast.error(res.data.message)
    }
  }

  return (
    <>
      <ToastContainer
        hideProgressBar
        autoClose={1000}
      />
      <div id="login-form" className='bg-dark mx-auto pt-2 pb-3 mt-5'>
        <p className='text-center display-6 text-light'>Login Here</p>

        <form id='signup-form' onSubmit={handleSubmit(onSubmit)} className='mx-1 px-4 '>
          <div className="form-group">
            <input type="email" {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              }
            })} placeholder='email' className="form-control mt-2"></input>
            {errors.email && <small className='errors'>{errors.email.message}</small>}
          </div>
          
          <div className="form-group mt-2">
            <input type="password"  {...register('password', {
              required: "Password is required", minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              }
            })} className="form-control" placeholder='Password' />
            {errors.password && <p className='errors'>{errors.password.message}</p>}
          </div>

          <button type="submit" style={{ "border-radius": "20px" }} className="btn btn-success px-4 py-1 mt-2">Login</button>
        </form>
      </div>

    </>
  )

}


export default Login