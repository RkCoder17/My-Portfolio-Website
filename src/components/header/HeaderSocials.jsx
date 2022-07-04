import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href= "https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
     <a href= "https://instagram.com" rel="noreferrer" target="_blank"><FiInstagram/></a>
      <a href= "https://linkedin.com" rel="noreferrer" target="_blank"><IoLogoTwitter/></a>
      <a href= "https://github.com"  target="_blank" rel="noreferrer"><BsGithub/></a>

{/*       
      <a href=""></a>
        <a href=></a> */}

    </div>

    
  )
}

export default HeaderSocials
