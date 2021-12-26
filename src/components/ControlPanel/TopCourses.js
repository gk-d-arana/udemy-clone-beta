import React, { useEffect } from 'react'
import './assets/styes.css'
import { getRatingDiv } from '../course/CourseContent'
import { URL_ROOT }  from '../../utils/js'
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';



const TopCourses = () => {
    const tc = useSelector(state => state.mainData.topSellingCourses)
    const handleDelete = (e) => {
    
    }
    
    const handleEdit = (e) => {

    }

    useEffect(()=>{
    },[])
    return (
        <div>
            <div className='gridded-tc container'>
                    {tc.map(course =>
                <div className="card h-100"style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', top:0, borderRadius:'40px'}}>
                <div className='card-head'>
            <div  to={`/course/${course.course.course_name}/${course.course.course_id}/`} className='w-100 h-100' style={{backgroundPosition: 'center', 
            backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course.course_image}')`, display:'block',  borderRadius:'40px'}}>
            </div>
                </div>
                    <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        {course.course.course_name}
                    <span className='d-flex align-items-center justify-content-between'> 
                    <i  id={course.course.id} onClick={(e)=>handleDelete(e)} className='bx px-2 bx-trash' style={{cursor:'pointer', color:'red'}}></i>
                        <i id={course.course.id} onClick={(e)=>handleEdit(e)} className='bx px-2 bx-edit' style={{cursor:'pointer'}}></i></span>
                        </h5>

                    <p className="card-text">By {course.course.course_instructor ? course.course.course_instructor.user.username:""}</p>
                    <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course.course_rate } {getRatingDiv(course.course.course_rate)} </p>
                    <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                    {course.course.is_free ? 'Free Course' : course.course.course_price + "SP"}</p><br />
                    <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.course.badges}</button>
        
                    </div>
        
                </div>   
            )}
            </div>

            <div className='my-4 d-flex justify-content-center'>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add Courses</button>
            </div>


        </div>
    )
}

export default TopCourses