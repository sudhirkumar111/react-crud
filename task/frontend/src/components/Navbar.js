import { NavLink, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify'

const Navbar = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('token') ? true : false
    const logoutUser = () => {
        localStorage.clear();
        toast.success('Logout Successfully')
        navigate('/login')
    }
    return (
        <div className="nav-div container-l  mt-2 py-2">
            <ToastContainer
                hideProgressBar
                autoClose={1000}
            />
            <div className="row">
                <div className="col">

                    <NavLink to='' className={({ isActive }) => isActive ? "active-nav" : "non-active"}>Home</NavLink>
                    <NavLink to='about-us' className={({ isActive }) => isActive ? "active-nav" : "non-active"} >About us</NavLink>
                    <NavLink to='contact' className={({ isActive }) => isActive ? "active-nav" : "non-active"} >Contact</NavLink>

                    {!isLogin && <NavLink to='signup' className={({ isActive }) => isActive ? "active-nav" : "non-active"} >Signup</NavLink>}

                    {!isLogin && <NavLink to='login' className={({ isActive }) => isActive ? "active-nav" : "non-active"} >Login</NavLink>
                    }
                    {isLogin && <NavLink to='dashboard' className={({ isActive }) => isActive ? "active-nav" : "non-active"} >Dashboard</NavLink>}

                    {isLogin && <button id="logoutBtn" style={{ "width": "5rem", "float": "right", "border-radius": "20px" }} className='btn btn-sm btn-warning px-2 mb-2' onClick={logoutUser}>Logout</button>}


                </div></div>
        </div>
    )



}



export default Navbar