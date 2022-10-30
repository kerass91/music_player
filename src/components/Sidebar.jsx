import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import {
  Box,Typography,Paper,Alert,Button,TextField,Snackbar} from "@mui/material";

  import { singup, useAuth, logout, login, authen, singinGoggle, } from "../components/firebase";


const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((link)=>(
      <NavLink 
      key={link.name}
      to={link.to}
      className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-300'
      onClick={() => handleClick && handleClick()}>
        <link.icon className="w-6 h-6 mr-2"/>
        {link.name}
      </NavLink>
      
    ) )}
  </div>
);


const Sidebar = ({currentUserName, currentUserEmail, currentUserAvatar}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebar = document.getElementById('open')




document.onclick = (e) => {
  if (e.target.id === !sidebar || e.target.tagName !== 'path') {
    setMobileMenuOpen(false)
  }
}


  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#111111]">
            <img src={logo} alt='logo' className="w-full h-14 object-contain"/>
            <NavLinks/>
            <div className="flex flex-col mt-[150px] items-center">
            <div className=" flex h-[100px] mb-2 rounded-[100px] items-center bor">
            <img alt="avatar" src={currentUserAvatar} 
            className='rounded-[100%]'
      />
            </div>
            <p
            className='items-center text-sm font-medium text-gray-600 hover:text-cyan-600'
            >{currentUserName}</p>
            <p
            className='items-center text-sm font-medium text-gray-600 hover:text-cyan-600'
            >{currentUserEmail}</p>
            <Button variant="outlined"
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          mt: 2,
          maxWidth: 150,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
          onClick={logout}
         >- Log Out -</Button>          
            </div>
    </div>


    <div className="absolute md:hidden block w-[60px] h-[60px] top-[20px] right-3 ">
      {mobileMenuOpen ? (
        <RiCloseLine className="w-8 h-8 text-white mr-2"
        onClick={() => setMobileMenuOpen(false)}
        />
      ): <HiOutlineMenu className="w-8 h-8 text-white mr-2"
      id="open"
      onClick={() => setMobileMenuOpen(true)}
      />}

    </div>
    <div className={`absolute top-[5px] h-screen w-[45%] bg-gradient-to-tl from-white/10 to-[#111111] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen? 'left-0': '-left-full'}`}>
            <img src={logo} alt='logo' className="mt-[35px] w-full h-14 object-contain"/>
            <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
            <div className="flex flex-col mt-[150px] items-center">
            <div className=" flex h-[100px] mb-2 rounded-[100px]">
            <img alt="avatar" src={currentUserAvatar} 
            className='rounded-[100%]'
      />
            </div>
            <p
            className='items-center text-sm font-medium text-gray-400 hover:text-cyan-600'
            >{currentUserName}</p>
            <p
            className='items-center text-sm font-medium text-gray-400 hover:text-cyan-600'
            >{currentUserEmail}</p>
            <Button variant="outlined"
          sx={{
          boxShadow: 1,
          borderRadius: 2,
          mt: 2,
          p: 0,
          maxWidth: 150,
          color: '#06b5d4c9',
          border: '1px solid #2B303E',
          }}
          onClick={logout}
         >- Log Out -</Button>
            </div>
    </div>

    </>
  )
}

export default Sidebar;
