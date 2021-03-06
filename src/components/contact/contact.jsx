import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_26hdenw', 'template_b9kw7v8', form.current, '-veW8fUyT8VjdVDOl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });                                                                                                       
  }; 
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>Rohankhandelwal@gmail.com</h5>
          <a href="mailto:rohankhandelwal2001@gmail.com">Send a Message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
         <h5>+91 9462842148</h5>
          <a href="wa.me+919462842148">Send a Message</a>
        </article> 
        </div>
        <form ref={form} on onSubmit={sendEmail} method="post">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  )
}
export default Contact
