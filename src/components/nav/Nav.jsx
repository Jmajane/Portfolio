import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageAltEdit} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#services"><RiServiceFill /></a>
      <a href="#contact"><BiMessageAltEdit /></a>
    </nav>
  )
}

export default Nav