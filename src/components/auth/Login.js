import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './assets/css/styles.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'
import { URL_ROOT } from '../../utils/js'



export const viewPass = ()=>{
	document.querySelector('.password-input').type ==="text" ? document.querySelector('.password-input').type = "password" : document.querySelector('.password-input').type = "text" 
}

function Login ({setToken}) {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [isEmpty, setIsEmpty]  =useState(false)
	const [loading, setLoading] = useState(false)
	const [notValidData, setNotValidData] = useState(false)
	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(()=> {
		if (localStorage.getItem('token') != null) {
			history.push('/')
		}
	}, [history])
	
	const handleLoginBtn = (e) => {
		setLoading(false)
		setNotValidData(false)
		if(username ==="" ||  password ===""){
			setIsEmpty(true)
			return
		}
		setLoading(true)
		const data = JSON.stringify({
            "username": username,
            "password": password
        })

        axios({
            method: 'POST',
            url: URL_ROOT + '/login_instructor/',
            headers: {
                "Content-Type" : "application/json"
            },
            data: data
          }).then(res => {
			console.log(res,"test")
              if (res.data.token) {
				setToken(res.data.token)
				localStorage.setItem('token', res.data.token)
								  
				dispatch({
					type : "SET_INSTRUCTOR_INFO",
					payload : {
						"username" : `${res.data.instructor.user.username}` || "NON",
						"fisrt_name" : `${res.data.instructor.user.firstName}` || "NON",
						"last_name" : `${res.data.instructor.user.lastName}`  || "NON",
						"email" : `${res.data.instructor.user.email}` || "NON@NON.NON",
						"bio" : `${res.data.instructor.bio}` || "NON",
						"total_students": res.data.instructor.total_students || 0,
						"total_reviews": res.data.instructor.total_reviews || 0,
						"total_rate": res.data.instructor.total_rate || 0,
						"badges": `${res.data.instructor.badges}` || "NON",
						"student_count": res.data.instructor.student_count || 0 ,
						"profile_image" : `${URL_ROOT   +  res.data.instructor.profile_image}` || "NON"
					}
				  })
				 // setInstructor(instruc)
				 axios({
					method : 'GET',
					url :URL_ROOT + '/my_learnings/',
					headers : {
						Authorization : `${localStorage.getItem('token')}`
					  }
				}).then(res => {
				  dispatch({
					type: 'SET_MY_COURSES',
					payload : res.data.courses
				  })
				  history.push('/')     
				}).catch(err => console.log(err))
              }

          })
          .catch(err => {
				setLoading(false)
				if(err.response){
					if(err.response.data.message ==="Pleas Pass Valid Credentials"){
						setNotValidData(true)
					}
					else{
						alert('Some Problem Occured')
					}
				}
			});
		//handleLogin(username, password, history, setNotValidData)
	}


	return(
		<div className="login-wrapper">
				<div className="login-wrapper-div">
					<h2>Login To Your Account</h2>
					<h4>Welcome Back!</h4>
					<div  className="login-input-div">
						<i className="fa fa-user"></i>
						<input style={{border:'none'}} placeholder="Enter Your Username" className="login-input" value={username} 
						onChange={(e)=>setUsername(e.target.value)}/>
					</div>
					<div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input style={{border:'none'}} type="password" placeholder="Enter Your Password" className="login-input password-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={()=>viewPass()}></i>
					
					</div>
					{ notValidData && <p style={{color:'red'}}>Please Pass Valid Credentials</p>}
					{ isEmpty &&  <p style={{color:'red'}}>Please Enter Required Info</p>}
					<button  onClick={(e) => handleLoginBtn(e)} className="btn login-btn">
						{!loading && <i>Log In</i>}
					{loading && <CircularProgress color='secondary' />}
					</button>
					<div className="more-actions">
						<span>Or</span>
						 <Link to={{pathname : "/forgot_password" ,query:{ setToken: setToken } }}> Forgot Password </Link>

						 <br/>
						<span>{"Dont Have An Account"}</span> <Link to={{pathname : "/signup" ,query:{ setToken: setToken } }}>Sign Up</Link><br/>
					</div>
				</div>	
		</div>
			)


}





//export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;
