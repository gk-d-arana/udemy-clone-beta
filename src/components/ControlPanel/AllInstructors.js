import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { URL_ROOT } from '../../utils/js'
import PaginationComp from '../utilComponents/Pagination';
import { getRatingDiv } from '../course/CourseContent'

const AllInstructors = () => {

    const ti = useSelector(state => state.mainData.topInstructors)
    const [count, setCount]= useState(Math.ceil(ti.length/10))
    const [counter, setCounter] = useState(0)
    //const [tii, setTii] = useState(ti.slice(counter, 10))



    return (
        <div className='mt-3' style={{minHeight:'100vh', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                <div className='gridded-goals-h mx-auto col-xl-10'>
                {ti.map(instructor => <Link style={{borderRadius:'20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} to={`/control_panel/instructor_info/` + instructor.id}>
              <div className='ps-2 d-flex justify-content-around w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + instructor.profile_image}')`
                }}>
                </div>
                <div className='text-center'>
                  <h5 style={{color:'#000'}}>{instructor.user.username}</h5>
                  <p style={{color:'#000', width:'7.5em', height:'1.5rem', maring:0, overflow:'hidden'}}>{instructor.job_role? instructor.job_role : "Head Of Data Science"}</p>
                  <span style={{color:'red'}}>{getRatingDiv(instructor.total_rate)}{instructor.total_rate}</span>
                </div>
              </div>
              <div className='my-3 d-flex justify-content-around'>
                <p style={{color:'#000'}}>{instructor.total_students} Students</p>
                <p style={{color:'#000'}}>{instructor.courses_count} Courses</p>
              </div>
              <div className='my-3 d-flex justify-content-evenly mx-auto w-50'>
                <i style={{color:'#686EAD', fontSize:'1.6rem'}} className='bx bx-envelope'></i>
                <i style={{color:'red', fontSize:'1.6rem'}} className='bx bx-trash'></i>

              </div>
              </Link>)}

                </div>{/* : <p className='mx-auto' style={{color:'#1080D4', width:'fit-content'}}>No instrucs</p>} */}
                
                    <div>
            {/* <PaginationComp count={count} setPage={setPage}/> */}
            
            </div>
        </div>
    )
}

export default AllInstructors
