import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_ROOT } from '../utils/js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../components/course/CourseContent'
import './assets/css/p.css'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Radio } from '@mui/material'



const Search = () => {
    const { course_name } = useParams() 
    const [courses ,setCourses] = useState([])
    const [allCourses ,setAllCourses] = useState([])

    const [open, setOpen] = useState(true)
    const [rad1, setRad1] = useState(false)
    const [rad2, setRad2] = useState(false)
    const [rad3, setRad3] = useState(false)
    const [rad4, setRad4] = useState(false)
   
  
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
        axios({
            method : 'GET',
            url : URL_ROOT + '/search_courses/' + course_name + '/',
          }).then(res=>{
            setCourses(res.data)
            setAllCourses(res.data)
          }).catch(err=>console.log(err))
        
    }, [course_name])
    
    const courseList = () => courses.map( course =>
        <div className='pb-5' id={course.course_id} >
          <div className='row top-courses-h my-3' id={course.course_id}>
        <Link to={`/course/${course.course_name}/${course.course_id}/`} className='col-4 w-100' style={{backgroundPosition: 'center', 
          backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
        </Link>
        
        <Link to={`/course/${course.course_name}/${course.course_id}/`} className='col-6 ms-3'>
          <div className=' d-flex justify-content-between'>
            <div className='w-100' style={{color:'#1080D4'}}>
               <h4 className='d-flex justify-content-between'>
                  {course.course_name}
                  <span href="#" className="btn" style={{color:'#1080d4'}}><i>{course.is_free? 'Free Course' : course.course_price + "SP"}</i></span>
               </h4>
               <p style={{color:'gray'}}>{course.course_subtitle}</p> 
               <h5>By {course.course_instructor.user.username}</h5>
            </div>

          </div>
          <div className='p-page-course d-flex justify-content-between align-items-center'>
            <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course_rate } {getRatingDiv(course.course_rate)} </p>
            <p style={{color:'gray'}}>({course.course_students})</p>
          </div>
          <div className='p-page-course d-flex justify-content-between align-items-center'>
            <p style={{color:'gray'}}>{course.course_duration} Total Hours</p>
            <p style={{color:'gray'}}>{course.course_videos_count} Lectures</p>
            <p style={{color:'gray'}}>{course.course_level}</p>
          </div>
        </Link>
      <hr style={{marginTop:'1rem', height:'2px'}}/>
      </div>
      </div>

    /* cart_item.course */

        )

    const reset = () => {setCourses(allCourses)}
    const handleViewByRate = e => {
      let id = e.target.id
      if(e.target.classList.contains('bx')){
        id = e.target.parentElement.id
      }
      console.log(e.target)
      let coursess = allCourses.filter(c=>c.course_rate > parseFloat(id))
      setCourses(coursess)
    }


    return (
        <div style={{minHeight:'100vh'}}>
            <button type="button" className="to-learn-btn">Courses Like {course_name}</button>
            <div className='px-4 d-flex justify-content-end'><p>{courses.length} Results For "{course_name}"</p></div>
            <div className='m-0 row'>
                <div className='col-xl-4'>
                  
                  
                  <div style={{width:'70%'}} className='text-center' onClick={()=>reset()}>
                      <button style={{fontSize:'1.3rem', color:'red', border:'1px solid red', backgroundColor:'transparent', padding:'.5rem 1rem'}}> <i className='fa fa-gear'></i> Filter </button>
                      <hr />
                  </div>

                  <List
                  style={{width:'70%'}}
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <ListItemButton onClick={()=>setOpen(!open)}>
                      <ListItemText primary={"Ratings"} style={{color:'#1080D4', fontSize:'1.6rem'}}/>
                      {open ?  <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <form>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" >
                        <ListItemButton className='d-flex justify-content-between' sx={{ pl: 4 }} id="4.5" onClick={(e)=>handleViewByRate(e)}>
                            <Radio id="4.5" name="radio-buttons" /* checked={rad1} onClick={(e)=>setRad1(!rad1)} */ checked=''/> {getRatingDiv( 4.5, 4.5)} <span id="4.5" style={{width:'-moz-available'}}>4.5 & Up (135)</span>
                        </ListItemButton>
                        <ListItemButton className='d-flex justify-content-between' sx={{ pl: 4 }} id="4" onClick={(e)=>handleViewByRate(e)}>
                            <Radio name="radio-buttons" /* checked={rad2} onClick={(e)=>setRad2(!rad2)} */ checked='' id='4'/> {getRatingDiv( 4 ,4)}<span id='4' style={{width:'-moz-available'}}> 4 & Up (135)</span>
                        </ListItemButton>
                        <ListItemButton className='d-flex justify-content-between' sx={{ pl: 4 }} id="3.5" onClick={(e)=>handleViewByRate(e)}>
                            <Radio name="radio-buttons" /* checked={rad3} onClick={(e)=>setRad3(!rad3)} */ checked='' id='3.5'/> {getRatingDiv(3.5, 3.5)} <span id='3.5' style={{width:'-moz-available'}}>3.5 & Up (135)</span>
                        </ListItemButton>
                        <ListItemButton className='d-flex justify-content-between' sx={{ pl: 4 }} id="3" onClick={(e)=>handleViewByRate(e)}>
                            <Radio name="radio-buttons" /* checked={rad4} onClick={(e)=>setRad4(!rad4)} */ checked='' id='3'/> {getRatingDiv( 3, 3  )}<span id='3' style={{width:'-moz-available'}}> 3 & Up (135)</span>
                        </ListItemButton>
                        
                      </List>
                       
                    </Collapse>
                    </form>
                  </List>



                </div>
                <div className='col-xl-7'>
                    {courses.length > 0 ? courseList():<div className='w-100 h-100 d-flex justify-content-center align-items-center'><h3>No Courses Matched</h3></div>}
                </div>
            </div>

        </div>
    )
}
export default Search