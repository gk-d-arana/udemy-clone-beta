import React, {useState, useEffect} from 'react'
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

function Register ({setToken}) {
	const [isEmpty, setIsEmpty]  =useState(false)
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
    const user = useSelector(state => state.auth.user)
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

	useEffect(()=> {
		if (localStorage.getItem('token') != null) {
			history.push('/')
		}
	}, [])
	
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
              history.push('/')      
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
                    <input placeholder="Enter Your First Name" className="login-input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                </div>
                <div  className="login-input-div">
                <i className="fa fa-user"></i>
                <input placeholder="Enter Your Last Name" className="login-input" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
            </div>
                    <div  className="login-input-div">
                    <i className="fa fa-user"></i>
                    <input placeholder="Enter Your User Name" className="login-input" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>

					<div  className="login-input-div">
						<i className="fa fa-envelope"></i>
						<input placeholder="Enter Your Email" type="email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
					</div>
                    <div  className="login-input-div">
                    <i className="fa fa-pencil"></i>
                        <input placeholder="Enter Your Bio" className="login-input" value={bio} onChange={(e)=>setBio(e.target.value)} required />
                    </div>
					<div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input placeholder="Enter Your Password" type="password" className="login-input password-input" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={()=>viewPass()}></i>
					
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label profile-image-label">Choose Your Profile Image</label>
                        <input className="form-control profile-image" type="file" id="formFile" required/>
                    </div>
{/*                     <div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input placeholder="Confirm Your Password" type="password" className="login-input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
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
						<span>By Signing Up You Agree To Our</span>  <a href="#">Terms</a>and <a href="#">Privacy</a><br/>
						<span>{"Already Have An Account?"}</span> <a href="#">
                        
                        
                        <Link to="/login" query={{ setToken: setToken }}> Login </Link>
                        
                        
                        </a>
                        <br/>
					</div>
				</div>	
        </div>
			)


}



export default Register;
