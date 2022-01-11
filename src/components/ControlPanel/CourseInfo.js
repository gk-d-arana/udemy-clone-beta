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


const CourseInfo = () => {
    const { course_id } = useParams()
    const [courseData, setCourseData] = useState({})
    const aummy_d = [
        {id:1, 
            test:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            id:2, test:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {id:3, test:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        }]
        
    
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${URL_ROOT + '/course_details/' + course_id}`,          
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
          }).then(res=>{
            setCourseData(res.data)
          }).catch(err=>console.log(err)) 
    },[])


    return (
        <div>
      {courseData.course  ?   <div className='container'>
            <nav className='bc-dv d-flex justify-content-between align-items-center' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">Course</li>
                <li className="breadcrumb-item">Details</li>                
              </ol> 
            </nav>
            
            <div className='d-flex'>
                <div className='col-xl-4'  style={{height:'200px'}}>
                <div className='h-100 w-100'  style={{backgroundPosition: 'center', 
                        borderRadius:'20px', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  courseData.course.course_image}')`}}>
                </div>
                </div>
                <div className='col-xl-6' style={{fontSize:'1.4rem'}}>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Course Name: </p>
                        <p>{courseData.course.course_name + ' '}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Description: </p>
                        <p>{courseData.course.course_description}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Instructor: </p>
                        <p>{courseData.course.course_instructor.user.username}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Sections: </p>
                        <p>{courseData.course.course_sections.length}</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Price: </p>
                        <p>{courseData.course.course_price + ' sp'}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='mx-3' style={{color:'#1080D4'}}>Subtitle: </p>
                        <p>{courseData.course.course_subtitle}</p>
                    </div>
                    </div>  
                    
                </div>
            </div>

            <div className='col-xl-9 mx-auto'>
            <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Parent Category: </h5>
                        <h5>{courseData.course.course_parent_category[0].parent_category_name}</h5>
                    </div>
                    <div className='d-flex'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Language: </h5>
                        <h5>{courseData.course.course_language}</h5>
                    </div>
                    </div> 
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Category: </h5>
                        <h5>{courseData.course.course_category[0].category_name}</h5>
                    </div>
                    <div className='d-flex'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Level: </h5>
                        <h5>{courseData.course.course_level}</h5>
                    </div>
                    </div>
                    <div className='d-flex my-5'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Course Requirements: </h5>
                        <ul>{courseData.course.course_requirements.map(cr => 
                        <li key={cr.id}>
                            {cr.course_requirement}
                        </li>    
                        )}</ul>
                    </div> 
                <div className='d-flex my-5'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Course Goals: </h5>
                        <ul>{courseData.course.course_learning_goals.map(cr => 
                        <li key={cr.id}>
                            {cr.learning_goal}
                        </li>    
                        )}</ul>
                    </div> 
                <div className='d-flex my-5'>
                        <h5 className='mx-3' style={{color:'#1080D4'}}>Course Tests: </h5>
                        <h5 className='mx-3' style={{color:'gray'}}>{courseData.course.course_tests_price}</h5>
                    </div>   
                <div className='my-5 ps-2'>
                        {aummy_d.map(test => 
                    <div key={test.id} className='d-flex my-2'>
                        <button className='btn px-5 py-0 text-white p-3'  style={{height:'fit-content', backgroundColor:'#084B97'}}>Test {test.id}</button>
                            <p className='col-xl-8 ms-4'>{test.test}</p>
                    </div>)}
                </div>
            </div>   

{/* 
                <div className='d-flex justify-content-around'>
                    <button className='btn' style={{color:'#0E564E', border:'1px solid #0E564E', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <i className='bx bx-envelope'></i> Send An Email
                    </button>
                    <button className='btn' style={{color:'#CE0505', border:'1px solid #CE0505', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <i className='bx bx-trash'></i> Delete Account
                    </button>
                </div>
 */}
        </div>: ""}
        </div>
    )
}

export default CourseInfo