import React from 'react'
import './header.css'
import '../../index.css'
import CTA from './CTA' 
import HeaderSocial from './HeaderSocials'
import HeaderMail from './HeaderMail'
import ME from '../../assets/m1.jpeg'
const Header = () => {
  return (
    <header>
      <div className = "container header__container">
        <h5>Hello I'm</h5>
        <h1>Rohan Khandelwal</h1>
        <h5 className="text-light">Frontend Web                                                                                                                                                                                                                                                                                                                                                    Developer</h5><br></br>
        <CTA />
        <HeaderSocial />
        <HeaderMail />
        <div className="me">
          <img src={ME} alt="me" />
        <a href="#contact" className="scroll__down"> </a>
        </div> 
      </div>
    </header> )
}

export default Header