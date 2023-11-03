import { Link, NavLink } from "react-router-dom";
import DefoultUser from "../../assets/img/user.png";
import logo from "../../../src/assets/img/dark_logo.png";
import { useContext } from "react";
import { authContext } from "../../UseContext/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
    const {user,logOut}= useContext(authContext);
    // console.log(user)
    const naveLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/Services'}>Services</NavLink></li>
        <li><NavLink to={'/About'}>About Us</NavLink></li>
        <li><NavLink to={'/Contact'}>Contact</NavLink></li>
    </>
    const hendalSingOut =()=>{
        logOut()
        toast("successfully Sign Out!")
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {naveLink}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">{logo}</a> */}
                <img className="w-12 md:w-72" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {naveLink}
                </ul>
            </div>
            <div className="navbar-end">
            <h1 className="hidden md:visible uppercase font-bold ">{user?.displayName || user?.email}</h1>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL || DefoultUser} />
                        
                    </div>
                    
                </label>
                
                {
                    user ? <button onClick={hendalSingOut} className="btn btn-sm bg-red-500 text-white hover:text-black">Log Out</button> 
                    :<Link to='/LogIn'><button className="btn btn-sm">Log IN</button></Link>
                }
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;