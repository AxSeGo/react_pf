import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin} from "react-icons/fa"
import { FaGithub} from "react-icons/fa"
import { FaBiohazard} from "react-icons/fa"
import { FaInstagram} from "react-icons/fa"


const Navbar = () => {
    return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt='logo'/>
    </div>
    <div className="m-8 flex items-center justifiy-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaBiohazard />
      <FaInstagram />
    </div>
    </nav>
    );

};

export default Navbar
