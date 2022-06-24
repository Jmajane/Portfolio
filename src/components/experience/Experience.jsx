import React from 'react'
import './experience.css'
import {FaFlagCheckered} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <FaFlagCheckered />
              <h4>Bulma</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">

        </div>
      </div>
    </section>
  )
}

export default Experience