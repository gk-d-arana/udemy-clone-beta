import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { URL_ROOT } from '../../utils/js'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import { useSelector } from 'react-redux'
import './assets/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// swiper core styles
import 'swiper/swiper.min.css'
import { useRef } from 'react'

export const getRatingDiv = (rating, id=0) => {
                  
  if (rating === 0){                           
  return <span className="w-100" id={id}>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }
    
  if (rating > 0 && rating <= 0.5){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star-half' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }


  if (rating > 0.5 && rating <= 1){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }
    
  if (rating > 1 && rating <= 1.5){                           
  return <span className="w-100" id={id}>
    <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
    <i className='bx bxs-star-half' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }

  if (rating > 1.5 && rating <= 2){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }
    
  if (rating > 2 && rating <= 2.5){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star-half' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }


  if (rating > 2.5 && rating <= 3){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }
    
  if (rating > 3 && rating <= 3.5){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star-half' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }

  if (rating > 3.5 && rating <= 4){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bx-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }

  if (rating > 4 && rating <= 4.85){                           
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star-half' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
 }     

  if (rating > 4.8){                        
  return <span className="w-100" id={id}>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
      <i className='bx bxs-star' style={{color: "#F86161",fontSize:"1.4rem"}}></i>
  </span>
  }
}

const CourseContent = () => {
    const { course_id, course_name } = useParams()
    const history = useHistory()
    const [star1, setStar1] = useState(true)
    const [star2, setStar2] = useState(true)
    const [star3, setStar3] = useState(true)
    const [star4, setStar4] = useState(true)
    const [star5, setStar5] = useState(true)

    const [course, setCourse] = useState({})
    const [ratings, setRatings] = useState([])
    const [counter, setCounter] = useState(0)
    const [ratingValue, setRatingValue] = useState("")
    const [expandedRows, setExpandedRows] = useState([]);
    const instructor = useSelector(state => state.auth.instructor)
    const [expandState, setExpandState] = useState({});
    let currentSlide = -1
  useEffect(()=>{ 
    window.scrollByLines(-window.scrollY)
   
    axios({
        method: 'GET',
        url: URL_ROOT + '/check_course/' + course_id + '/',
        headers: {
            Authorization : `${localStorage.getItem('token')}`
        }
    }).then(res => {
        if(res.data.in_my_learning === false) history.push('/course/' + course_name + '/' + course_id)
        setCourse(res.data.course)
        setRatings(res.data.ratings)
        console.log('in1')
    }).catch(err => history.push('/course/' + course_name + '/' + course_id))
  }, [])

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

  const swiperRef = useRef(null)
  const handleCheckVideo = (id) =>{
        console.log(id)
  }

  const handleChangeDiv = (h4E) =>{
    
    let overview = document.querySelector('.overview')
    let ratings = document.querySelector('.ratings')

    if(h4E === "overview"){
      overview.classList.remove('hidden')
      ratings.classList.add('hidden')
    }
    else if(h4E === "ratings"){      
      overview.classList.add('hidden')
      ratings.classList.remove('hidden')
    }
  }


  const handleAddRating = (e)=>{
    e.preventDefault();
    let data = JSON.stringify({
      course_id: course_id,
      rating_content: ratingValue,
      rating_value: 1.0
    })
    setRatingValue("")
    axios({
      method: 'POST',
      url: URL_ROOT + '/rating_manager/',
      headers: {
          Authorization : `${localStorage.getItem('token')}`
      },
      data: data
  }).then(res=>{
    setRatings([...ratings,res.data.rating])
    }).catch(err=>console.log(err))
  }


  const handleStar1 = ()=>{
    if(0){
      
    }
  }

  return (
    <div className='mb-5 pb-5 overflow-hidden'>
        {/* Video And Course Section/Videos */}
        <div className='row video_section mb-5'>

            <div className='col-xl-8 p-0 mb-5'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              onSlideChange={(e)=>{
                async function doIt(){
                  e.slides[e.realIndex].childNodes[0].src = e.slides[e.realIndex].childNodes[0].id          
                }          

                doIt().then(()=>{
                  e.slides.forEach(sl => {
                    sl.childNodes[0].src = ""
                  })
                })
                    }}
                ref={swiperRef}
              >
            {course.sections ? course.sections.map(cs => 
              cs.videos ? cs.videos.map(video => 
                <SwiperSlide key={video.video.video_id}>
                      <video id={URL_ROOT + video.video.video} className='w-100'  controls></video>
                </SwiperSlide>            ) : ""
              ): ""  }  
              </Swiper>
          <div className='pager-div p-5 d-flex justify-content-between'> 
          <h4 onClick={()=>handleChangeDiv("overview")}>Overview</h4>
          <h4 onClick={()=>handleChangeDiv("ratings")}>Leave A Rating And A Comment</h4>
        </div>
            </div>
            
            <div className='col-xl-4 p-0' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                {course.sections ? course.sections.map(cs => 
                
            <List key={cs.section.section_id}
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton  onClick={(e)=>handleExpandRow(e,cs.section.section_id)}>
        <ListItemText style={{fontSize:'1.4rem'}}>
            <div className='w-100 d-flex justify-content-between'>
        <span>{cs.section.section_name} </span> <span>{cs.videos? cs.videos.length : ""} Lectures</span>
            </div>
        </ListItemText>
        {expandedRows.includes(cs.section.section_id) ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
        {/*setCounter(counter+1)
         id={counter}  }
        */}
      <Collapse in={expandedRows.includes(cs.section.section_id)} timeout="auto" unmountOnExit>
        {cs.videos? cs.videos.map(video =>{
          currentSlide++
          return <List key={video.video.video_id} >
          <div className='d-flex px-3' id={currentSlide} style={{cursor:'pointer'}}>
              <input id={video.id} className='mx-3' type="checkbox"onChange={(e)=>{
                e.target.checked = !(e.target.checked)
                handleCheckVideo(e.target.id)
                }} checked={video.is_watched} />
            <p id={currentSlide}
             onClick={(e)=>swiperRef.current.swiper.slideTo(parseInt(e.target.id))} className='m-0 w-100' 
             >{video.video.video_title}</p>
          
          </div>
        </List>
        }
          ) : ""}
      </Collapse>

    </List>
    ) : ""}
    
            </div>

        </div>


    { course.course ?
        <div>
          <h3 className='ms-3 mt-3' style={{ color: '#1080d4' }}>
          {course.course.course_name}
        </h3>
          <div className='overview p-5'>
              <button type="button" className="to-learn-btn" style={{ margin: '0' }}>About</button>
              <div className='p-3'><h5>{course.course.course_subtitle}</h5>
                <h5><b>Skill Level:</b>{course.course.course_level}</h5>
                <h5><b>Number Of Students:</b>{course.course.course_students}</h5>
                <h5><b>Language:</b>{course.course.course_language}</h5>
                <h5><b>Lectures:</b>{course.course.course_videos_count} Lectures</h5>
              </div>
              <button type="button" className="to-learn-btn" style={{ margin: '0' }}>Description</button>
              <h5 className='p-3'>{course.course.course_description}</h5>
          </div>
        </div>  : ""}

        <div className='ratings hidden p-5'>
          <button type="button" className="to-learn-btn" style={{margin:'0'}}>Rating</button>

          <div className='row w-100'>
            <div className='col-xl-6 text-center'>
              <h5 className='mt-4'>How Would You Like To Rate This Course</h5>
              <div style={{cursor:'pointer'}}>
              <i className='bx bx-star mx-2' style={{color: "#F86161",fontSize:"1.8rem"}}></i>
              <i className='bx bx-star mx-2' style={{color: "#F86161",fontSize:"2rem"}}></i>  
              <i className='bx bx-star mx-2' style={{color: "#F86161",fontSize:"2.2rem"}}></i> 
              <i className='bx bx-star mx-2' style={{color: "#F86161",fontSize:"2.4rem"}}></i> 
              <i className='bx bx-star mx-2' style={{color: "#F86161",fontSize:"2.6rem"}}></i> 
              </div>
            </div>

            <div className='col-xl-6 d-flex justify-content-center'>
              <div class='gridded-overview'>
              <div className='text-center'>
              
              {star1 &&<div style={{cursor:'pointer'}}><i className='bx bx-star mx-2' onClick={()=>{setStar1(false)}} style={{color: "#F86161",fontSize:"1.8rem"}}></i><br/></div>}
                {!star1 &&<div style={{cursor:'pointer'}}> <i className='bx bxs-star mx-2' onClick={()=>{setStar1(true)}} style={{color: "#F86161",fontSize:"1.8rem"}}></i><br/></div>}
                {star2 && <div style={{cursor:'pointer'}}><i className='bx bx-star mx-2' onClick={()=>{  setStar1(false);setStar2(false)}} style={{color: "#F86161",fontSize:"2rem"}}></i><br/></div>}
                {!star2 &&<div style={{cursor:'pointer'}}> <i className='bx bxs-star mx-2' onClick={()=>{setStar1(true);setStar2(true)}} style={{color: "#F86161",fontSize:"2rem"}}></i><br/></div>}
                {star3 && <div style={{cursor:'pointer'}}><i className='bx bx-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.2rem"}}></i><br/></div>}
                {!star3 &&<div style={{cursor:'pointer'}}> <i className='bx bxs-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.2rem"}}></i><br/></div>}
                {star4 && <div style={{cursor:'pointer'}}><i className='bx bx-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.4rem"}}></i><br/></div>}
                {!star4 &&<div style={{cursor:'pointer'}}> <i className='bx bxs-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.4rem"}}></i><br/></div>}
                {star5 && <div style={{cursor:'pointer'}}><i className='bx bx-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.6rem"}}></i><br/></div>}
                {!star5 &&<div style={{cursor:'pointer'}}> <i className='bx bxs-star mx-2' onClick={()=>{}} style={{color: "#F86161",fontSize:"2.6rem"}}></i><br/></div>}
              
              </div>
              
              <div>
              <h5>Awful</h5>
              <h5 style={{margin:'8px 0'}}>Disappointed</h5>
              <h5 style={{margin:'8px 0'}}>Could Be Better</h5>
              <h5 style={{margin:'15px 0'}}>Good</h5>
              <h5 style={{margin:'8px 0'}}>Amazing</h5>
              </div>
              </div>
            </div>
            
          </div>
          <button type="button" className="to-learn-btn" style={{margin:'10px 0 0 0'}}>Comments</button>
          <div className='gridded-goals2 my-5'>
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
                <form className='col-xl-8' onSubmit={(e)=>handleAddRating(e)}>
                  <div className='d-flex w-100'>
                  <div className="nav-item username">
                    {instructor.user ? instructor.user.username : "Username"}
                  </div>
                  <input placeholder="Enter Your Comment" className="login-input" value={ratingValue} onChange={(e)=>setRatingValue(e.target.value)} required/>
                  <input type="submit" hidden/>
                  </div>
                </form>
        </div>

    </div>
  )
}

export default CourseContent