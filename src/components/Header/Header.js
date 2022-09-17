import React from 'react';
import logo from '../../images/logo.png';
import mobilelogo from '../../images/logo-mobile.png'
import {NavLink } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../App';

const Header = () => {

      const [user, setUser] = useContext(userContext)
      let activeStyle = {
            color: "red",
          };
      return (
            <div className=' bg-sky-900  w-full top-0 fixed'> 
                  <nav className="">
                        <div className="container mx-auto py-5 flex justify-around">
                        <div className="">
                              <img src={logo} className="my-auto hidden md:block" alt="pawa"  />
                              <img src={mobilelogo} alt="" className="md:hidden"/>
                        </div>
                        <div className=" flex items-center gap-5 text-white font-semibold text-lg uppercase ">
                              
                              <NavLink to="/" className="hover:text-red-600 "  style={({ isActive }) =>isActive ? activeStyle : undefined}>shop</NavLink>
                              <NavLink to="/review" className="hover:text-red-600" style={({ isActive})=>isActive ?activeStyle :undefined}>Review</NavLink>
                              <NavLink to="/manage" className="hover:text-red-600 " style={({ isActive})=>isActive ?activeStyle :undefined} >Manage</NavLink>
                              {user.email && <button onClick={()=>setUser({})} className="bg-red-600 text-sm py-0.5 shadow-md px-2 rounded-sm" >Logout</button>}
                              {user.email && <p className=' text-sm'>Welcome.  {user.name}</p>}
                        
                        </div>
                        </div>
                  </nav>
                                        
                 {/* <h1 className="bg-red-600 sm:w-24 md:w-48">Shukumar </h1>       */}
            </div>
            
      );
};

export default Header;