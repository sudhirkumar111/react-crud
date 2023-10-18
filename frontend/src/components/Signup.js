import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    if (data.password !== data.confirm_password) {
      toast.error("Password and confirm password should be same")
    }
    else {
      const res = await axios.post('/register', data);
      if (res.status === 200 && res.data.success === true) {
        toast.success(res.data.message)
        reset({ firstName: '', lastName: '', email: '', password: '', confirm_password: '' })
        navigate('/login')
      }
      else
        toast.warning(res.data.message)
    }
  }
  return (
    <>
      <ToastContainer />

      <div id="tms" className='bg-dark mx-auto pt-2 mt-3'>
        <p className='text-center display-6 pb-0 text-light mx-auto'>Register Here</p>
        <form id='signup-form' onSubmit={handleSubmit(onSubmit)} className='px-3'>
          <div className="form-group">
            <input {...register('firstName', { required: "First Name is required", minLength: { value: 3, message: "Length should be 3 or more" } })} placeholder='First Name' className="form-control mt-2"></input>
            {errors.firstName && <small className='errors'>{errors.firstName.message}</small>}
          </div>

          <div className="form-group">
            <input {...register('lastName', { required: "Last Name is required", minLength: { value: 3, message: "Length should be 3 or more" } })} placeholder='Last Name' className="form-control mt-2"></input>
            {errors.lastName && <small className='errors'>{errors.lastName.message}</small>}
          </div>

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

          <div className="form-group">
            <input type="password" {...register('password', {
              required: "Password is required",
              minLength: {
                value: 6,
                message: 'Length of password should be atleast 6 characters'
              }
            })} className="form-control mt-2" placeholder='Password'></input>
            {errors.password && <small className='errors'>{errors.password.message}</small>}
          </div>

          <div className="form-group">
            <input type="password" {...register('confirm_password', {
              required: "Confirm Password is required", minLength: {
                value: 6,
                message: 'Length of password should be atleast 6 characters'
              }
            })} className="form-control mt-2" placeholder='Confirm Password'></input>
            {errors.confirm_password && <small className='errors'>{errors.confirm_password.message}</small>}


          </div>
          <button className="btn btn-success " id="signupbtn" type="submit" >Signup</button>
        </form>
      </div>

    </>
  )

}


export default Signup