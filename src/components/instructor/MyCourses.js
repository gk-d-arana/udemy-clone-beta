import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import myCoursesImage from './assets/21421@2x.png'
import wishlistEmptyImage from './assets/folder (2)@2x.png'

import { Link, useHistory } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'
import { useSelector } from 'react-redux'




export const MyCourses = (props) => {
    const history = useHistory()
    const courses = useSelector(state => state.mainData.myCourses)
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history.push('/login')
        }   
    },[])

    

    const emptyCart = () =>
        <div className='my-5 d-flex justify-content-center align-items-center'>
            <div className='my-5'>
            <img className='my-5' src={wishlistEmptyImage} alt="empty-cart"/>
            <h5 className='my-5'>Your Courses Is Empty</h5>
            <Link className='my-5' to="/" style={{background:'#CA5B5B', color:'#fff', padding: '10px 20px', borderRadius:'20px'}}>Browse Courses</Link>
            </div>
        </div>
     

     const courseList = () => courses.map( ct =>
         
        <div key={ct.course.course_id} className='pb-5' id={ct.course.course_id} >
          <div className='row top-courses-h my-3' id={ct.course.course_id}>
        <Link to={`/course/${ct.course.course_name}/${ct.course.course_id}/`} className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
          backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  ct.course.course_image}')`}}>
        </Link>
        
        <div  className='col-6 ms-3'>
          <div className=' d-flex justify-content-between'>
            <div style={{color:'#1080D4'}}>
               <h4>{ct.course.course_name}</h4> 
               <h5>By {ct.course.course_instructor.user.username}</h5>
            </div>

          </div>
          <div className=''>
                        <p className='' style={{color:'red', fontSize:'1.4rem'}}>{ct.course.course_rate } {getRatingDiv(ct.course.course_rate)} </p>
          </div>
          <div className='my-3'>
          <Link className='to-check my-5' style={{color:'#fff', padding:'10px 20px', borderRadius:'20px', backgroundColor:'#C345DD'}} to={"/" + ct.course.course_name + "/" + ct.course.course_id + "/course_content"}>Procceed To Course</Link>
          </div>

        </div>
        <div className='col-2 '>
        <>
        
        <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                  {ct.course.is_free ? 'Free Course' : ct.course.course_price + "SP"}</p><br /></>
                                  
       
        </div>
      </div>
      </div>

    /* cart_item.course */

         )  

    return (
        <div className='cart-wrapper'>
           {courses ?  <div className='p-5 '>
            <h3>My Courses</h3>
            <div className="card col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {courses.length === 0 ? emptyCart() : <div>{courseList()}</div> }
                
              </div>
            </div>
            </div>
            : ""}
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={myCoursesImage} alt='cart' />
            </div>
            </div>
    )
}



export default MyCourses