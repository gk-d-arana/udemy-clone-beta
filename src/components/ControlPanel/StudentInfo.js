import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {URL_ROOT} from '../../utils/js'
import { getRatingDiv } from '../course/CourseContent'
import SearchImage from './assets/search (1).png'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// swiper core styles
import 'swiper/swiper.min.css'


const StudentInfo = () => {
    const { student_id } = useParams()
    const [instructorData, setInstructorData] = useState({})
    
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${URL_ROOT + '/cp_student_profile/' + student_id}`,          
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
          }).then(res=>{
            setInstructorData(res.data)
          }).catch(err=>console.log(err)) 
    },[])


    return (
        <div>
      {instructorData.instructor  ?   <div className='container'>
            <nav className='bc-dv d-flex justify-content-between align-items-center' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">Student</li>
                <li className="breadcrumb-item">Details</li>
              </ol>
              <div style={{color:'red', fontSize:'1.3rem'}}>
                 <p style={{color:'#000'}}>Total Balance { instructorData.instructor.total_balance}</p>
              </div> 
            </nav>
            
            <div className='d-flex'>
                <div className='col-xl-4'  style={{height:'200px'}}>
                <div className='h-100 w-100'  style={{backgroundPosition: 'center', 
                        borderRadius:'20px', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  instructorData.instructor.profile_image}')`}}>
                </div>
                </div>
                <div className='col-xl-6' style={{fontSize:'1.4rem'}}>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Name: </p>
                        <p>{instructorData.instructor.user.first_name + ' '}{instructorData.instructor.user.last_name}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Age: </p>
                        <p>{instructorData.instructor.age}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Email: </p>
                        <p>{instructorData.instructor.user.email}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Total Enrollments : </p>
                        <p>{instructorData.my_learning.courses.length + ' '} Courses</p>
                    </div>  
                </div>
            </div>


            <div className='d-flex align-items-center'>
                        <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>Courses Enrolled In :</p>
                        <Swiper className='col-xl-7'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={24}
      slidesPerView={2}
      navigation
    >
      {instructorData.my_learning.courses.map(course => 
      <SwiperSlide style={{borderRadius:'20px'}} className='p-0 position-relative' id={course.course.course_id} key={course.course.course_id}>
      <Link id={course.course.course_id} style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='w-100' onMouseEnter={(e)=>{document.querySelector(`.hov-${e.target.id}`) ? 
      document.querySelector(`.hov-${e.target.id}`).classList.remove('hidden'):console.log(e.target)}}
      
      onMouseLeave={(e)=>{document.querySelector(`.hov-${e.target.id}`) ? 
      document.querySelector(`.hov-${e.target.id}`).classList.add('hidden'):console.log(e.target)}}

      to={{pathname: `/course/${course.course.course_name}/${course.course.course_id}/`, 
        }} >
          <div id={course.course.course_id} className='w-100 card-img' style={{borderRadius:20, height:'180px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course.course_image}')`}}>
            </div>
                
              <div id={course.course.course_id} className="card-body" style={{color:'#000'}}>
                <h5 className="card-title">{course.course.course_name}</h5>
                <div className="card-text">
                By Teacher: 
                <span style={{color:'#000'}} className="teacher-name" id={course.course.course_instructor.user.id}>
                 {course.course.course_instructor.user.username}
                 </span>
                </div>
                <span href="#" className="btn color-gold">{course.is_free? 'Free Course' : course.course.course_price + "SP"}</span>
              </div>
            </Link>
            <div>
            {course.rating ? 
                <p className='text-center'>This Student Gave Rate To This Course :
                    {getRatingDiv(course.rating.rating_value)}
                </p>: 
                <p className='text-center'>This Student Didn't Give Rate To This Cousrse
            </p>}
            </div>
            {/* <CourseItem
             course={course}
              inWishlist={true}
              setInWishlist={()=>{console.log('test')}}
              setInCart={()=>{console.log('test')}}
              inCart={false}
              addToCart={()=>{console.log('a')}}
              removeFromWishlist={()=>{console.log('b')}}
              addToWishlist={()=>{console.log('a')}}
           /> */}
      </SwiperSlide>
      
      )}
    </Swiper>
            </div>
            <div className='d-flex justify-content-around'>
                        <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>Reviews Of Student :</p>
    <div className='col-xl-6'>{instructorData.my_learning.courses.map(c=>{
        if(c.rating === null)return ""
        return<div  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={c.rating.rating_id} className='d-flex justify-content-between w-100 align-items-center my-3 r1 p-4'>
            <div className='col-xl-8'>
            <p>{c.rating.rating_content}</p>
            </div>
            <div className='text-center'>
            <h5 style={{color:'#686EAD'}}>{c.course.course_name}</h5>
            <span className='col-6'>{getRatingDiv(c.rating.rating_value)}</span>     
            <h5 style={{color:'#F67D20'}}>{c.rating.created_at}</h5>
            </div>
      </div>
    }
        )}   </div>                 
        </div>


            
{/* 

            <div className='d-flex align-items-center'>
                        <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>About Instructor :</p>
                        <p style={{lineHeight:'2.2rem'}}>{instructorData.instructor.bio}</p>
            </div>

            <div className='d-flex my-5'>
                <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>His Courses :</p>
                {instructorData.courses.length > 0 ? <div className='col-xl-8 instru-vids'>
                {instructorData.courses.map(tc =>{
                    return <div className='row top-courses-h my-3' id={tc.course_id} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                          <Link className='px-0 col-4 h-100 w-100' id={tc.course_id} to={`/course/${tc.course_name}/${tc.course_id}/`}>
                            <div className='h-100 w-100' style={{backgroundPosition: 'center', 
                            backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  tc.course_image}')`}}>
                            </div>
                            </Link>
                            <div className='col-8' style={{flexDirection:'column', display:'flex', justifyContent:'space-evenly'}}>
                                <div className='d-flex justify-content-between'>
                                    <div style={{color:'#1080D4'}}>
                                    <h4>{tc.course_name}</h4> 
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <h5 style={{color:'gray', margin:'0px'}}><i className='bx bx-people'></i>{tc.course_students}Students</h5>                                    </div>
                                        <i className='bx bx-trash' style={{color:'red', fontSize:'1.3rem', cursor:'pointer', flexDirection:'column', display:'flex', justifyContent:'center'}} id={tc.course_id}></i>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <button type="button" style={{fontSize:'.8rem', height:'max-content', margin:'0'}} className=" to-learn-btn"><i>{tc.badges}</i></button>
                                    <div className='d-flex'>
                                    <p style={{color:'red', marginBottom:'1.5rem'}}>{tc.course_rate} <i className='bx bxs-star'></i></p>
                                {tc.in_my_learning ?  <>
                                            <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> :
                                            <><p className="btn" style={{color:'#1080D4', margin:'0'}}>{tc.is_free ? 'Free Course' : tc.course_price + "SP"}</p><br /></>
                                        }
                                    </div>
                                </div>
                                <div style={{color:'#1080D4'}}>
                                {tc.course_duration}Total Hours
                                </div>
                            </div>
                        <div className='col-3'>
                            
                        </div>
                    </div>
                    })}
                </div>: <p style={{color:'#1080D4'}}>No Courses</p>}
            </div>    

            <div className='d-flex my-5'>
                <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>His Practise Tests :</p>
                {instructorData.tests.length > 0 ? <div className='col-xl-8 instru-vids gridded-goals2-t'>
                {instructorData.tests.map(test => <div className='py-3 px-4' style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    border:'1px solid #000', borderRadius:'20px'
                    }} key={test.id}>
                    <div className='d-flex justify-content-between'>
                        <div className='align-items-center d-flex'>
                            <img alt='' src={SearchImage} />
                            <h5>{test.name}</h5>
                        </div>
                        <i className='bx bx-trash' style={{color:'red', fontSize:'1.3rem', cursor:'pointer', flexDirection:'column', display:'flex', justifyContent:'center'}} id={test.id}></i>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <h5 style={{color:'#F67D20'}}>{test.parent_category? test.parent_category.parent_category_name : ""}</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>{test.multiple_choice_questions.length + ' '}Choices</h5>
                        <h5>{test.editorial_questions.length + ' '} Questions</h5>

                    </div>
                </div>)}
                </div>: <p style={{color:'#1080D4'}}>No Tests</p>}
            </div>
 */}
            <div className='d-flex my-5'>
                <p className='me-2 col-xl-2' style={{color:'#1080D4'}}>His Regular Live :</p>
                {/* {instructorData.meetings.length > 0 ? <div className='col-xl-8 instru-vids gridded-goals2-t'>
                {instructorData.tests.map(test => <div className='py-3 px-4' style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    border:'1px solid #000', borderRadius:'20px'
                    }} key={test.id}>
                    <div className='d-flex justify-content-between'>
                        <div className='align-items-center d-flex'>
                            <img alt='' src={SearchImage} />
                            <h5>{test.name}</h5>
                        </div>
                        <i className='bx bx-trash' style={{color:'red', fontSize:'1.3rem', cursor:'pointer', flexDirection:'column', display:'flex', justifyContent:'center'}} id={test.id}></i>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <h5 style={{color:'#F67D20'}}>{test.parent_category? test.parent_category.parent_category_name : ""}</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>{test.multiple_choice_questions.length + ' '}Choices</h5>
                        <h5>{test.editorial_questions.length + ' '} Questions</h5>

                    </div>
                </div>)}
                </div>: <p style={{color:'#1080D4'}}>No Tests</p>} */}
            </div>   


                <div className='d-flex justify-content-around'>
                    <button className='btn' style={{color:'#0E564E', border:'1px solid #0E564E', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <i className='bx bx-envelope'></i> Send An Email
                    </button>
                    <button className='btn' style={{color:'#CE0505', border:'1px solid #CE0505', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <i className='bx bx-trash'></i> Delete Account
                    </button>
                </div>

        </div>: ""}
        </div>
    )
}

export default StudentInfo