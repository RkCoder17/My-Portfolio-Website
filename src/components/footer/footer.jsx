import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#c" className="footer__logo">ROHAN</a>

      <ul className='permalinks'>
        <li><a href="#s">Home</a></li>
        <li><a href="#contact">About</a></li>
        <li><a href="#contact">Experience</a></li>
          <li><a href="#s">Projects</a></li>
        <li><a href="#s">Contact</a></li>
        <li><a href="#s">Resume</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div> */}
      
      <div className="footer__copyrights">
        <small> Designed By Rohan Khandelwal</small>
      </div>

    </footer>
  )
}

export default footer

//&copy; for copyright symbol