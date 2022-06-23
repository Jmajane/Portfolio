import React from 'react'
import './about.css'
import USMC from '../../assets/usmc.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={USMC} alt="Marine Corps Picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Languages</h5>
              <small>12+ Coding Languages</small>
            </article>
            
            <article className='about__card'>
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>6 Completed Projects</small>
            </article>

          </div>
          <p>
            A Marine Corps Veteran turned into a Software Developer. Someone who
            enjoys puzzles and troubleshooting almost as much as gaming. Always 
            excited to learn to add to my toolbox of knowledge. Sometimes you
            need someone in your corner who wont back down. 
          </p>
          <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About