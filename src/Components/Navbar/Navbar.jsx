import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/*sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Abhijith R</motion.span>
        <div className="social">
            <a href="https://www.facebook.com"><img src="/facebook.png" alt="" /></a>
            <a href="https://www.instagram.com"><img src="/instagram.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/abhijithr13/"><img src="/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
