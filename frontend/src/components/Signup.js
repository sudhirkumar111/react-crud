import React from 'react'

const Signup=()=>{
    return(
        <>
        {/* <h1 className='display-6 text-center text-danger mx-auto  mt-3 pb-2 bg-dark w-75'>Welcome to Task Management System</h1> */}
        {/* <img className='text-center' src='https://cdn.pixabay.com/photo/2019/01/15/11/09/time-3933842_1280.jpg' width="800px" height="300px"></img> */}
            <div id="tms" className='bg-light w-50  mx-auto pt-2 mt-3'>
            <p className='text-center text-success mx-auto'>Register Here</p>
            <form id='signup-form' className='mx-5 px-3 w-80'>         
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name'required />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder='Email' required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder='Password' required />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password' name="confirmPassword" required />
          </div>
          <button type="submit"  className="btn btn-success mt-2">Signup</button>
       



            </form>


                
            </div>

        </>
    )

}


export default Signup