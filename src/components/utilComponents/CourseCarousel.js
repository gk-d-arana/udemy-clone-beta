import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Link } from 'react-router-dom'
import {URL_ROOT} from '../../utils/js'
import parse from 'html-react-parser'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// swiper core styles
import 'swiper/swiper.min.css'



const CourseCarousel = ({pcatCourses, getRatingDiv}) => {

    return (
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      {pcatCourses.courses.map(pcatCourse => 
      <SwiperSlide id={pcatCourse.course_id}>
      <Link to={{pathname: `/course`, query:{getRatingDiv:getRatingDiv} ,state: {
        pcatCourse : pcatCourse,
      }
        }} >
          <div className='card-img' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  pcatCourse.course_image}')`}}>
            </div>
                
              <div className="card-body" >
                <h5 className="card-title">{pcatCourse.course_name}</h5>
                <div className="card-text"> {pcatCourse.course_description}
                <br />  
                By Teacher: 
                <span className="teacher-name" id="{{pcatCourse.course_instructor.user.id}">
                 {pcatCourse.course_instructor.user.username}
                 </span>
                  <div className="rating-div"><br />
                {parse(getRatingDiv(pcatCourse.course_rate))}
                  </div>
                </div>
                <a href="#" className="btn color-gold">{pcatCourse.is_free? 'Free Course' : pcatCourse.course_price + "SP"}</a>
              </div>
            </Link>
      </SwiperSlide>
      )}
    </Swiper>
    )
}



export default CourseCarousel