import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { URL_ROOT } from '../../utils/js'


const ForgotPassword = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    
    const [codeWrong, setCodeWrong] = useState('')

    const [loading, setLoading] = useState('')
    const [newPassword, setNewPassword] = useState("")
    const [newConfirmPassword, setNewConfirmPassword] = useState("")
    const [notMatchedPasswords, setNotMatchedPasswords] = useState(false)
    const [codeId, setCodeId] = useState('')
    const [loadingCode, setLoadingCode] = useState(false)

    const [emailNotValid, setEmailNotValid] = useState(false)
    const swiperRef = useRef(null)
    
    const viewPass = (e) => {
        e.target.previousElementSibling.type === "text" ? e.target.previousElementSibling.type = "password" : e.target.previousElementSibling.type = "text" 
    }
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
        e.preventDefault();
        e.target.forget_btnn.disabled = true
        setEmailNotValid(false)
        if (!validateEmail(email)) {
           setEmailNotValid(true)
           e.target.disabled = false
           return
       }
       let data = JSON.stringify({
           email : email
       })
       setLoading(true)
       swiperRef.current.swiper.slideTo(1)
 /*       axios({

        method: 'POST',
        url: URL_ROOT + "/reset_password/",
        headers: {
            "Content-Type" : "application/json"
        },
        data:data
    }).then(res=>{
        setCodeId(res.data.id)
        e.target.disabled = false

    }).catch(err=>console.log(err)) */
    }

    const handleChangePass = (e) => {
        e.preventDefault()
        setNotMatchedPasswords(false)
        if(newPassword !==  "" && newPassword !== newConfirmPassword){
            setNotMatchedPasswords(true)
            return
        }
        let data = ({
            code_id : codeId,
            sent_code : code
        })

        axios({

            method: 'POST',
            url: URL_ROOT + "/check_code/",
            headers: {
                "Content-Type" : "application/json"
            },
            data:data
        }).then(res=>{
            let data2 = JSON.stringify({
                new_password : newPassword
            })
            axios({

                method: 'PUT',
                url: URL_ROOT + "/reset_password/",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `${res.data.token}`
                },
                data:data2
            }).then(res=>{
                history.push('/login')
            }).catch(err=>console.log(err))
        }).catch(err=>setCodeWrong(true))
    } 

    return (
        <div className={centering + ' my-4'}>
            <div className='container my-4'>
                <Swiper
                  spaceBetween={22}
                  slidesPerView={1}
                    ref={swiperRef}   
                >
                    <SwiperSlide className={centering + ' text-center'}>
                        <form onSubmit={(e)=>handleForgetBtn(e)} className='f-wrap'>
                            <h2 style={{color:''}}>Forgot Your Password? <br /> Please Enter Your Email Address</h2>
                            <div  className="login-input-div">
					        	<i style={{fontSize:'1.3rem'}} className="fa fa-envelope"></i>
					        	<input style={{border:'none'}} placeholder="Enter Your Email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
					        </div>
                            <button name='forget_btnn' type='submit' className="btn login-btn">
						    {!loading && <i>Send Code</i>}
					        {loading && <CircularProgress color='secondary' />}
					        </button>
                    { emailNotValid && <p style={{color:'red'}}>Your Email Is Not Valid</p>}

                        </form>
                    
                    </SwiperSlide>
                    <SwiperSlide className={centering + ' text-center'}>
                        <form onSubmit={(e)=>handleChangePass(e)} className='f-wrap'>
                            <h2 style={{color:''}}>you will receive an email with code to allowing you to reset your password
                            </h2>
                            <div  className="login-input-div col-xl-5 mx-auto">
					        	<i style={{fontSize:'1.3rem'}} className="bx bx-barcode"></i>
					        	<input style={{border:'none'}} placeholder="Enter Your Code" className="login-input" value={code} onChange={(e)=>setCode(e.target.value)} required/>
					        </div>
                    
                            <div className="login-input-div col-xl-5 mx-auto">
					<i className="fa fa-lock"></i>

						<input style={{border:'none'}} placeholder="Enter New Password" type="password" className="login-input" 
                        value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={(e)=>viewPass(e)}></i>
					
                    </div>

            <div className="login-input-div col-xl-5 mx-auto">
					<i className="fa fa-lock"></i>

						<input style={{border:'none'}} placeholder="Confirm New Password" type="password" className="login-input"
                         value={newConfirmPassword} onChange={(e)=>setNewConfirmPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={(e)=>viewPass(e)}></i>
			
            		</div>
                            <button name='forget_btnn' type='submit' className="btn login-btn">
						    {!loadingCode && <i>Change Password</i>}
					        {loadingCode && <CircularProgress color='secondary' />}
					        </button>
                    { codeWrong && <p style={{color:'red'}}>Your Code Is Not Valid</p>}

                        </form>
                    
                    </SwiperSlide>
                </Swiper>
            </div>        
        </div>
    )
}

export default ForgotPassword