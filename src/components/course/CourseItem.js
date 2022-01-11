import React from 'react'
import { Link } from 'react-router-dom'


const CourseItem = ({course, inWishlist, setInWishlist, inCart, setInCart, addToCart, removeFromWishlist, addToWishlist}) => {
    return (
        <div className={"p-4 hov-of-c hidden hov-" + course.course_id} style={{backgroundColor:'#E9DFDD' }}>
            <h4>{course.course_name}</h4>    
          <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.badges}</button>
            <div className='d-flex justify-content-around align-items-center mt-4'>
                <p style={{color:'#1080D4'}}>{course.course_level}</p>
                <p style={{color:'#1080D4'}}>{course.course_subtitle}</p>
            </div>
                <p className='px-3 w-100' style={{color:'#1080D4', maxHeight:'60px', overflow:'hidden'}}>{course.course_description}</p>

            {course.course_learning_goals ? course.course_learning_goals.map((clg, index) =>{

                if(index > 1) return ""
                return<div className='gridded-goal d-flex'>
                        <div className='col-2'><i style={{fontSize:"2rem"}} className='bx bx-check'></i></div>
                    <div className='col-10'>{clg.learning_goal}</div>
                </div>
            }
            ):""}
        {inCart? <Link to="/cart"><div className='btn' style={{ backgroundColor: '#C345DD', color: '#fff', margin: '5px' }}>Go To Cart</div><br /></Link> : 
        <div className='d-flex justify-content-around align-items-center'>
            <div onClick={()=> addToCart()} className='btn' style={{ backgroundColor: '#C345DD', color: '#fff', margin: '5px', padding:'10px 40px' }}>Add To Cart</div>
            {inWishlist ?
             <div onClick={()=>removeFromWishlist(course.course_id)} className='btn' style={{color:'#FB0000', margin:'5px'}}>
              <i  className='bx bxs-heart' style={{fontSize:'2rem'}}></i><br />
                        </div>
                 :<div onClick={()=>addToWishlist(course.course_id)} className='btn' style={{color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                        <i  className='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i><br/>
                        </div>
                        }
        </div>
        }
        

        </div>
    )
}

export default CourseItem