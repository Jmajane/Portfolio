import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sx1ih13', 'template_nfoxl1d', form.current, 'yJzYWgItsc3HpDdK_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Jordan.Majane@Outlook.com</h5>
            <a href="mailto:Jordan.Majane@Outlook.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jordan Majane</h5>
            <a href="https://m.me/jordan.majane/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>in/jordan-majane/</h5>
            <a href="https://www.linkedin.com/in/jordan-majane/" target="_blank" rel="noreferrer">Connect with me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact