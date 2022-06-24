import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>View My Recent Projects</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <h3>Card Game War</h3>
          <a href="https://github.com/Jmajane/Card_Game_War" className='btn' target='_blank'>GitHub</a>
          <a href="https://jmajane.github.io/Card_Game_War/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>
      </div>
    </section>
  )
}

export default Projects