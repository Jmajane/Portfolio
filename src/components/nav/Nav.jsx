import React, { useState } from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {ImBooks} from 'react-icons/im'
import {BiTaxi} from 'react-icons/bi'
import {BiMessageAltEdit} from 'react-icons/bi'
import {GiTank} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoLogoGameControllerB /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBooks /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GiTank /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiTaxi /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltEdit /></a>
    </nav>
  )
}

export default Nav