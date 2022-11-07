import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar.webp'
import AVTR2 from '../../assets/Avtr2.jpeg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const reviews = [
  {
    avatar: AVTR2,
    name: "Lloyd Yates, MBA",
    review: "Jordan has great team and communications skills, works well under pressure, and goes above and beyond to accomplish the task at hand. We had less than two weeks to come up with turnkey solution for Levi's and we wouldn't have succeeded without Jordan's efforts both in front end development and cross company collaboration.",
  },
  {
    avatar: AVTR1,
    name: "Joshua Smith",
    review: "I have worked with Jordan on a number of sprint and have found him to be is inquisitive, great in a paired programming environment because he  is never afraid to questions his own assumptions. Jordan is whip-smart and an asset to any team.",
  },
  {
    avatar: AVTR1,
    name: "Michael Howey",
    review: "Jordan is a diligent, hard-working, and persistent developer. He was a strong member of the cohort and was always quick to help others understand new and challenging topics. Any team would be lucky to have him.",
  },
  {
    avatar: AVTR1,
    name: "Brian Krabec",
    review: "It has been a pleasure working with Jordan during project weeks and throughout the cohort. Jordans ability to create full-stack applications, troubleshoot, and contribute in a pair-programming setting exceeds expectations. I am confident that Jordan will make great strides as a software engineer!",
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Industry Professionals</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          reviews.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials