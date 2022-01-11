import React, { useEffect, useState } from 'react'
import './assets/styes.css'
import { getRatingDiv } from '../course/CourseContent'
import { URL_ROOT }  from '../../utils/js'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import PaginationComp from '../utilComponents/Pagination';



const AllCourses = () => {
    
    const [courses, setCourses] = useState([])
    const [page, setPage]= useState(1)
    const [count, setCount]= useState(1)
    const { path } = useRouteMatch()
    const handleDelete = (cc) => {   
        document.querySelector('.rsab').click()
        document.querySelectorAll('.modal-backdrop').forEach(mb=>{
            mb.classList.add('w-100')
        })
        
        document.querySelectorAll('.confi-b').forEach(cb => {
            cb.addEventListener('click', e =>{
                if(e.target.id === "yes"){
                     let data = JSON.stringify({'course_id':cc.target.id})
                    axios({
                        method: "DELETE",
                        url : `${URL_ROOT}/delete_course/`,
                        data : data,
                        headers : {
                            Authorization : `${localStorage.getItem('token')}`
                          },
                    }).then(res=>{
                        let courses_ = courses
                        courses_.splice(courses_.indexOf(courses_.find(c => c.course_id === cc.target.id)), 1)
                        setCourses([...courses_])
                        //setPage(res.data.next ?parseInt( res.data.next.split('?')[1].split('=')[1]) : 1)
                    }).catch(err=>console.log(err))
                }
                document.querySelector('.hide-rasb').click()
            })
        })
        /* 
        
         */
        }
        const handleEdit = (e) => {
            
    }
    
    useEffect(()=>{
        console.log()
        axios({
            method: "GET",
            url : `${URL_ROOT}/courses/?page=` + page
        }).then(res=>{
            setCourses(res.data.results)
            setCount(Math.ceil(res.data.count/10))
            //setPage(res.data.next ?parseInt( res.data.next.split('?')[1].split('=')[1]) : 1)
          }).catch(err=>console.log(err))
    },[page])

    return (
        <div className='container'>
            <div className='gridded-tc my-5 container'>
                    {courses.map(course =>
                <Link to={"/control_panel/course_info/"+course.course_id} key={course.course_id} className="card h-100"style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', top:0, borderRadius:'40px'}}>
                <div className='card-head'>
            <div  to={`/course/${course.course_name}/${course.course_id}/`} className='w-100 h-100' style={{backgroundPosition: 'center', 
            backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`, display:'block',  borderRadius:'40px'}}>
            </div>
                </div>
                    <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        {course.course_name}
                    <span className='d-flex align-items-center justify-content-between'> 
                    <i  id={course.course_id} onClick={(e)=>handleDelete(e)} className='bx px-2 bx-trash' style={{cursor:'pointer', color:'red'}}></i>
                        <i id={course.course_id} onClick={(e)=>handleEdit(e)} className='bx px-2 bx-edit' style={{cursor:'pointer'}}></i></span>
                        </h5>

                    <p className="card-text">By {course.course_instructor ? course.course_instructor.user.username:""}</p>
                    <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course_rate } {getRatingDiv(course.course_rate)} </p>
                    <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                    {course.is_free ? 'Free Course' : course.course_price + "SP"}</p><br />
                    <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.badges}</button>
        
                    </div>
        
                </Link>   
            )}
            </div>
             <PaginationComp count={count} setPage={setPage}/>

            <div className='my-4 d-flex justify-content-evenly'>
                <Link to={path.split('/all_courses')[0] + '/add_parent_category'}><button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add Parent Category</button></Link>
                <Link to={path.split('/all_courses')[0] + '/add_category'}><button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add Category</button></Link>
                <Link to={path.split('/all_courses')[0] + '/add_course'}><button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add Course</button></Link>
            </div>
                        <button type="button" style={{display:'none'}} className="hidden rsab  btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmDelete">
                        <button type="button" className="hide-rasb btn btn-secondary" style={{display:'none'}} data-bs-dismiss="modal">Close</button>

                        </button>
                        <div className="w-100 modal fade" id="confirmDelete" tabIndex="-1" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                              <div className="modal-body d-flex justify-content-between">
                                    <p>You Want To Delete This Course</p>
                                    <div className='d-flex justify-content-between col-xl-2'>
                                        <p className='confi-b' id="yes" style={{cursor:'pointer', color:'green'}}> Yes</p>
                                        <p className='confi-b' id="no" style={{cursor:'pointer', color:'red'}}>No</p>
                                    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                    
        </div>
    )
}

export default AllCourses