import React, {useEffect, useState} from 'react'
import './assets/css/styles.css'
import home from './assets/images/Group 354@2x.png'
import axios from 'axios';
import {URL_ROOT} from '../utils/js'
import CourseCarousel from '../components/utilComponents/CourseCarousel'
import BackImage2 from './assets/images/depositphotos_92448084-stock-illustration-computer-circuit-board-pattern-vector.png'
import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
import Image1 from './assets/images/Group 27.png'
import Image2 from './assets/images/Group 28.png'
import HomeImage from './assets/images/Group 1577@2x.png'

export const getRatingDiv = (rating) => {
                  
  if (rating == 0){                           
  return` <span class="w-100">
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }
    
  if (rating > 0 && rating <= 0.5){                           
  return` <span class="w-100">
      <i class='bx bxs-star-half' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }


  if (rating > 0.5 && rating <= 1){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }
    
  if (rating > 1 && rating <= 1.5){                           
  return` <span class="w-100">
    <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
    <i class='bx bxs-star-half' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }

  if (rating > 1.5 && rating <= 2){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }
    
  if (rating > 2 && rating <= 2.5){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star-half' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }


  if (rating > 2.5 && rating <= 3){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }
    
  if (rating > 3 && rating <= 3.5){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star-half' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }

  if (rating > 3.5 && rating <= 4){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bx-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }

  if (rating > 4 && rating <= 4.85){                           
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star-half' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
 }     

  if (rating > 4.8){                        
  return` <span class="w-100">
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
      <i class='bx bxs-star' style="color: #F86161;font-size:1.4rem"></i>
  </span>`
  }
}


export const Home = (props) => {
  const [courses, setCourses] = useState([])
  
  const randomePcatObject = useSelector(state => state.mainData.data[0]) || {}
  

  const data = useSelector(state => state.mainData.data)


  const topCourses = useSelector(state => state.mainData.topSellingCourses)

  const [coursesPcat1, setcoursePcat1] = useState([])
  
  const [notLoggedIn, setNotLoggedIn] = useState(true)

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(localStorage.getItem('token')){
      axios({
        method : 'GET',
        headers: {
          Authorization : `${localStorage.getItem('token')}`
        },
        url: `${URL_ROOT}/home_courses/`
      }).then(res=>{
      setCourses(res.data)
      })
      setNotLoggedIn(false)
  }
  else{
    (async() => {
      while(randomePcatObject.parent_category===undefined){
        await new Promise(resolve => setTimeout(resolve, 500));
      }
        axios({
          method : 'GET',
          headers: {
            Authorization : `${localStorage.getItem('token')}`
          }, 
          
          url: URL_ROOT + '/search_courses/' + randomePcatObject.parent_category.parent_category_id
        }).then(res=>{
          console.log('done')
          setcoursePcat1(res.data)
        }).catch(err=>console.log(err))    
      })();
  }
  }, [])

  const getRandomI = () => {
    return parseInt(Math.random()*5)
  }
  let i = getRandomI()

    return (
      <div>
          <ul className="categories-ul">
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
          </ul>
          <div className="home-img mb-5" style={{ backgroundImage: `url("${home}")` }}>
          <h2 className='h4-white'>
            Improve Your Skills..<br />
            Learn without limits with Us
          </h2>
        </div>
       {!notLoggedIn && <>
       <h5 className='ms-3'>What's New</h5>
       <div style={{position:'relative', height:325, backgroundColor:'#2D7BAB'}}>
       <div style={{
         backgroundImage: `url('${BackImage2}')`,
         height:'100%',
         width:'100%',
         opacity:0.3,
         backgroundSize: 'contain',
         position:  'absolute'
       }}></div>
       <div className='w-100' style={{position:'absolute'}}>
       {topCourses[i] ? <div className='w-100 row top-courses-h mt-5 d-flex' style={{flexGrow:'0.5'}} id={topCourses[i].course.course_id}>
          <Link id={topCourses[i].course.course_id} className='w-100 row justify-content-center'
          to={`/course/${topCourses[i].course.course_name}/${topCourses[i].course.course_id}/`}>
            <div className='col-3'>
              <div className='course-home' style={{backgroundPosition: 'center', 
              backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  topCourses[i].course.course_image}')`}}>

              </div>
            </div>
            <div className='col-7'>

              <div className='d-flex justify-content-between'>
                <div>
                   <h3 style={{color:'#000'}}>{topCourses[i].course.course_name}</h3> 
                   <h5 style={{color:'#000'}}> By {topCourses[i].course.course_instructor ? topCourses[i].course.course_instructor.user.username:""}</h5>
                    <h3 className='course-h'>
                      {topCourses[i].course.course_description}
                    </h3>
                </div>
              <div className='d-flex align-items-center'>
          <button type="button" style={{fontSize:'.8rem', margin:'0', backgroundColor:'#CE0505'}} className=" to-learn-btn">Check Course</button>
              </div>

              </div>
              <div className='d-flex justify-content-end'>
                <i className='bx bx-chevron-right ms-4' style={{color:'#fff', fontSize:'5rem'}}></i>
              </div>
            </div>
              </Link>

            </div> : ""}
       </div>
       </div>


        <button type="button" className="to-learn-btn">To Learn Next</button>
        <div className="category">
            {courses.map(course => {
              if(course.courses.length ===0) return ""
               return<div key={course.course_id} id={course.course_id}>
              <div className="cx-1">
                <h3 className="">Top Courses In {course.parent_category.parent_category_name}</h3>
                <CourseCarousel pcatCourses={course} getRatingDiv={getRatingDiv} />
              </div>
            </div>
            }
            )}
          </div></>}


          {notLoggedIn && <>
        <button type="button" className="to-learn-btn">Our Courses</button>
            <div className='mx-5'>
            <h3>Choose from over 2000 online courses</h3>
              <h3>Physics , Chemistry , Math , Web Development , Python ...</h3>
            </div>
            <div className='cx-1'>

            <div className='div-1-home p-5' style={{height:'auto'}}>
              <p className='p-div-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button type="button" style={{backgroundColor:'#1080D4'}} className="my-5 to-learn-btn">Explore {randomePcatObject.parent_category? randomePcatObject.parent_category.parent_category_name:""}</button>
              <div className="cx-1 p-5">
                <CourseCarousel pcatCourses={{courses:coursesPcat1}} getRatingDiv={getRatingDiv} />
              </div>              
            
          
            </div>
            </div>
            <div className='my-4'>
              <img style={{width:'50%'}} src={Image1} alt='no1'/>
              <div className='d-flex justify-content-end'>
                <img style={{width:'50%'}} src={Image2} alt='no2'/>
              </div>
              <button type="button" className=" to-learn-btn">Students Are Viewing</button>

              <div className='cx-1 my-5'>
            <CourseCarousel pcatCourses={{courses:topCourses.map(c=>c.course)}} getRatingDiv={getRatingDiv} />
              </div>

              <button type="button" className=" to-learn-btn">Top Categories</button>
                  <div className='w-100 d-flex justify-content-center my-3'>
                  {data.map((d, index)=>{
                    if(index>2)return ""
                    return<div style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:'120px'}} className='py-5 mx-3 col-xl-3 text-center'>
                      <img style={{width:'20%'}} src={URL_ROOT + d.parent_category.parent_category_image} alt='im'/>
                      <h3>{d.parent_category? d.parent_category.parent_category_name:""}</h3>
                      <h4 style={{overflow:'hidden' ,margin:'0 auto', whiteSpace:'nowrap', textOverflow:'ellipsis'}}> {d.parent_category? d.parent_category.parent_category_description:""} </h4>
                      <h5 style={{margin:'0 auto', color:'red'}}>(134,543)</h5>
                    </div>  
                  }
                  )}
                  </div>
                  <div className='w-100 d-flex justify-content-center my-3'>
                  {data.map((d, index)=>{
                    if(index<3)return ""
                    return<div style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:'120px'}} className='py-5 mx-3 col-xl-3 text-center'>
                      <img style={{width:'20%'}} src={URL_ROOT + d.parent_category.parent_category_image} alt='im'/>
                      <h3>{d.parent_category? d.parent_category.parent_category_name:""}</h3>
                      <h4 style={{overflow:'hidden' ,margin:'0 auto', whiteSpace:'nowrap', textOverflow:'ellipsis'}}> {d.parent_category? d.parent_category.parent_category_description:""} </h4>
                      <h5 style={{margin:'0 auto', color:'red'}}>(134,543)</h5>
                    </div>  
                  }
                  )}
                  </div>
                  <Link to="/teach_with_us">
                  <img src={HomeImage} alt='imm' className='w-100'/>
                  </Link>
            </div>
          </>}
      </div>
    )
}




export default Home


