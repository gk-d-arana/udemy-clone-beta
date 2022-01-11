import React, { useEffect } from 'react'
import MainImage from './assets/Group 345.png'
import component1 from './assets/Component 5 – 1.png'
import component2  from './assets/Group 348.png'
import prepare1 from './assets/Group 349.png'
import prepare2 from './assets/Group 350.png'
import prepare3 from './assets/Group 351.png'
import img1 from './assets/10088@2x.png'
import img2 from './assets/20943994@2x.png'
import img3 from './assets/Tiny women learning online on computer@2x.png'
import { Link } from 'react-router-dom'
import FinalImage from './assets/6461.png'


export const TeachWithUs = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    return (
        <div>
            <img src={MainImage} alt='main' className='w-100'/>
            <div className='container'>
                <h1>Why You Have To Start</h1>
                
                <img src={component1} alt="comp1" />
                
                <div className='w-100 d-flex justify-content-end align-items-center'>
                    <img src={component2} alt="comp2" />
                </div>

                <div className='d-flex px-5 py-3 my-3 justify-content-between align-items-center w-100' style={{backgroundColor:'#F67D20'}}>
                    <h5 style={{color:'#fff'}}>500M <br/> Students</h5>
                    <h5 style={{color:'#fff'}}>500M <br/> Courses</h5>
                    <h5 style={{color:'#fff'}}>500M <br/> Instructors</h5>
                </div>  
                <h1>How To Start</h1>
                <img alt="prepare1" src={prepare1} />
                <div className='row mx-auto my-5'>
            <div className='col-xl-6 mx-3'>
                <h5 style={{lineHeight: '40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit
 in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident,
 sunt in culpa qui officia deserunt mollit anim
 id est laborum.
                </h5>

            </div>
            <div className='col-xl-5 d-flex justify-content-center align-items-center'>
                <div>
                <img className='contact-img' src={img1} alt="mobile" />
                
             
                </div>
            </div>
                </div>
                <img alt="prepare2" src={prepare2} />
                <div className='row mx-auto my-5'>
            <div className='col-xl-6 mx-3'>
                <h5 style={{lineHeight: '40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit
 in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident,
 sunt in culpa qui officia deserunt mollit anim
 id est laborum.
                </h5>

            </div>
            <div className='col-xl-5 d-flex justify-content-center align-items-center'>
                <div>
                <img className='contact-img' src={img2} alt="mobile" />
                
             
                </div>
            </div>
                </div>
                <img alt="prepare3" src={prepare3} />
                <div className='row mx-auto mt-5'>
            <div className='col-xl-6 mx-3'>
                <h5 style={{lineHeight: '40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore
                 magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit
                 in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim
                 id est laborum. <br />
                 
 <Link to="/" className='px-4 py-2 my-5' 
 style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:'20px',fontSize:'1.6rem',color:'#fff', backgroundColor:'#CA5B5B'}}>
     <i>Get Started</i></Link>

                </h5>

            </div>
            <div className='col-xl-5 d-flex justify-content-center align-items-center'>
                <div>
                <img className='contact-img' src={img3} alt="mobile" />
                
             
                </div>
            </div>
                </div>

                <h4>Schedule lives you want ..</h4>

                <div className='row mx-auto mt-5'>
                <div className='col-xl-5 d-flex justify-content-center align-items-center'>
                <div>
                <img className='contact-img' src={FinalImage} alt="mobile" />
                </div>
            </div>
            <div className='col-xl-6 mx-3'>
                <h5 style={{lineHeight: '40px', backgroundColor:'purple', color:'#fff', padding:'20px 40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore
                 magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit
                 in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim
                 id est laborum. <br />
                </h5>


            </div>

                </div>
                <div className='d-flex justify-content-between align-items-center px-4'>
                
                <span className='px-4 py-2 my-4' 
     style={{fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97'}}>Schedule Regular Meeting</span>
    
    
    <span className='px-4 py-2 my-4' 
     style={{fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97'}}>Selecte avaialable dates</span>
    
                </div>
    
            </div>
        </div>
    )
}
