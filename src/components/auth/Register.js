import React, {useState, useEffect, useRef} from 'react'
import './assets/css/styles.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setInstructorInfo } from '../../store/auth/authActions' 
import CircularProgress from '@mui/material/CircularProgress';
import { URL_ROOT } from '../../utils/js'
import { viewPass } from './Login'
import car1 from './assets/20670.png'
import car2 from './assets/19199667.png'
import { Checkbox } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// swiper core styles
import 'swiper/swiper.min.css'



function Register ({setToken}) {
	const [value, setValue]  =useState(50)
	const [begginer, setBegginer]  =useState(false)
	const [someK, setSomeK]  =useState(false)
	const [exp, setExp]  =useState(false)
	const [hvi, setHvi]  =useState(false)
    const [begginer2, setBegginer2]  =useState(false)
	const [someK2, setSomeK2]  =useState(false)
	const [exp2, setExp2]  =useState(false)
	const [hvi2, setHvi2]  =useState(false)
	const [isEmpty, setIsEmpty]  =useState(false)
	const [displayy, setDisplayy]  =useState(false)
	const [loading, setLoading] = useState(false)
	const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
	const [notValidData, setNotValidData] = useState(false)
    const [emailNotValid, setEmailNotValid] = useState(false)
    const [userNameAlreadyUsed, setUsernameAlreadyUsed] = useState(false)
	const history = useHistory()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const swiperRef = useRef(null)

    const user = useSelector(state => state.auth.user)
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

	useEffect(()=> {
		if (localStorage.getItem('token') != null) {
			history.push('/')
		}
	}, [history])
	
	const handleSignUpBtn = (e) => {
        setLoading(false)
        setIsEmpty(false)
        
        //e.preventDefault();
        if(firstName == "" || lastName == "" || username == "" || email == "" ||password =="" || bio == "" || document.querySelector('.profile-image').files[0] == undefined){
            setIsEmpty(true)
            return
        }
        setEmailNotValid(false)
         if (!validateEmail(email)) {
            setEmailNotValid(true)
            return
        } 
        setLoading(true)
        let form =  new FormData()
        let profile_image = document.querySelector('.profile-image').files[0]
        form.append('profile_image', profile_image)
        form.append('first_name', firstName)
        form.append('last_name', lastName)
        form.append('username', username)
        form.append('password', password)
        form.append('bio', bio)
        form.append('email', email)
        
        axios({
            method: 'POST',
            url: URL_ROOT + "/register_instructor/",
            headers: {
                "Content-Type" : "mulitpart/form-data"
            },
            data:form
        }).then(res => {
            if (res.data.token) {
                localStorage.setItem('token', `${res.data.token}`)
                setToken(res.data.token)
              dispatch({
                  type : "SET_INSTRUCTOR_INFO",
                  payload :  {
					"username" : `${username}`,
					"fisrt_name" : `${firstName}`,
					"last_name" : `${lastName}`,
					"email" : `${email}`,
                  "bio" : bio,
                  "total_students": 0,
                  "total_reviews": 0,
                  "total_rate": 0,
                  "badges": "Best-Selling Instructor",
                  "student_count": 0 ,
                  "profile_image" : `${URL_ROOT +  res.data.profile_image}`
              }
              }) 
              document.querySelector('.toggleModals').click()
              //history.push('/')      
            }

        })
        .catch(err => {
            if(err.response){
            if(err.response.data.message == "Username Already Used"){
                setUsernameAlreadyUsed(true)
            }
            else{
                setNotValidData(true)
            }
        }
            setLoading(false)

        });
        return
	}


	return(
		<div className="login-wrapper">
				<div className="login-wrapper-div">
					<h2>Sign Up And Let Us Get Started</h2>
                    <div  className="login-input-div">
                    <i className="fa fa-user"></i>
                    <input style={{border:'none'}} placeholder="Enter Your First Name" className="login-input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                </div>
                <div  className="login-input-div">
                <i className="fa fa-user"></i>
                <input style={{border:'none'}} placeholder="Enter Your Last Name" className="login-input" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
            </div>
                    <div  className="login-input-div">
                    <i className="fa fa-user"></i>
                    <input style={{border:'none'}} placeholder="Enter Your User Name" className="login-input" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>

					<div  className="login-input-div">
						<i className="fa fa-envelope"></i>
						<input style={{border:'none'}} placeholder="Enter Your Email" type="email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
					</div>
                    <div  className="login-input-div">
                    <i className="fa fa-pencil"></i>
                        <input style={{border:'none'}} placeholder="Enter Your Bio" className="login-input" value={bio} onChange={(e)=>setBio(e.target.value)} required />
                    </div>
					<div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input style={{border:'none'}} placeholder="Enter Your Password" type="password" className="login-input password-input" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={()=>viewPass()}></i>
					
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label profile-image-label">Choose Your Profile Image</label>
                        <input style={{border:'none'}} className="form-control profile-image" type="file" id="formFile" required/>
                    </div>
{/*                     <div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input style={{border:'none'}} placeholder="Confirm Your Password" type="password" className="login-input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
					</div> */}
					{ notValidData && <p style={{color:'red'}}>Please Pass Valid Credentials</p>}
                    {/* { passwordNotMatch && <p style={{color:'red'}}>Your Passwords Must Match</p>} */}
                    { emailNotValid && <p style={{color:'red'}}>Your Email Is Not Valid</p>}
                    { userNameAlreadyUsed && <p style={{color:'red'}}>Username Already Exists</p>}
					{ isEmpty &&  <p style={{color:'red'}}>Please Enter Required Info</p>}

                    
					<button  onClick={(e) => handleSignUpBtn(e)} className="btn login-btn">
                        {!loading && <i>Sign Up</i>}
                        {loading && <CircularProgress />}
                        </button>
					<div className="more-actions">
						<span>By Signing Up You Agree To Our</span>  <Link to="/privacy_and_policy">Terms And Privacy</Link><br/>
						<span>{"Already Have An Account?"}</span> 
                        
                        
                        <Link to="/login" query={{ setToken: setToken }}> Login </Link>
                        
                        
                    
                        <br/>
					</div>
				</div>	
    
    
    {/* Modal For After Register Form */}
    <button type="button" className='toggleModals' style={{display:'none'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
    </button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen" style={{maxWidth:'100vw', margin:'0'}}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
            {username} step {count} of 2
            </h5>
        <button type="button" style={{backgroundColor:'transparent', border:'none', }} data-bs-dismiss="modal">
            <a href='#'>Exit</a>
        </button>
      </div>
      <div className="modal-body overflow-hidden">
        <progress max={100} value={value} className='w-100' style={{background:'#fff', border:'1px solid #000'}}/>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        ref={swiperRef}
      spaceBetween={0}
      slidesPerView={1}
    >
            <SwiperSlide>
            <div className='d-flex p-5 justify-content-between align-items-center h-100'>
            <div className=''>
            <h5>What kind of teaching have you done before?</h5>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={begginer} style={{color:'gold'}} onChange={()=>setBegginer(!begginer)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>Informally</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={someK} style={{color:'gold'}} onChange={()=>setSomeK(!someK)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>Professionally</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={exp} style={{color:'gold'}} onChange={()=>setExp(!exp)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>Online</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={hvi} style={{color:'gold'}} onChange={()=>setHvi(!hvi)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>Other</p>
                    </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img alt='im' src={car1} style={{width:'70%'}}/>
            </div>
        </div>
        
            </SwiperSlide>
            <SwiperSlide>
            <div className='d-flex p-5 justify-content-between align-items-center h-100'>
            <div className=''>
            <h5>How much of a video “pro” are you?</h5>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={begginer2} style={{color:'gold'}} onChange={()=>setBegginer2(!begginer2)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>I'm a beginner</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={someK2} style={{color:'gold'}} onChange={()=>setSomeK2(!someK2)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>I have some knowledge</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={exp2} style={{color:'gold'}} onChange={()=>setExp2(!exp2)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>I'm experienced</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={hvi2} style={{color:'gold'}} onChange={()=>setHvi2(!hvi2)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.5rem'}}>I have videos ready to upload</p>
                    </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img alt='im' src={car2} style={{width:'70%'}}/>
            </div>
        </div>
        
            </SwiperSlide>
    </Swiper>
      </div>
      <div className="modal-footer justify-content-between">
      {displayy && <button type="button" id="0" style={{backgroundColor:'gold'}} className="btn btn-secondary" onClick={(e)=>{
                swiperRef.current.swiper.slideTo(parseInt(e.target.id))
                setCount(1)
                setDisplayy(false)
                setValue(50)
            }}>Previous</button>}
        <button type="button" id="1" className="btn btn-secondary" onClick={(e)=>{
            if(parseInt(e.target.id)===1){
                swiperRef.current.swiper.slideTo(parseInt(e.target.id))
                e.target.id = 2
                setDisplayy(true)
                setCount(2)
                setValue(100)
            }
            else{
              document.querySelector('.toggleModals').click()
                history.push('/')
            }
            }}>Continue</button>
      </div>
    </div>
  </div>
</div>

        </div>
			)


}



export default Register;
