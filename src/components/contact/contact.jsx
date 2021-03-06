import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o7f19aa', 'template_h6ls0cn', form.current, '8R7py6o0RzV4Tm1G4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
         <div className='contact__options'>
           <article className='contact__option'>
             <MdEmail className='contact__option-icon'/>
             <h4> Email</h4>
             <h5>animeshmandal4400@gmail.com</h5>
             <a href="mailto:animeshmandal4400@gmail.com" target="_blank" >Send Message</a>
           </article>
           <article className='contact__option'>
             <FaWhatsapp className='contact__option-icon'/>
             <h4> Whatsapp</h4>
             <h5>+917699369625</h5>
             <a href="https://api.whatsapp.com/send?phone=+917699369625" target="_blank" >Send Message</a>
           </article>
         </div>

         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="email" name="email" placeholder='Your Email ' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>
         </form>


      </div>
    </section>
  )
}

export default Contact