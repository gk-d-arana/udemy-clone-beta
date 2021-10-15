import React, {useState, useEffect} from 'react'
import './assets/css/styles.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setInstructorInfo } from '../../store/auth/authActions' 

function Register ({setToken}) {

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
        setEmailNotValid(false)
        if (!validateEmail(email)) {
            setEmailNotValid(true)
            return
        }
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
            url: "http://localhost:8000/register_instructor/",
            headers: {
                "Content-Type" : "mulitpart/form-data"
            },
            data:form
        }).then(res => {
            localStorage.setItem('token', `${res.data.token}`)
            setToken(res.data.token)
            if (res.data.token) {
              let instructor = {
                  "username" : username,
                  "fisrt_name" : firstName,
                  "last_name" : lastName,
                  "email" : email,
                  "bio" : bio,
                  "total_students": 0,
                  "total_reviews": 0,
                  "total_rate": 0,
                  "badges": "Best-Selling Instructor",
                  "student_count": 0 ,
                  "profile_image" : `http://localhost:8000/${res.data.profile_image}`
              }
              dispatch({
                  type : "SET_INSTRUCTOR_INFO",
                  payload : instructor
              }) 
              history.push('/')      
            }
            else if(res.data.message == "Username Already Used"){
                setUsernameAlreadyUsed(true)
            }
            else{
            setNotValidData(true)
            }
        })
        .catch(err => {
            console.log()
        });
        return
	}


	return(
		<div className="login-wrapper">
				<div className="login-wrapper-div">
					<h2>Sign Up And Let Us Get Started</h2>
                    <div  className="login-input-div">
                    <i className="fa fa-user"></i>
                    <input placeholder="Enter Your First Name" className="login-input" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div  className="login-input-div">
                <i className="fa fa-user"></i>
                <input placeholder="Enter Your Last Name" className="login-input" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
                    <div  className="login-input-div">
                    <i className="fa fa-user"></i>
                    <input placeholder="Enter Your User Name" className="login-input" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>

					<div  className="login-input-div">
						<i className="fa fa-envelope"></i>
						<input placeholder="Enter Your Email" type="email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					</div>
                    <div  className="login-input-div">
                    <i className="fa fa-pencil"></i>
                        <input placeholder="Enter Your Bio" className="login-input" value={bio} onChange={(e)=>setBio(e.target.value)} />
                    </div>
					<div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input placeholder="Enter Your Password" type="password" className="login-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					</div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label profile-image-label">Choose Your Profile Image</label>
                        <input className="form-control profile-image" type="file" id="formFile" />
                    </div>
{/*                     <div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input placeholder="Confirm Your Password" type="password" className="login-input" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
					</div> */}
					{ notValidData && <p style={{color:'red'}}>Please Pass Valid Credentials</p>}
                    {/* { passwordNotMatch && <p style={{color:'red'}}>Your Passwords Must Match</p>} */}
                    { emailNotValid && <p style={{color:'red'}}>Your Email Is Not Valid</p>}
                    { userNameAlreadyUsed && <p style={{color:'red'}}>Username Already Exists</p>}

                    
					<button  onClick={(e) => handleSignUpBtn(e)} className="btn login-btn"><i>Sign Up</i></button>
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
