import React from 'react'
import './projects.css'
import WAR from '../../assets/war.png'
import STREAMDREAM from '../../assets/streamdream.png'
import DISNEY from '../../assets/disney.png'
import NOMS from '../../assets/noms.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>View My Recent Projects</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={WAR} alt="Card Game War" />
          </div>
          <h3>Card Game War</h3>
          <a href="https://github.com/Jmajane/Card_Game_War" className='btn' target='_blank'>GitHub</a>
          <a href="https://jmajane.github.io/Card_Game_War/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={STREAMDREAM} alt="StreamDream" />
          </div>
          <h3>StreamDream</h3>
          <a href="https://github.com/Jmajane/streamDream" className='btn' target='_blank'>GitHub</a>
          <a href="https://streamdreamproject.herokuapp.com/streamDream" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DISNEY} alt="Disney Characters" />
          </div>
          <h3>Disney Characters</h3>
          <a href="https://github.com/Jmajane/Project_3_Disney_Characters" className='btn' target='_blank'>GitHub</a>
          <a href="https://disneycharacter.netlify.app/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={NOMS} alt="Noms" />
          </div>
          <h3>Noms</h3>
          <a href="https://github.com/Jmajane/Noms" className='btn' target='_blank'>GitHub</a>
          <a href="https://noms-capstone.herokuapp.com/about/" className='btn btn-primary' target='_blank'>LiveDemo</a>
        </article>

      </div>
    </section>
  )
}

export default Projects