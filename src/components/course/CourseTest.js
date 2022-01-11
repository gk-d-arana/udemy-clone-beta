import React, { useEffect, useState } from 'react'
import BackImage2 from '../../pages/assets/images/depositphotos_92448084-stock-illustration-computer-circuit-board-pattern-vector.png'
import { useParams } from 'react-router-dom'
import './assets/test.css'
import { URL_ROOT } from '../../utils/js'


const CourseTest = () => {
    const { course_id, course_name } = useParams()
    const [loading, setLoading] = useState(false)
    
    const [overview, setOverview] = useState(true)
    const [choicesTest, setChoicesTest] = useState(false)
    const [writingTest, setWritingTest] = useState(false)
    
    
    const course = {
        course_requirements : [
            { id: 1, course_requirement: 'Some HTML is needed for this course (You can get my free HTML )'}, 
            { id: 2, course_requirement: 'Some HTML is needed for this course (You can get my free HTML )'}, 
            { id: 3, course_requirement: 'Some HTML is needed for this course (You can get my free HTML )'}
        ],
        course_image : '/static/images/gk-arana.jpg'
    }
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //check for test and get course
    },[])


    return (
        <div style={{minHeight:'100vh'}}>
            {
                loading ? <p>loading</p> :
                <>
                <div style={{position:'relative', height:340, backgroundColor:'#2D7BAB'}}>
                    <div style={{
                        backgroundImage: `url('${BackImage2}')`,
                        height:'100%',
                        width:'100%',
                        opacity:0.3,
                        backgroundSize: 'contain',
                        position:  'absolute'
                    }}></div>
                    <div className='w-100 row px-3 py-4' style={{position:'absolute'}}> 
                    <div className='col-xl-7'>
                    <nav className='bc-dv p-0' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
                <ol className="breadcrumb p-0 " style={{backgroundColor:'transparent', color:'#000'}}>
                    <li style={{color:'#000', fontSize:'1.3rem'}} className="breadcrumb-item">Development</li>
                    <li style={{color:'#000', fontSize:'1.3rem'}} className="breadcrumb-item">Web Development</li>
                    <li style={{color:'#000', fontSize:'1.3rem'}} className="breadcrumb-item">Php</li>
                    <li style={{color:'#000', fontSize:'1.3rem'}} className="breadcrumb-item active" aria-current="page">Exam Tests</li>
                
                </ol>
                    </nav>
                    <button type="button" className=" to-learn-btn">Requirements</button>
                    <ul className='course_requirements p-2'>
                    {course.course_requirements?course.course_requirements.map(cr=>
                        <li style={{color:'#000', fontSize:'1.2rem'}} id={cr.id}>{cr.course_requirement}</li>
                        ):""}
                    </ul>
                    </div>
                        <div className='col-xl-4'>
                        <div className='w-100' style={{height:'95%',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`}}>
                </div>
                        </div>

                    </div>
                </div>

                <button type="button" className=" to-learn-btn">Exam Tests</button>
                <div className='cx-1 d-flex align-items-center justify-content-center'>

                    <p style={{fontSize:'1.3rem'}}>Section 1:</p>
                    <p style={{fontSize:'1.3rem', width:'70%', marginLeft:'1rem'}}>
                        You have 30 mins to did this exam and  It will be reviewed by the instructor soon
                        and we will inform you of the result.
                    </p>

                </div>
                    <p className='p-4' style={{fontSize:'1.3rem', color:'#000'}}>
                        <i className='bx bxs-chevrons-right'></i> {overview&&<>We have 3 parts of exam for you ..</>}
                        </p>
                <div className='test-content p-3'>
                    
                    {/* Page 1 Overview */}
                    {overview&&<div  className='content1'>
                        
                        
                        <div className='container'>
                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        </p>
                        <div type='submit' className='p-5 my-4 mx-auto text-center' style={{borderRadius:'20px', width:'30%', fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97', border:'none'}}>
                            <i>The First One </i>
                            </div>
            
                        
                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        </p>

                        <div type='submit' className='p-5 my-4 mx-auto text-center' style={{borderRadius:'20px', width:'30%', fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97', border:'none'}}>
                            <i>The Second On </i>
                            e</div>


                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        </p>
                        <div type='submit' className='p-5 my-4 mx-auto text-center' style={{borderRadius:'20px', width:'30%', fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97', border:'none'}}>
                            <i>The Third One </i>
                            </div>

                        </div>
                        <div className='d-flex w-100 justify-content-end align-items-center container'>
                            <h3 style={{cursor:'pointer'}} onClick={()=>{ window.scrollTo({ top: 0, behavior: 'smooth' });;setOverview(false);setChoicesTest(true)}}>Start Test <i className='bx bx-right-arrow-alt' ></i></h3>
                    </div>
                    </div>}
                    
                    {/* Page2 Choices */}

                        {choicesTest&&<div className='content2'>
                            
                        <p style={{fontSize:'1.3rem'}}>Exam 1</p>

                        
                                


                            
                        </div>}


                    {/* Page3 Writing */}
                {writingTest && <div className='content2'>writing</div>}


                </div>

                </> 
            }
        </div>
    )
}



export default CourseTest