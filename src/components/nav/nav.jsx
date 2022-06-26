import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    <a href="# " className ={ activeNav === '#' ? 'active' : ' ' }><AiOutlineHome/></a>
    <a href="#about " onClick={() =>  setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineUser/>
    </a>
    <a href="#experience " onClick={() =>  setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}><BiBook/></a>
    <a href="#contact" onClick={() =>  setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><BiMessageSquareDetail/></a>
    <a href="#services " onClick={() =>  setActiveNav('#')} className={activeNav === '#about' ? 'active' : ' '}><RiServiceLine/></a>
    </nav>
  )
}

export default Nav
