import React from 'react'
import './History.css'
import AVTR1 from '../../images/man.png'
import AVTR2 from '../../images/sky.png'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
  },
  {
    avatar: AVTR2,
  },
  {
    avatar: AVTR1,
  },
  {
    avatar: AVTR2,
  },

 ]



const History = () => {
  return (
    <section id='history' className="history__content">
      <div className="history">
          <p>01.<span className='text'>HISTORY</span></p>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum odit voluptatum quibusdam recusandae, animi officiis quam, alias nisi pariatur esse magni? Sequi quas vel, fugit ipsam nesciunt quibusdam nihil est fugiat quia culpa, iusto voluptate facilis exercitationem? Aut ipsam modi facilis dolor officiis architecto culpa repellat consectetur, sit amet!</h6>
      </div>

      <div className="swipa">

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination,]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
      {
          data.map(({avatar}, index) =>{
            return (
              <SwiperSlide className='testimonial' key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              
            </SwiperSlide>
    
            )
          })
        }
      </Swiper>
      </div>

    </section>
  )
}

export default History