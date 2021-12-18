import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import CircularProgress from '@mui/material/CircularProgress';



const ForgotPassword = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')
    const [emailNotValid, setEmailNotValid] = useState(false)

    const centering = 'd-flex justify-content-center align-items-center w-100'
    useEffect(()=> {
		if (localStorage.getItem('token') != null) {
			history.push('/')
		}
	}, [history])
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const handleForgetBtn = (e) =>{
        e.target.disabled = true
        setEmailNotValid(false)
        if (!validateEmail(email)) {
           setEmailNotValid(true)
           e.target.disabled = false
           return
       } 
        setLoading(true)
        e.target.disabled = false
    }


    return (
        <div className={centering + ' my-4'}>
            <div className='container my-4'>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                    
                >
                    <SwiperSlide className={centering + ' text-center'}>
                        <div className='f-wrap'>
                            <h2 style={{color:''}}>Forgot Your Password? <br /> Please Enter Your Email Address</h2>
                            <div  className="login-input-div">
					        	<i className="fa fa-envelope"></i>
					        	<input placeholder="Enter Your Email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					        </div>
                            <button  onClick={(e) => handleForgetBtn(e)} className="btn login-btn">
						    {!loading && <i>Send Code</i>}
					        {loading && <CircularProgress color='secondary' />}
					        </button>
                    { emailNotValid && <p style={{color:'red'}}>Your Email Is Not Valid</p>}

                        </div>
                    
                    </SwiperSlide>
                </Swiper>
            </div>        
        </div>
    )
}

export default ForgotPassword