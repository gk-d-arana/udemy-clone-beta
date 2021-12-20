import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Link } from 'react-router-dom'
import {URL_ROOT} from '../../utils/js'
import parse from 'html-react-parser'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// swiper core styles
import 'swiper/swiper.min.css'
import './assets/css/carouselStyles.css'
import CourseItem from '../course/CourseItem';


const CourseCarousel = ({pcatCourses, getRatingDiv}) => {
    return (
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      {pcatCourses.courses.map(pcatCourse => 
      <SwiperSlide className='position-relative' id={pcatCourse.course_id} key={pcatCourse.course_id}>
      <Link id={pcatCourse.course_id} onMouseEnter={(e)=>{document.querySelector(`.hov-${e.target.id}`) ? 
      document.querySelector(`.hov-${e.target.id}`).classList.remove('hidden'):console.log(e.target)}}
      
      onMouseLeave={(e)=>{document.querySelector(`.hov-${e.target.id}`) ? 
      document.querySelector(`.hov-${e.target.id}`).classList.add('hidden'):console.log(e.target)}}

      to={{pathname: `/course/${pcatCourse.course_name}/${pcatCourse.course_id}/`, 
        }} >
          <div id={pcatCourse.course_id} className='card-img' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  pcatCourse.course_image}')`}}>
            </div>
                
              <div id={pcatCourse.course_id} className="card-body" style={{color:'#000'}}>
                <h5 className="card-title">{pcatCourse.course_name}</h5>
                <div className="card-text"> {pcatCourse.course_subtitle}
                <br />  
                By Teacher: 
                <span style={{color:'#000'}} className="teacher-name" id={pcatCourse.course_instructor.user.id}>
                 {pcatCourse.course_instructor.user.username}
                 </span>
                  <div className="rating-div"><br />
                  {pcatCourse.course_rate} {parse(getRatingDiv(pcatCourse.course_rate))}
                  </div>
                </div>
                <span href="#" className="btn color-gold">{pcatCourse.is_free? 'Free Course' : pcatCourse.course_price + "SP"}</span>
              </div>
            </Link>
            <CourseItem
             course={pcatCourse}
              inWishlist={true}
              setInWishlist={()=>{console.log('test')}}
              setInCart={()=>{console.log('test')}}
              inCart={false}
              addToCart={()=>{console.log('a')}}
              removeFromWishlist={()=>{console.log('b')}}
              addToWishlist={()=>{console.log('a')}}
           />
      </SwiperSlide>
      )}
    </Swiper>
    )
}



export default CourseCarousel
