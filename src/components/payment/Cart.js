import React, { useEffect, useState } from 'react'
import cartImage from './assets/16544@2x.png'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import cartEmptyImage from './assets/folder (2)@2x.png'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'




export const Cart = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(()=>{
        axios({
            method : 'GET',
            url :URL_ROOT + '/cart_manager/',
            headers : {
                Authorization : `${localStorage.getItem('token')}`
              }
        }).then(res => {
            setCartItems(res.data)
            res.data.forEach(ci => {
              let newTotalPrice = parseInt(ci.cart_item.course.course_price) + totalPrice
              setTotalPrice(newTotalPrice)
            }) 
        }).catch(err => console.log(err))
    },[])

    
    const removeFromCart = course_id => {
        const data = JSON.stringify({
          course_id : course_id
        })
         axios({
          method:'DELETE',
          url : URL_ROOT + '/cart_manager/',
          headers : {
            "Authorization" : `${localStorage.getItem('token')}`,
            "Content-Type" : "application/json"
          },
          data : data
        }).then(res => {
          console.log(res)
          let newCartItems = cartItems.filter((i)=> i.cart_item.course.course_id != course_id);
          setCartItems(newCartItems)
        }).catch(err => console.log(err )) 
    }

    const emptyCart = () =>
        <div className='my-5 d-flex justify-content-center align-items-center'>
            <div className='my-5'>
            <img className='my-5' src={cartEmptyImage} alt="empty-cart"/>
            <h5 className='my-5'>Your Cart Is Empty</h5>
            <Link className='my-5' to="/" style={{background:'#CA5B5B', color:'#fff', padding: '10px 20px', borderRadius:'20px'}}>Browse Courses</Link>
            </div>
        </div>
     

    const courseList = () => cartItems.map( ct =>
         
        <div className='pb-5' id={ct.cart_item.course.course_id} >
          <div className='row top-courses-h my-3' id={ct.cart_item.course.course_id}>
        <Link to={`/course/${ct.cart_item.course.course_name}/${ct.cart_item.course.course_id}/`} className='col-3 h-100 w-100' style={{backgroundPosition: 'center', 
          backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  ct.cart_item.course.course_image}')`}}>
        </Link>
        
        <Link to={`/course/${ct.cart_item.course.course_name}/${ct.cart_item.course.course_id}/`} className='col-6 ms-3'>
          <div className=' d-flex justify-content-between'>
            <div style={{color:'#1080D4'}}>
               <h4>{ct.cart_item.course.course_name}</h4> 
               <h5>By {ct.cart_item.course.course_instructor.user.username}</h5>
            </div>

          </div>
          <div className=''>
                        <p className='' style={{color:'red', fontSize:'1.4rem'}}>{ct.cart_item.course.course_rate } {getRatingDiv(ct.cart_item.course.course_rate)} </p>
      <button type="button" style={{fontSize:'.8rem', margin:'0'}} className=" to-learn-btn">{ct.cart_item.course.badges}</button>
          </div>
        </Link>
        <div className='col-2 '>
        <>
        <button className='position-relative' onClick={() => removeFromCart(ct.cart_item.course.course_id)}>  
        <i  className='bx bx-x remove-from-cart'></i>
        </button>
        <p className="btn" style={{color:'#1080D4', margin:'0'}}>
                  {ct.cart_item.course.is_free ? 'Free Course' : ct.cart_item.course.course_price + "SP"}</p><br /></>
                                  
        <div className='btn' style={{border:'1px solid',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',color:'#FB0000', margin:'5px', borderRadius:'20px' ,padding:'10px'}}>
                   {ct.in_wishlist ?
                    <><i className='bx bxs-heart' ></i><br />Remove From Favourite</>
                    :<><i className='bx bx-heart' color='#FB0000' style={{fontSize:'2rem'}}></i><br/>Add To Favourite</>
                    } 
                </div> 
        </div>
      </div>
      </div>

    /* cart_item.course */

         ) 

    return (
        <div className='cart-wrapper'>
           {cartItems ?  <div className='p-5 '>
            <h3>My Shopping Cart</h3>
            <div className="card right-s-card col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {cartItems.length === 0 ? emptyCart() : <>{courseList()} 
                <div  className='link-div w-100 text-center'> 
                  <Link className='to-check' style={{padding:'10px 20px', borderRadius:'20px'}} to="/checkout">Procceed To Checkout</Link></div>
                  </> }
                
              </div>
            </div>
            </div>
            : ""}
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={cartImage} alt='cart' />
              <h4 style={{color:'#000 !important', marginTop:'20px'}}>Total Price {totalPrice}</h4>
            </div>
            </div>
    )
}



export default Cart