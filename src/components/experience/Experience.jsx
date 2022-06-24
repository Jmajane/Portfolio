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
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Bulma</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>PostgresSQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFlagCheckered className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience