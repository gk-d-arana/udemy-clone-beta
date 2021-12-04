import React, { useEffect,useState } from 'react'
import {URL_ROOT} from '../../utils/js'
import { Link } from 'react-router-dom'
import './assets/styles.css'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import parse from 'html-react-parser'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { getRatingDiv } from '../../pages/Home'
import Divider from './assets/Path 32@2x.png'
import { useSelector } from 'react-redux'


export const CourseContent = (props) => {
    const topSellingCourses = useSelector(state => state.mainData.topSellingCourses)    
    const [course, setCourse] = useState({})
    const [inCart, setInCart] = useState(false)
    const [open, setOpen] = useState(true)
    const { course_id } = useParams();
    const [ratings, setRatings] = useState([])
    const handleClick = () => {
      setOpen(!open)
    }
  
    const [inWishlist, setInWishlist] = useState(true)
    useEffect(()=>{
        window.scrollByLines(-window.scrollY)
     
       axios({
          method: "GET",
          url: `${URL_ROOT + '/course_details/' + course_id}`,          
          headers : {
            Authorization : `${localStorage.getItem('token')}`
          }
        }).then(res=>{
          setCourse(res.data.course)
          setInCart(res.data.in_cart)
          setInWishlist(res.data.in_wishlist)
          axios({
            method: 'GET',
            url : URL_ROOT + '/course_ratings/' + res.data.course.course_id
          }).then(res=>{
            setRatings(res.data)
        })
        })
      
    }, [course_id])
    return ( 
        <div className='cxl my-3'>
            <div className='wrapper1 d-flex'>
            <div className='col-8 general-info-wrapper' >
          <div className='control-height' style={{position:'relative'}} >
           <img src={Divider} alt="Nothing To See" className='des-img' />
            <nav className='bc-dv mt-5 p-0' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
              <ol className="breadcrumb p-0 " style={{backgroundColor:'transparent'}}>
                <li className="breadcrumb-item" id={course.course_parent_category?course.course_parent_category[0].parent_category_id:""}>{course.course_parent_category?course.course_parent_category[0].parent_category_name:""}</li>
                <li className="breadcrumb-item " id={course.course_category?course.course_category[0].category_id:""}>{course.course_category?course.course_category[0].category_name:""}</li>
                <li className="breadcrumb-item active"  aria-current="page" id={course.course_id}>{course.course_name}</li>
             
              </ol>
            </nav>

            <h4>
            {course.course_subtitle}
            </h4>       


            {/*<p>{course.badges}</p>*/}
            <div className='col-xl-10 d-flex justify-content-between align-items-center'>
                    <p style={{color:'gold'}}>Best Seller</p>
                <span style={{color:'red'}}>
                    <span style={{fontSize:'2rem'}}>{course.course_rate}</span>
      {parse(`${getRatingDiv(course.course_rate) }`)}

                </span>
                <p>{course.course_students} Students </p>
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
                <div className='what-to-learn mt-4'>
                  <div className="card" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
                    <div className="card-body">
                    <button type="button" className="to-learn-btn" style={{margin:'13px'}}>What Will You Learn</button>
                      
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
              
                </div>


            <div className='col-4 d-flex justify-content-center align-items-center'>
                <div className="card w-100" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <div className='card-head-div' style={{position:'relative'}}>
            <div className='w-100' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
            </div>
                      <Link to="/"> 
                      <div className="play-wrapper">
                      <i className='bx bx-play'></i>
                      </div>
                      </Link>
                    </div>
                  <div className="card-body text-center">
                    {inCart? <><div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> : 
                    <><div>
                                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Add To Cart</div><br />
                                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Buy Now</div> <br />
                                <a href='#' style={{color:'#686EAD'}}>Apply Coupon</a><br />
                    <p className="btn color-gold">{course.is_free? 'Free Course' : course.course_price + "SP"}</p><br />
                            </div></>}
                    
                            <div className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                        {inWishlist ?
                        <><i className='bx bxs-heart' ></i><br />Remove From Favourite</>
                        :<><i className='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i><br/>Add To Favourite</>
                        }
                    </div> 

                  </div>
                </div>
            </div>

            </div>
            

            <div className='course-content my-5'>
            <button type="button" className="to-learn-btn">Course Content</button>
              
              
              
                <div className='text-center d-flex justify-content-center'><h3 className='col-3'>This Course Includes</h3></div>
                  <div className='gridded-overview'>
                    <div>
                    <i className='bx bx-time'></i>  {course.course_sections ? course.course_sections.length : 0} Sections, {course.course_videos_count} Lectures
                    </div>
                    <div>
                    <i className='bx bx-spreadsheet'></i>  4 Tests
                    </div>
                    <div>
                    <i className='bx bx-mobile'></i>  Access On Moible And Web
                    </div>
                    <div>
                    <i className='bx bxs-spreadsheet'></i>  Certificate Of Complete
                    </div>
                  </div>
                              
            
          {course.course_sections ? course.course_sections.map(cs => 
        <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={cs.section_name} style={{color:'#1080D4', fontSize:'1.4rem'}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {cs.section_videos? cs.section_videos.map(video => 
        <List component="div" >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText>{video.video_title}</ListItemText>
          </ListItemButton>
        </List>
          ) : ""}
      </Collapse>

    </List>) : ""}  
      




{/* Requirements */}

<button type="button" className=" to-learn-btn">Requirements</button>
<ul className='course_requirements'>
  {course.course_requirements?course.course_requirements.map(cr=>
    <li id={cr.id}>{cr.course_requirement}</li>
    ):""}
</ul>



          {/* Description */}
          <button type="button" className=" to-learn-btn">Description</button>
          <div className='desc w-100'>
          <p>
            {course.course_description}
            </p>
          </div>



      {/* Top Selling Courses  */}

          <button type="button" className=" to-learn-btn">Students Also Bought</button>

        {topSellingCourses.map(tc =>{
          if(course_id == tc.course.course_id){return ""}
          return<Link id={tc.course.course_id} to={`/course/${tc.course.course_name}/${tc.course.course_id}/`}><div className='row top-courses-h my-3' id={tc.course.course_id}>
            <div className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
              backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  tc.course.course_image}')`}}>
            </div>
            <div className='col-7'>
              <div className='d-flex justify-content-between'>
                <div style={{color:'#1080D4'}}>
                   <h4>{tc.course.course_name}</h4> 
                </div>
              <div className='d-flex align-items-center'>
                <h5 style={{color:'gray'}}><i className='bx bx-people'></i>{tc.course.course_students}Students</h5>
                {tc.in_my_learning ?  <>
                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> :
                <><p className="btn" style={{color:'#1080D4'}}>{tc.course.is_free ? 'Free Course' : tc.course.course_price + "SP"}</p><br /></>
                                  }
              </div>

              </div>
              <div className='d-flex justify-content-between'>
          <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{tc.course.badges}</button>
                            <p style={{color:'red'}}>{tc.course.course_rate} <i className='bx bxs-star'></i></p>
              </div>
            </div>
            <div className='col-2'>
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
          



        {/* Instructor Info */}

        <button type="button" className=" to-learn-btn">About Instructor</button>
        
        {course.course_instructor ? <div className='instructor-div ms-5'>
          <div className='row r1'>
            <div className='col-4 ' >
             <div className='instruc-p-img' style={{backgroundPosition: 'center',
              backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_instructor.profile_image}')`}}>
            </div> 
            </div>  
            <div className='col-xl-8 d-flex justify-content-center align-items-center'>
              <div>
              <h5>{course.course_instructor.user.username}</h5>
              <h5>{course.course_instructor.job_role}</h5>
              </div>
            </div>
          </div>
          <div className='ms-4 h-div'>
          <h5><i className='bx bxs-star me-1'></i>{course.course_instructor.total_rate} Instructor Rating</h5>
          <h5><i className='bx bxs-comment me-1'></i>{course.course_instructor.total_reviews}Reviews </h5>
          <h5><i className='bx bxs-people me-1'></i>{course.course_instructor.total_students}Students </h5>
          <h5><i className='bx bxs-play me-1'></i>{course.course_instructor.courses_count}Courses</h5>
          <h5>{course.course_instructor.bio}</h5>
        
             </div>
        </div>: ""}
        


        {/* Students Feedback */}
        <button type="button" className=" to-learn-btn">Students Feedback</button>
        <div className='row container'>
            <div className='col-4 text-center rev-col'>
              <h1>{course.course_rate}</h1>
{/*           {parse(getRatingDiv(course.course_rate))}
 */}              <h3>{ratings.length + "   "} Reviews</h3>
            </div>

          <div className='col-7'>
            <div className='d-flex justify-content-around align-items-center'>
              <p>5 Stars</p>
                <progress style={{color:'#F69F0C'}} value={50}></progress>
              <p>90%</p>
            </div>
          </div>


        </div>

      {/* Ratings */}
<div className='gridded-goals'>
          {ratings.map(rating=>
            
            <div className='' id={rating.rating_id}>
              <div style={{height:'230px',backgroundPosition: 'center', 
              backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  rating.instructor.profile_image}')`}}>
            </div>
               <h3>{rating.instructor.user.username}</h3>
               <p>{rating.rating_content}</p>
               {parse(getRatingDiv(rating.rating_value))}
            </div>

          )}

</div>  

``
            </div>


  





        </div>
    )
}

export default CourseContent