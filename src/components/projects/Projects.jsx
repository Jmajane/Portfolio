import React from 'react'
import './projects.css'
import WAR from '../../assets/war.png'
import STREAMDREAM from '../../assets/streamdream.png'
import DISNEY from '../../assets/disney.png'
import NOMS from '../../assets/noms.png'

const data = [
  {
    id: 1,
    image: WAR,
    title: 'Card Game War',
    github: 'https://github.com/Jmajane/Card_Game_War',
    demo: 'https://jmajane.github.io/Card_Game_War/',
  },
  {
    id: 2,
    image: STREAMDREAM,
    title: 'StreamDream',
    github: 'https://github.com/Jmajane/streamDream',
    demo: 'https://streamdreamproject.herokuapp.com/streamDream',
  },
  {
    id: 3,
    image: DISNEY,
    title: 'Disney Characters',
    github: 'https://github.com/Jmajane/Project_3_Disney_Characters',
    demo: 'https://disneycharacter.netlify.app/',
  },
  {
    id: 4,
    image: NOMS,
    title: 'Noms Food Tracker',
    github: 'https://github.com/Jmajane/Noms',
    demo: 'https://noms-capstone.herokuapp.com/about/',
  },
]



const Projects = () => {
  return (
    <section id='projects'>
      <h5>View My Recent Projects</h5>
      <h2>Projects</h2>

      <div className='container project__container'>

        {
          data.map(({id, image, title, github, demo}) =>{
            return (
            <article key={id} className='project__item'>
          <div className='project__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='project__item-cta'>
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Projects