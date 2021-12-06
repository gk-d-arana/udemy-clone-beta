import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import wishlistImage from './assets/19199404@2x.png'
import wishlistEmptyImage from './assets/folder (2)@2x.png'

import { Link } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'




export const Wishlist = (props) => {
    const [cartItems, setCartItems] = useState([])
    useEffect(()=>{
        axios({
            method : 'GET',
            url :URL_ROOT + '/manage_wishlist/',
            headers : {
                Authorization : `${localStorage.getItem('token')}`
              }
        }).then(res => {
            setCartItems(res.data.courses)
        }).catch(err => console.log(err))
    },[])

    
    const removeFromWishlist = course_id => {
        const data = JSON.stringify({
          course_id : course_id
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
          let newCartItems = cartItems.filter((i)=> i.course_id !== course_id);
          setCartItems(newCartItems)
        }).catch(err => console.log(err )) 
    }

    const emptyCart = () =>
        <div className='my-5 d-flex justify-content-center align-items-center'>
            <div className='my-5'>
            <img className='my-5' src={wishlistEmptyImage} alt="empty-cart"/>
            <h5 className='my-5'>Your Wishlist Is Empty</h5>
            <Link className='my-5' to="/" style={{background:'#CA5B5B', color:'#fff', padding: '10px 20px', borderRadius:'20px'}}>Browse Courses</Link>
            </div>
        </div>
     

    const courseList = () => cartItems.map( course =>
         
        <div className="card h-100" style={{top:'0'}}>
            <div className='card-head'>
        <Link to={`/course/${course.course_name}/${course.course_id}/`} className='w-100 h-100' style={{backgroundPosition: 'center', 
          backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  course.course_image}')`, display:'block'}}>
        </Link>
            </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                      {course.course_name}
                      <i onClick={()=>removeFromWishlist(course.course_id)} style={{color:'red', fontSize:'2rem', cursor:'pointer'}} className='bx bxs-heart' ></i>
                      </h5>
                  <p className="card-text">By {course.course_instructor.user.username}</p>
                  <p className='' style={{color:'red', fontSize:'1.4rem'}}>{course.course_rate } {getRatingDiv(course.course_rate)} </p>
                  <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                  {course.is_free ? 'Free Course' : course.course_price + "SP"}</p><br />
                  <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{course.badges}</button>

                </div>

              </div>
         


         ) 

    return (
        <div className='cart-wrapper'>
           {cartItems ?  <div className='p-5 '>
            <h3>My Wishlist</h3>
            <div className="card col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {cartItems.length === 0 ? emptyCart() : <div className='gridded-goals3'>{courseList()}</div> }
                
              </div>
            </div>
            </div>
            : ""}
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={wishlistImage} alt='cart' />
            </div>
            </div>
    )
}



export default Wishlist