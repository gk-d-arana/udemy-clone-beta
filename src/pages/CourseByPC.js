import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_ROOT } from '../utils/js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../components/course/CourseContent'


const CourseByPC = () => {
    const {obj_name, obj_id} = useParams()
    const [courses ,setCourses] = useState([])
    useEffect(()=>{
        axios({
            method : 'GET',
            url : URL_ROOT + '/search_courses/' + obj_id + '/',
          }).then(res=>{
            setCourses(res.data)
          }).catch(err=>console.log(err))
        
    }, [obj_id, obj_name])
    
    const courseList = () => courses.map( course =>
        <div className='pb-5' id={course.course_id} >
          <div className='row top-courses-h my-3' id={course.course_id}>
        <Link to={`/course/${course.course_name}/${course.course_id}/`} className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
          backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
        </Link>
        
        <Link to={`/course/${course.course_name}/${course.course_id}/`} className='col-6 ms-3'>
          <div className=' d-flex justify-content-between'>
            <div style={{color:'#1080D4'}}>
               <h4>{course.course_name}</h4> 
               <h5>By {course.course_instructor.user.username}</h5>
            </div>

          </div>
          <div className=''>
                        <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course_rate } {getRatingDiv(course.course_rate)} </p>
      <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.badges}</button>
          </div>
        </Link>
        <div className='col-2 '>
 
        </div>
      </div>
      </div>

    /* cart_item.course */

        )

    return (
        <div>
            <button type="button" className="to-learn-btn">All {obj_name} Courses</button>
            <div className='p-4 d-flex justify-content-end'><p>{courses.length} Results For "{obj_name}"</p></div>
            <div className='p-2 row'>
                <div className='col-xl-3'>

                </div>
                <div className='col-xl-8'>
                    {courses ? courses.map((course, index)=>
                        <div key={index}>

                        </div>
                    ):""}
                </div>
            </div>

        </div>
    )
}
export default CourseByPC