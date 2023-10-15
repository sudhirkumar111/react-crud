import { NavLink } from "react-router-dom"

const Navbar=()=>{
return(
    <div className="nav-div container-l  mt-2 py-2">
        <div className="row">
        <div className="col">

            <NavLink to='' className={({isActive})=> isActive ? "active-nav" : "non-active"}>Home</NavLink>
            <NavLink to='about-us' className={({isActive})=> isActive ? "active-nav" : "non-active"} >About us</NavLink>
            <NavLink to='contact' className={({isActive})=> isActive ? "active-nav" : "non-active"} >Contact</NavLink>
            <NavLink to='signup' className={({isActive})=> isActive ? "active-nav" : "non-active"} >Signup</NavLink>
            <NavLink to='login' className={({isActive})=> isActive ? "active-nav" : "non-active"} >Login</NavLink>

            </div></div>
</div>
)



}



export default Navbar