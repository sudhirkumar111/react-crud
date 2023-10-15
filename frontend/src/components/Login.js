import React from 'react'

const Login=()=>{
    return(
        <>
        {/* <h1 className='display-6 text-center text-danger mx-auto  mt-3 pb-2 bg-dark w-75'>Welcome to Task Management System</h1> */}
        {/* <img className='text-center' src='https://cdn.pixabay.com/photo/2019/01/15/11/09/time-3933842_1280.jpg' width="800px" height="300px"></img> */}
            <div id="login-form" className='bg-dark mx-auto pt-2 pb-3 mt-5'>
            <p className='text-center display-6 text-light'>Login Here</p>
            <form id='signup-form' className='mx-1 px-4 '>         
          <div className="form-group">
            {/* <label for="email">Email</label> */}
            <input type="email" className="form-control" id="email" name="email" placeholder='Email' required />
          </div>
          <div className="form-group mt-2">
            {/* <label for="password">Password</label> */}
            <input type="password" className="form-control" id="password" name="password" placeholder='Password' required />
          </div>
          
          <button type="submit"  className="btn btn-success mt-2">Login</button>
       



            </form>


                
            </div>

        </>
    )

}


export default Login