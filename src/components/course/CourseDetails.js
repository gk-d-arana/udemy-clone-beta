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
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Divider from './assets/Path 32@2x.png'
import { useSelector } from 'react-redux'
import Tick from './assets/check (1)@2x.png'
import { useDispatch } from 'react-redux'
import { getRatingDiv } from './CourseContent'
import { useHistory } from 'react-router'
import BackImage2 from '../../pages/assets/images/depositphotos_92448084-stock-illustration-computer-circuit-board-pattern-vector.png'


export const getRatingList = (ratings) => {
  let ratingPercentage = [0, 0, 0, 0, 0]
  if(ratings.length === 0) return ratingPercentage
  for (let index = 0; index < ratings.length; index++) {
    if(ratings[index].rating_value >= 0 && ratings[index].rating_value < 1) { 
        ratingPercentage[0] += 1
    }
    if(ratings[index].rating_value >=1 && ratings[index].rating_value < 2) { 
      ratingPercentage[1] += 1
    }
    if(ratings[index].rating_value >= 2 && ratings[index].rating_value < 3) { 
      ratingPercentage[2] += 1
    }
    if(ratings[index].rating_value >= 3 && ratings[index].rating_value < 4) { 
      ratingPercentage[3] += 1
    }
    if(ratings[index].rating_value >= 4 && ratings[index].rating_value <= 5) { 
      ratingPercentage[4] += 1
    }
  }
  for (let i = 0; i < ratingPercentage.length; i++) {
    ratingPercentage[i] = ratingPercentage[i] * 100 /ratings.length
  }
  return ratingPercentage
}









export const CourseDetails = (props) => {
    const topSellingCourses = useSelector(state => state.mainData.topSellingCourses)    
    const [course, setCourse] = useState({})
    const [inCart, setInCart] = useState(false)
    const [inWishlist, setInWishlist] = useState(true)
    const [inMyLearning, setInMyLearning] = useState(true)
    const [open, setOpen] = useState(true)
    const { course_id } = useParams();
    const [ratings, setRatings] = useState([])
    const [showAddToCart, setShowAddToCart] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    
  
    const [expandedRows, setExpandedRows] = useState([]);

    // State variable to keep track which row is currently expanded.
    const [expandState, setExpandState] = useState({});
  
    /**
     * This function gets called when show/hide link is clicked.
     */
    const handleExpandRow = (event, sectionId) => {
      const currentExpandedRows = expandedRows;
      const isRowExpanded = currentExpandedRows.includes(sectionId);
  
      let obj = {};
      isRowExpanded ? (obj[sectionId] = false) :  (obj[sectionId] = true);
      setExpandState(obj);
  
      // If the row is expanded, we are here to hide it. Hence remove
      // it from the state variable. Otherwise add to it.
      const newExpandedRows = isRowExpanded ?
            currentExpandedRows.filter(id => id !== sectionId) :
            currentExpandedRows.concat(sectionId);
  
      setExpandedRows(newExpandedRows);
    }
    
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
          setInMyLearning(res.data.in_my_learning)
          axios({
            method: 'GET',
            url : URL_ROOT + '/course_ratings/' + res.data.course.course_id
          }).then(res=>{
            setRatings(res.data)
        })
        })
      
    }, [course_id])


    const addToCart = () => {
      const data = JSON.stringify({
        course_id : course_id
      })

      axios({
        method:'POST',
        url : URL_ROOT + '/cart_manager/',
        headers : {
          "Authorization" : `${localStorage.getItem('token')}`,
          "Content-Type" : "application/json"
        },
        data : data
      }).then(res => { 
        console.log(res.data)
        setInCart(true)
        document.querySelector('.show-btn-cart').click()
      }).catch(err => {
         console.log(err)
      })
    } 


    const addToWishlist = courseId => {
      const data = JSON.stringify({
        course_id : courseId
      })
       axios({
        method:'POST',
        url : URL_ROOT + '/manage_wishlist/',
        headers : {
          "Authorization" : `${localStorage.getItem('token')}`,
          "Content-Type" : "application/json"
        },
        data : data
      }).then(res => {
        console.log(res)
        setInWishlist(true)
      }).catch(err => console.log(err )) 
  }

    const removeFromWishlist = courseId => {
      const data = JSON.stringify({
        course_id : courseId
      })
       axios({
        method:'DELETE',
        url : URL_ROOT + '/manage_wishlist/',
        headers : {
          "Authorization" : `${localStorage.getItem('token')}`,
          "Content-Type" : "application/json"
        },
        data : data
      }).then(res => {
        console.log(res)
        setInWishlist(false)
      }).catch(err => console.log(err )) 
  }



  const handleBuytests = () =>{ 
    console.log('bought')
    //perform http request to  buy test

    //success => 
    history.push('/' + course.course_id + '/' + course.course_name + '/course_tests')
    //err => history.push('/wallet)
  }


  const addTcToWishlist = courseId => {
    const data = JSON.stringify({
      course_id : courseId
    })
     axios({
      method:'POST',
      url : URL_ROOT + '/manage_wishlist/',
      headers : {
        "Authorization" : `${localStorage.getItem('token')}`,
        "Content-Type" : "application/json"
      },
      data : data
    }).then(res => {
      console.log(res)
      dispatch({
        type : 'COURSE_FAVOURITE',
        payload : courseId
      })
    }).catch(err => console.log(err )) 
}

  const removeTcFromWishlist = courseId => {
    const data = JSON.stringify({
      course_id : courseId
    })
     axios({
      method:'DELETE',
      url : URL_ROOT + '/manage_wishlist/',
      headers : {
        "Authorization" : `${localStorage.getItem('token')}`,
        "Content-Type" : "application/json"
      },
      data : data
    }).then(res => {
      console.log(res)
      dispatch({
        type : 'COURSE_FAVOURITE',
        payload : courseId
      })
    }).catch(err => console.log(err )) 
}

    return ( 
        <div className='my-3'>
            <div className='wrapper1 cx-1 d-flex'>
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
      {getRatingDiv(course.course_rate) }

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
                    {inCart? <Link to="/cart"><div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Cart</div><br /></Link> : 
                    inMyLearning ? <Link to={"/course" + course.course_name + "/" + course.course_id +  "/course_content"}><div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></Link>:
                    <><div>
                                <div onClick={()=> addToCart()} className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Add To Cart</div><br />
                                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Buy Now</div> <br />
                                <span href='#' style={{color:'#686EAD'}}>Apply Coupon</span><br /></div></>}
                            
                    <div className='d-flex align-items-center justify-content-between'>

                            {inWishlist ?
             <div onClick={()=>removeFromWishlist(course.course_id)} className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
             color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
              <i  className='bx bxs-heart' ></i><br />Remove From Favourite
                        </div>
                 :<div onClick={()=>addToWishlist(course.course_id)} className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                 color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                        <i  className='bx bx-heart' color='#FB0000' style={{fontSize:'1.2rem'}}></i><br/>Add To Favourite
                        </div>
                        }
                    <p className="btn color-gold">{course.is_free? 'Free Course' : course.course_price + "SP"}</p><br />

                    </div>

                  </div>
                </div>
            </div>

            </div>
            

            <div className='course-content my-5'>
    <div className='cx-1'>        <button type="button" className="to-learn-btn">Course Content</button>
              
              
              
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
      <ListItemButton onClick={(e)=>handleExpandRow(e,cs.section_id)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={cs.section_name} style={{color:'#1080D4', fontSize:'1.4rem'}}/>
        {open && expandedRows.includes(cs.section_id) ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open && expandedRows.includes(cs.section_id)} timeout="auto" unmountOnExit>
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
</div>




{/* Buy Test */}

<div style={{position:'relative', height:275, backgroundColor:'#2D7BAB'}}>
       <div style={{
         backgroundImage: `url('${BackImage2}')`,
         height:'100%',
         width:'100%',
         opacity:0.3,
         backgroundSize: 'contain',
         position:  'absolute'
       }}></div>
       <div className='w-100 row p-5' style={{position:'absolute'}}>
         <div className='col-xl-10'>
        <h3>To View Tests You Have To Buy It First</h3>
        <h3> <i className='bx bx-pencil'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua.</h3>
         </div>

       <div className='col-xl-2'>
       <button onClick={()=>handleBuytests()} className='px-4 py-2 my-4' 
     style={{fontSize:'1.3rem',color:'#fff', backgroundColor:'#CE0505', border:'none'}}>Buy Test Now {course.course_tests_price}</button>
    
       </div>

       </div>
       </div>






<div className='cx-1'>
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
          return<>
            <div className='row top-courses-h my-3' id={tc.course.course_id}>
            <div className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
              backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  tc.course.course_image}')`}}>
            </div>
            <div className='col-7'>
          <Link id={tc.course.course_id} to={`/course/${tc.course.course_name}/${tc.course.course_id}/`}>

              <div className='d-flex justify-content-between'>
                <div style={{color:'#1080D4'}}>
                   <h4>{tc.course.course_name}</h4> 
                </div>
              <div className='d-flex align-items-center'>
                <h5 style={{color:'gray'}}><i className='bx bx-people'></i>{tc.course.course_students}Students</h5>
                {tc.in_my_learning ?  <>
                <div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px' }}>Go To Course</div><br /></> :
                <><p className="btn" style={{color:'#1080D4', margin:'0'}}>
                  {tc.course.is_free ? 'Free Course' : tc.course.course_price + "SP"}</p><br /></>
                                  }
              </div>

              </div>
              <div className='d-flex justify-content-between'>
          <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{tc.course.badges}</button>
                            <p style={{color:'red'}}>{tc.course.course_rate} <i className='bx bxs-star'></i></p>
              </div>
              </Link>
            </div>
            <div className='col-2'>
            {tc.in_wishlist ?
             <div onClick={()=>{
              tc.in_wishlist = false
              removeTcFromWishlist(tc.course.course_id)
              }
            } className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
             color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
              <i  className='bx bxs-heart' ></i><br />Remove From Favourite
                        </div>
                 :<div onClick={()=>{tc.in_wishlist = true;addTcToWishlist(tc.course.course_id)}} className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                 color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                        <i  className='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i><br/>Add To Favourite
                        </div>
                        }
                    </div> 
            </div>
          
          </>
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
             <div  className='d-flex justify-content-end align-items-center w-100'>
               <Link style={{color:"purple"}} to={"/instructor/"  + course.course_instructor.user.username+  "/" +  course.course_instructor.id }>
                  Read More
               </Link>
             </div>
        </div>: ""}
        


        {/* Students Feedback */}
        <button type="button" className=" to-learn-btn">Students Feedback</button>
        <div className='row container'>
            <div className='col-4 text-center rev-col'>
              <h1>{course.course_rate}</h1>
           {getRatingDiv(course.course_rate)}
           <h3>{ratings.length + "   "} Reviews</h3>
            </div>

          <div className='col-8'>
            {getRatingList(ratings).map( (e,key) =>  
            <div className='d-flex justify-content-between align-items-center'>
              <p>{key+1} Stars</p>
                <progress max={100} style={{width:'300px'}} value={e}></progress>
                
              <p>{parseInt(e)}%</p>
            </div>
            )}
          </div>


        </div>

      {/* Ratings */}
<div className='gridded-goals2-t my-4'>

          {ratings.map(rating=>
              <div  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={rating.rating_id} className='row r1 p-4'>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + rating.instructor.profile_image}')`
                }}>
                </div>
                <h5>{rating.instructor.user.username}</h5>
                <span className='col-xl-5'>{getRatingDiv(rating.rating_value)}</span>     
              </div>
              <div className='my-3'>
                <p>{rating.rating_content}</p>
              </div>
            </div>

          )}
</div>  
</div>



      {/*  Added To Cart  */}
                <button type="button" style={{display:'none'}} className="show-btn-cart btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" style={{minWidth:'50%', minHeight:'80%'}}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Added To Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex justify-content-between align-items-center">
                        <img src={Tick} alt="tick" />
                        <div className='col-4' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
                       </div>
                       <h4>{course.course_name}</h4>
                       <span onClick={(e)=>{
        document.querySelector('.show-btn-cart').click()
        history.push('/cart')
                       }} to="/cart"><div className='btn' style={{ backgroundColor: '#686EAD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Go To Cart</div><br />
                       </span>
                      </div>
                    </div>
                  </div>
                </div>
               
            </div>


  





        </div>
    )
}

export default CourseDetails