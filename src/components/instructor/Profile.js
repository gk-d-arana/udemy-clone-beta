import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'
import './assets/styles.css'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'



export const Profile = (props) => {
    const { instructor_id } = useParams()
    const [instructorData, setInstructorData] = useState({})
    useEffect(()=>{
        axios({
            method : 'GET',
            url : URL_ROOT + '/instructor_profile/' + instructor_id
        }).then(res =>{
            setInstructorData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        
        <div>
        {instructorData.instructor  ?     
            <>

            {/* Instructor Image */}
            <div className='div-1-instruc'></div>
            <div className='d-flex mb-5 justify-content-center align-items-center w-100 position-relative'>
                <div className='instruc-img' style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + instructorData.instructor.profile_image}')`
                }}>
                </div>
            </div>

                
                {/* Instrutor Main Info */}

                    <div className='me-5 d-flex instrutor-main-info-div justify-content-evenly align-items-center'>
                        <div  className='text-center'>
                            <b>
                            {instructorData.instructor.user.username}                            
                            </b>    
                            <br />
                            {instructorData.instructor.job_role}
                        </div>
                        <div>
                            {instructorData.instructor.age} Years
                        </div>
                        <div>
                            {instructorData.instructor.total_students} Students
                        </div>
                    </div>

                {/* Instrutor Bio */}

                <div className='my-4 instructor-bio p-5'>
                    <h3>About Me</h3>
                    <p style={{fontSize:'1.5rem'}}>
                        {instructorData.instructor.bio}
                    </p>
                </div>
                
                {/* Instructor Courses */}
                <div className='container my-5'>
                <h3>My Courses</h3>
                    {instructorData.courses.map(tc =>{
                    return<Link id={tc.course_id} to={`/course/${tc.course_name}/${tc.course_id}/`}><div className='row top-courses-h my-3' id={tc.course_id}>
                        <div className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
                        backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  tc.course_image}')`}}>
                        </div>
                        <div className='col-6'>
                        <div className='d-flex justify-content-between'>
                            <div style={{color:'#1080D4'}}>
                            <h4>{tc.course_name}</h4> 
                            </div>
                        <div className='d-flex align-items-center'>
                            <h5 style={{color:'gray'}}><i className='bx bx-people'></i>{tc.course_students}Students</h5>
                            {tc.in_my_learning ?  <>
                            <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> :
                            <><p className="btn" style={{color:'#1080D4', margin:'0'}}>{tc.is_free ? 'Free Course' : tc.course_price + "SP"}</p><br /></>
                                            }
                        </div>

                        </div>
                        <div className='d-flex justify-content-between'>
                    <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{tc.badges}</button>
                                        <p style={{color:'red'}}>{tc.course_rate} <i className='bx bxs-star'></i></p>
                        </div>
                        </div>
                        <div className='col-3'>
                        <div className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                                    {tc.in_wishlist ?
                                    <><i className='bx bxs-heart' ></i><br />Remove From Favourite</>
                                    :<><i className='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i><br/>Add To Favourite</>
                                    }
                                </div> 
                        </div>
                    </div>
                    </Link>
                    })}
                </div>

                    {/* Instructor Top Reviews */}
                    <div className='container mt-5'>
                    <h3>Top Reviews</h3>
                    </div>

                    <div className='gridded-goals2 container my-4'>

          {instructorData.ratings.map(rating=>
              <div  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={rating.rating_id} className='row r1 p-4'>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + rating.instructor.profile_image}')`
                }}>
                </div>
                <h5>{rating.instructor.user.username}</h5>
                <span className='col-5'>{getRatingDiv(rating.rating_value)}</span>     
              </div>
              <div className='my-3'>
                <p>{rating.rating_content}</p>
              </div>
            </div>

          )}
</div>  

            </>

            : ""}
        </div>
    )
}



export default Profile
