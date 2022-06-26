import React from 'react'
import RESUME from '../../assets/Resume.pdf'
import './header.css'
const CTA = () => {
  return (
    <div className='cta'>
      <a href ={RESUME} download className='btn '>Resume</a>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div> 
  )
  }
export default CTA
 