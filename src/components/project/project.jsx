import React from 'react'
import './project.css'
import IMG1 from '../../assets/11.jpg'
import IMG2 from '../../assets/11.jpg'
import IMG3 from '../../assets/11.jpg'
const project = () => {
  return (
   <section id="portfolio">
   <h5>My Recent Work</h5>
   <h2>PortFolio</h2>

   <div className='container portfolio__container'>
     <article className='portfolio__item'>
       <div className='portfolio__item-image'>
         <img src={IMG1} alt="" /> 
       </div>
       <h3>Title</h3>
       <a href="https://github.com" className="btn" rel="noreferrer" target='_blank'>Github</a>
       <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
     </article>

     <article className='portfolio__item'>
       <div className='portfolio__item-image'>
         <img src={IMG2} alt="" /> 
       </div>
       <h3>Title</h3>
       <a href="https://github.com" className="btn" rel="noreferrer" target='_blank'>Github</a>
       <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
     </article>
     
     <article className='portfolio__item'>
       <div className='portfolio__item-image'>
         <img src={IMG3} alt="" /> 
       </div>
       <h3>Title</h3>
       <a href="https://github.com" className="btn" rel="noreferrer" target='_blank'>Github</a>
       <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
     </article>
   </div>
 </section>
  )
}

export default project
