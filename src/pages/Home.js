import React, {useEffect, useState} from 'react'
import './assets/css/styles.css'
import home from './assets/images/home.jpg'
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


  useEffect(()=>{


      axios({
        method : 'GET',
        url: `${URL_ROOT}/home_courses/`
      }).then(res=>{

      setCourses(res.data)
      })
    
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
        <div className="home-img" style={{backgroundImage: `url("${home}")`}}></div>
        <button type="button" className="to-learn-btn">To Learn Next</button>

        <div className="category-courses">   
            { courses.map(course =>    
            <div id="pcat.parent_category.parent_category_id">
              <div className="container">
                <h1 className="color-gold">{course.parent_category.parent_category_name}</h1>    
                <CourseCarousel pcatCourses={course} getRatingDiv={getRatingDiv}/>
              </div> 
            </div>
            )}
        </div>
      </div>
    )
}




export default Home