import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">ROHAN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Resume</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      
      <div className="footer__copyrights">
        <small>&copy; Rohan Khandelwal</small>
      </div>

    </footer>
  )
}

export default footer

