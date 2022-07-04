import React from 'react'
import './header.css'
import '../../index.css'
import CTA from './CTA' 
import HeaderSocial from './HeaderSocials'
import HeaderMail from './HeaderMail'
// import ME from '../../assets/rk12.png'
import MEE from '../../assets/bg.png'
// import MEEE from '../../assets/bg.png'
const Header = () => {
  return (
    <header>
      <div className = "container header__container">
        <h2><b>Hello I'm</b></h2>
        <h1><b>Rohan Khandelwal</b></h1>
        <h3 className="text-light">Frontend Web Developer</h3><br></br><br></br>
        <CTA />
        <HeaderSocial />
        <HeaderMail />
         {/* <div className="me"> */}
           {/* <img src={ME} alt="me" />  */}
           {/* <img src={MEEE} className="posl" alt="me" /> */}
        <div className="pos">
           <img src={MEE} alt="me" size="500px" />
           </div>
        <a href="#contact" className="scroll__down"> </a>
        </div>  
      {/* </div> */}
    </header> )
}

export default Header