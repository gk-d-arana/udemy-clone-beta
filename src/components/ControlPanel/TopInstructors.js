import React, { useEffect } from 'react'
import './assets/styes.css'
import { getRatingDiv } from '../course/CourseContent'
import { URL_ROOT }  from '../../utils/js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const TopCourses = () => {
    const ti = useSelector(state => state.mainData.topInstructors)

    const handleDelete = (e) => {

    }
    


    useEffect(()=>{console.log('i')},[])
    return (
        <div>
            <div className='mt-5 gridded-tc a-grid container'>
            {ti.map((instructor,index)=>{
             if(index>5)return ""
              return<div  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={instructor.id} className='cards-of-hodas row r1 p-4'>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + instructor.profile_image}')`
                }}>
                </div>
                <div>
                  <h5>{instructor.user.username}</h5>
                  <p style={{width:'12em', height:'1.5rem', maring:0, overflow:'hidden'}}>{instructor.job_role? instructor.job_role : "Head Of Data Science"}</p>
                  <span>{getRatingDiv(instructor.total_rate)}{instructor.total_rate}</span>
                </div>
              </div>
              <div className='my-1 d-flex justify-content-around'>
                <p>{instructor.total_students} Students</p>
                <p>{instructor.courses_count} Courses</p>
              </div>
              <div className='mt-3 mb-1 d-flex justify-content-end'>
                <i style={{color:'red', cursor:'pointer', fontSize:'1.6rem'}} className='bx bx-trash' id={instructor.id} onClick={(e) => handleDelete(e)}></i>
              </div>
            </div>
         }
          )}
            </div>


        </div>
    )
}

export default TopCourses