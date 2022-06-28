import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar.webp'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const reviews = [
  {
    avatar: AVTR1,
    name: "Joshua Smith",
    review: "Blah Blah Blah",
  },
  {
    avatar: AVTR1,
    name: "Michael Howey",
    review: "Jordan is a diligent, hard-working, and persistent developer. He was a strong member of the cohort and was always quick to help others understand new and challenging topics. Any team would be lucky to have him.",
  },
  {
    avatar: AVTR1,
    name: "Brian Krabec",
    review: "Blah Blah Blah",
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from</h5>
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