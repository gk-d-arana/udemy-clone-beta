import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// swiper core styles
import 'swiper/swiper.min.css'
import { getRatingDiv } from '../course/CourseContent'
import { URL_ROOT }  from '../../utils/js'
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    
    const { path } = useRouteMatch()
    
    const tc = useSelector(state => state.mainData.topSellingCourses)
    const tr = useSelector(state => state.mainData.ratingsByValue)
    const ti = useSelector(state => state.mainData.topInstructors)
    const tpc = useSelector(state => state.mainData.topPcats)
    const tcc = useSelector(state => state.mainData.topCats)
    
    
    return (
        <div className='w-100'>
      <div className='container'>
            <h3><i>Top Courses</i></h3>
            <Swiper
            navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={3}
      className='pb-5'
    >
        {tc.map((course, index) => {
            if(index > 2) return ""
        return <SwiperSlide>
            <div className="card h-100"style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', top:0, borderRadius:'40px'}}>
            <div className='card-head'>
        <Link  to={`/course/${course.course.course_name}/${course.course.course_id}/`} className='w-100 h-100' style={{backgroundPosition: 'center', 
        backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course.course_image}')`, display:'block',  borderRadius:'40px'}}>
        </Link>
            </div>
                <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                    {course.course.course_name}
                    </h5>
                <p className="card-text">By {course.course.course_instructor ? course.course.course_instructor.user.username:""}</p>
                <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course.course_rate } {getRatingDiv(course.course.course_rate)} </p>
                <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                {course.course.is_free ? 'Free Course' : course.course.course_price + "SP"}</p><br />
                <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.course.badges}</button>
    
                </div>
    
            </div>   
            </SwiperSlide>
        }
        )}

        </Swiper>
        <div className='text-end w-100'>
        <Link to={`${path}top_courses`} style={{color:'#000'}}>View All</Link>
        </div>
        <h3><i>Top Ratings</i></h3>
            <Swiper
            navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      className='pb-5'
    >
         {tr.map((rating,index)=>{
             if(index>5)return ""
              return<SwiperSlide  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={rating.rating_id} className='row r1 p-4'>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + rating.instructor.profile_image}')`
                }}>
                </div>
                <h5>{rating.instructor.user.username}</h5>
                <span className='col-6'>{getRatingDiv(rating.rating_value)}</span>     
              </div>
              <div className='my-3'>
                <p>{rating.rating_content}</p>
              </div>
            </SwiperSlide>
         }
          )}

        </Swiper>

        <div className='text-end w-100'>
        <Link to={`${path}top_ratings`} style={{color:'#000'}}>View All</Link>
        </div>
        <h3><i>Top Instructors</i></h3>
            <Swiper
            navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      className='pb-5'
    >
         {ti.map((instructor,index)=>{
             if(index>5)return ""
              return<SwiperSlide  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={instructor.id} className='cards-of-hodas row r1 p-4'>
              <Link to={path + `instructor_info/` + instructor.id}>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + instructor.profile_image}')`
                }}>
                </div>
                <div>
                  <h5 style={{color:'#000'}}>{instructor.user.username}</h5>
                  <p style={{color:'#000', width:'12em', height:'1.5rem', maring:0, overflow:'hidden'}}>{instructor.job_role? instructor.job_role : "Head Of Data Science"}</p>
                  <span style={{color:'#000'}}>{getRatingDiv(instructor.total_rate)}{instructor.total_rate}</span>
                </div>
              </div>
              <div className='my-3 d-flex justify-content-around'>
                <p style={{color:'#000'}}>{instructor.total_students} Students</p>
                <p style={{color:'#000'}}>{instructor.courses_count} Courses</p>
              </div>
              </Link>
            </SwiperSlide>
         }
          )}

        </Swiper>

        <div className='text-end w-100'>
        <Link to={`${path}top_instructors`} style={{color:'#000'}}>View All</Link>
        </div>

        <h3><i>Top Parent Categories</i></h3>
        <div className='col-xl-9 d-flex justify-content-between align-items-center my-4'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p>{tpc[0] ? tpc[0].parent_category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tpc[0] ? tpc[0].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p className='w-100'>{tpc[1] ? tpc[1].parent_category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tpc[1] ? tpc[1].students_count: ""} Students</p>
            </div>
          </div>
        </div>
          <div className='row justify-content-center my-4'>
        <div className='col-xl-9 d-flex justify-content-between align-items-center'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#fff', color:'#686EAD', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border:'1px solid #686EAD'}}>
            <div>
            <p>{tpc[2] ? tpc[2].parent_category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tpc[2] ? tpc[2].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#fff', color:'#686EAD', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border:'1px solid #686EAD'}}>
            <div>
            <p className='w-100'>{tpc[3] ? tpc[3].parent_category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tpc[3] ? tpc[3].students_count: ""} Students</p>
            </div>
          </div>
        </div>
        </div>
        
        <div className='row justify-content-end my-4'>
        <div className='col-xl-9 d-flex justify-content-between align-items-center'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p>{tpc[4] ? tpc[4].parent_category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tpc[4] ? tpc[4].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p className='w-100'>{tpc[5] ? tpc[5].parent_category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tpc[5] ? tpc[5].students_count: ""} Students</p>
            </div>
          </div>
        </div>
        </div>

        <h3><i>Top Categories</i></h3>
        <div className='col-xl-9 d-flex justify-content-between align-items-center my-4'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p>{tcc[0] ? tcc[0].category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tcc[0] ? tcc[0].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p className='w-100'>{tcc[1] ? tcc[1].category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tcc[1] ? tcc[1].students_count: ""} Students</p>
            </div>
          </div>
        </div>
          <div className='row justify-content-center my-4'>
        <div className='col-xl-9 d-flex justify-content-between align-items-center'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#fff', color:'#686EAD', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border:'1px solid #686EAD'}}>
            <div>
            <p>{tcc[2] ? tcc[2].category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tcc[2] ? tcc[2].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#fff', color:'#686EAD', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border:'1px solid #686EAD'}}>
            <div>
            <p className='w-100'>{tcc[3] ? tcc[3].category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tcc[3] ? tcc[3].students_count: ""} Students</p>
            </div>
          </div>
        </div>
        </div>
        
        <div className='row justify-content-end my-4'>
        <div className='col-xl-9 d-flex justify-content-between align-items-center'>
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p>{tcc[4] ? tcc[4].category_name : ""}</p>
            </div>
            <div>
            <p className='text-end'>{tcc[4] ? tcc[4].students_count: ""} Students</p>
            </div>
          </div>  
          <div className='col-3 px-3 pt-3' style={{borderRadius:'20px', backgroundColor:'#686EAD', color:'#fff'}}>
            <div>
            <p className='w-100'>{tcc[5] ? tcc[5].category_name : ""}</p>
            </div>
            <div className='text-end'> 
            <p className='w-100'>{tcc[5] ? tcc[5].students_count: ""} Students</p>
            </div>
          </div>
        </div>
        </div>

</div>

  <h3 className='ps-3'><i>New Learners</i></h3>

<div className='d-flex px-5 py-3 my-3 justify-content-between align-items-center w-100' style={{backgroundColor:'#686EAD'}}>
                    <h5 style={{color:'#fff'}}>500M <br/> Students</h5>
                    <h5 style={{color:'#fff'}}>500M <br/> Courses</h5>
                    <h5 style={{color:'#fff'}}>500M <br/> Instructors</h5>
                </div>
        </div>
    )
}


export default Dashboard