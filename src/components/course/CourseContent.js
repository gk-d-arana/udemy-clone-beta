import React, { useEffect,useState } from 'react'
import {URL_ROOT} from '../../utils/js'
import { Link } from 'react-router-dom'
import './assets/styles.css'
import parse from 'html-react-parser'
export const CourseContent = (props) => {
    
    const [course, setCourse] = useState({})
    const [inCart, setInCart] = useState(false)
    const [inWishlist, setInWishlist] = useState(true)

    useEffect(()=>{
        console.log(props.location.query.getRatingDiv(3))
        setCourse(props.location.state.pcatCourse)
    }, [])
    return ( 
        <div className='container-xl my-3'>
            <div className='wrapper1 d-flex'>
            <div className='col-8 general-info-wrapper'>
           
            <nav aria-label="breadcrumb p-0">
              <ol class="breadcrumb p-0 " style={{backgroundColor:'transparent'}}>
                <li class="breadcrumb-item" id={course.course_parent_category?course.course_parent_category[0].parent_category_id:""}>{course.course_parent_category?course.course_parent_category[0].parent_category_name:""}</li>
                <li class="breadcrumb-item " id={course.course_category?course.course_category[0].category_id:""}>{course.course_category?course.course_category[0].category_name:""}</li>
                <li class="breadcrumb-item active"  aria-current="page" id={course.course_id}>{course.course_name}</li>
             
              </ol>
            </nav>

            <h4>
            {course.course_subtitle}
            </h4>       

            <p>
            {course.course_description}
            </p>
            {/*<p>{course.badges}</p>*/}
            <div className='col-xl-8 d-flex justify-content-between align-items-center'>
                    <p style={{color:'gold'}}>Best Seller</p>
                <span style={{color:'red'}}>
                    <span style={{fontSize:'2rem'}}>{course.course_rate}</span>
      {parse(props.location.query.getRatingDiv(course.course_rate))}

                </span>
                <p>{course.course_students}</p>
           </div>
            <p><span style={{color:"gray"}}>Created By</span> {course.course_instructor?course.course_instructor.user.username:""}</p>
            <div className='col-xl-6 d-flex justify-content-between align-items-center'>
                <p>
                <i className='bx bx-time'></i>
                Last Updated At {'   ' + course.updated_at}
                </p>
                <p><i className='bx bx-world'></i>English</p>
               
               
                </div> 

              
                </div>
            <div className='col-4 d-flex justify-content-center align-items-center'>
                <div class="card w-100" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <div className='card-head-div' style={{position:'relative'}}>
            <div className='w-100' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
            </div>
                      <Link to="/"> 
                      <div className="play-wrapper">
                      <i class='bx bx-play'></i>
                      </div>
                      </Link>
                    </div>
                  <div class="card-body text-center">
                    {inCart? <><div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> : 
                    <><div>
                                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Add To Cart</div><br />
                                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Buy Now</div> <br />
                                <a href='#' style={{color:'#686EAD'}}>Apply Coupon</a><br />
                    <p className="btn color-gold">{course.is_free? 'Free Course' : course.course_price + "SP"}</p><br />
                            </div></>}
                    
                    <div className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                        {inWishlist?<i class='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i>:<i class='bx bxs-heart' ></i>}<br />
                        Add To Favourite
                    </div> <br/>

                  </div>
                </div>
            </div>

            </div>
            
            <div className='what-to-learn col-6'>


                    <div class="card" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
                      <div class="card-body">
                      <button type="button" className="to-learn-btn" style={{margin:'13px'}}>What Will You Learn</button>
                        <h6 class="card-subtitle mb-2 text-muted "></h6>
                        
                        <div className='gridded-goals'>
                            {course.course_learning_goals ? course.course_learning_goals.map(clg => 
                            <div className='gridded-goal d-flex'>
                                    <div className='col-2'><i style={{fontSize:"2rem"}} className='bx bx-check'></i></div>
                                <div className='col-10'>{clg.learning_goal}</div>
                            </div>
                            ):""}
                        </div>
                      </div>
                    </div>


            </div>

            <div className='course-content my-5'>
            <button type="button" className="to-learn-btn">Course Content</button>



            </div>


  





        </div>
    )
}

export default CourseContent