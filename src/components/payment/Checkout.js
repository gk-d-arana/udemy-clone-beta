import React, { useEffect, useState } from 'react'
import checkoutImage from './assets/20945314@2x.png'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import cartEmptyImage from './assets/folder (2)@2x.png'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'
import { useHistory } from 'react-router'



export const Checkout = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const history = useHistory()
    useEffect(()=>{

      if(!localStorage.getItem('token')){
        history.push('/login')
      }
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
        
        <Link to={`/course/${ct.cart_item.course.course_name}/${ct.cart_item.course.course_id}/`} className='col-4 ms-3'>
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
        <div className='col-4 '>
        <>

        <h3 style={{color:'#1080D4', margin:'0'}}>
                  {ct.cart_item.course.is_free ? 'Free Course' : ct.cart_item.course.course_price + "SP"}</h3><br /></>
            <p>By completing these steps you agree to our <Link to="/privacy">Privacy And Terms</Link></p>                      
        </div>
      </div>
      </div>

    /* cart_item.course */

         ) 

         const completePayment = () => {
            const data = JSON.stringify({
                payment_id : "3d81d2ed-38e8-437f-a9a8-a7cdb9043ca3"
              })
               axios({
                method:'POST',
                url : URL_ROOT + '/order_manager/',
                headers : {
                  "Authorization" : `${localStorage.getItem('token')}`,
                  "Content-Type" : "application/json"
                },
                data : data
              }).then(res => {
                console.log(res)
                history.push('/my_learning')      
              }).catch(err => console.log(err )) 
             //
         }

    return (
        <div className='cart-wrapper'>
           {cartItems ?  <div className='p-5 '>
            <h3>Payment Details</h3>
            <div className='payment-form col-xl-3 ms-5'>
                <form>
                    <select class="form-select my-5" aria-label="Default select example">
                      <option selected hidden>Country</option>
                      <option value="syria">Syria</option>
                    </select>
                    <select class="form-select my-5" aria-label="Default select example">
                      <option selected hidden>Yout Card</option>
                      <option value="card1">Card 1</option>
                    </select>
                    <div class="my-5">
                      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Your Zip Code"/>
                    </div>
                    
                    <div class="my-5">
                      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Your Mobile Number"/>
                    </div>
                </form>
            </div>
            <div className="card right-s-card col-xl-12 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {cartItems.length === 0 ? emptyCart() : <>{courseList()} <div  className='link-div w-100 text-center'> 
                
                <div className='d-flex justify-content-center'>
                <h4 style={{color:'#000 !important', marginTop:'20px'}}>Total Price {totalPrice}</h4>
                <button onClick={()=>completePayment()} className='mx-4 to-check btn' style={{backgroundColor:'#C345DD', color:'#fff', padding:'0px 10px', borderRadius:'20px'}}>Complete Payment</button>

                </div>

                  </div>
                  </> }
                
              </div>
            </div>
            </div>
            : ""}
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={checkoutImage} alt='cart' />
            </div>
            </div>
    )
}



export default Checkout