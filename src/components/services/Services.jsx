import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What can I accomplish for you?</h5>
      <h2>Services Provided</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h2>UI/UX Design</h2>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Portfolio Pages</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Company Pages</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Artist Pages</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Food Pages</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h2>Web Development</h2>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Full Stack Development</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Servers with Express.js</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Django Migrations</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h2>Content Creation</h2>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Blog</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Food Tracking App</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Games</p>
            </li>
            <li>
              <BiCheck className='serivce__list-icon' />
              <p>Portfolio</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services