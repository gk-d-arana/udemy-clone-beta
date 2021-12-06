import React, {useEffect, useState} from 'react'
import './assets/css/styles.css'
import home from './assets/images/Group 354@2x.png'
import Box from './assets/images/Group 354@2x.png'
import axios from 'axios';
import {URL_ROOT} from '../utils/js'
import CourseCarousel from '../components/utilComponents/CourseCarousel'


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
  const [notLoggedIn, setNotLoggedIn] = useState(true)

  useEffect(()=>{

    if(localStorage.getItem('token')){
      setNotLoggedIn(false)
      axios({
        method : 'GET',
        url: `${URL_ROOT}/home_courses/`
      }).then(res=>{

      setCourses(res.data)
      })
    }
    
  }, [])

 

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
          <div className="home-img" style={{ backgroundImage: `url("${home}")` }}>
          <h2 className='h4-white'>
            Improve Your Skills..<br />
            Learn without limits with Us
          </h2>
        </div>
       {!notLoggedIn && <>
       
        <button type="button" className="to-learn-btn">To Learn Next</button>
        <div className="category">
            {courses.map(course => <div key={course.course_id} id="pcat.parent_category.parent_category_id">
              <div className="cx-1">
                <h3 className="">Top Courses In {course.parent_category.parent_category_name}</h3>
                <CourseCarousel pcatCourses={course} getRatingDiv={getRatingDiv} />
              </div>
            </div>
            )}
          </div></>}


          {notLoggedIn && <>
        <button type="button" className="to-learn-btn">Our Courses</button>
            <div className='mx-5'>
            <h3>Choose from over 2000 online courses</h3>
              <h3>Physics , Chemistry , Math , Web Development , Python ...</h3>
            </div>
            <div className='cx-1'>
            <div className='div-1-home'>
              <p className='p-div-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            


            </div>
            </div>
          </>}
      </div>
    )
}




export default Home