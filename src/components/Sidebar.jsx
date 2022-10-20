import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

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


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const sidebar = document.getElementById('open')


document.onclick = (e) => {
/*   console.log(e.target.id)
  console.log(e.target.tagName) */
  if (e.target.id === !sidebar || e.target.tagName !== 'path') {
    setMobileMenuOpen(false)
  }
}


  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#111111]">
            <img src={logo} alt='logo' className="w-full h-14 object-contain"/>
            <NavLinks/>
            <button className="mt-[100px] text-cyan-50">
            Registration
            </button>
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
            <button className="mt-[100px] text-cyan-50">
            Registration
            </button>
    </div>
    
    </>
  )
}

export default Sidebar;
