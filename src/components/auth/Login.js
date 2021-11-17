import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './assets/css/styles.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';


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
	}, [])
	
	const handleLoginBtn = (e) => {
		setLoading(false)
		setNotValidData(false)
		if(username == "" ||  password == ""){
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
            url: 'http://localhost:8000/login_instructor/',
            headers: {
                "Content-Type" : "application/json"
            },
            data: data
          }).then(res => {
              if (res.data.token) {
				setToken(res.data.token)

				localStorage.setItem('token', res.data.token)
				let instruc = {
					"user" :{
					"username" : `${res.data.instructor.user.username}`,
					"fisrt_name" : `${res.data.instructor.user.firstName}`,
					"last_name" : `${res.data.instructor.user.lastName}`,
					"email" : `${res.data.instructor.user.email}`
					},
					"bio" : `${res.data.instructor.bio}`,
					"total_students": res.data.instructor.total_students,
					"total_reviews": res.data.instructor.total_reviews,
					"total_rate": res.data.instructor.total_rate,
					"badges": `${res.data.instructor.badges}`,
					"student_count": res.data.instructor.student_count ,
					"profile_image" : `http://localhost:8000${res.data.instructor.profile_image}`
				}
				  
				dispatch({
					type : "SET_INSTRUCTOR_INFO",
					payload : instruc
				  })
				 // setInstructor(instruc)
                history.push('/')      
              }

          })
          .catch(err => {
				setLoading(false)
				if(err.response){
					if(err.response.data.message == "Pleas Pass Valid Credentials"){
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
						<i className="fa fa-envelope"></i>
						<input placeholder="Enter Your Email" className="login-input" value={username} onChange={(e)=>setUsername(e.target.value)}/>
					</div>
					<div className="login-input-div">
					<i className="fa fa-lock"></i>
					<input placeholder="Enter Your Password" className="login-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					</div>
					{ notValidData && <p style={{color:'red'}}>Please Pass Valid Credentials</p>}
					{ isEmpty &&  <p style={{color:'red'}}>Please Enter Required Info</p>}
					<button  onClick={(e) => handleLoginBtn(e)} className="btn login-btn">
						{!loading && <i>Log In</i>}
					{loading && <CircularProgress color='secondary' />}
					</button>
					<div className="more-actions">
						<span>Or</span> <a href="#">Forgot Password</a><br/>
						<span>{"Dont Have An Account"}</span> <a href="#">Sign Up</a><br/>
					</div>
				</div>	
		</div>
			)


}



const mapStateToProps = (state) =>({

})

const mapDispatchToProps = dispatch => {
    return {
		handleLogin: (username, password, history, setNotValidData) => dispatch()
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;


/*     return (
        <div className="login-wrapper">
            <div className="box-wrapper">
                <h2>Log In To Your Account</h2>
                <h4>Welcome Back!</h4>
				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        <input class="input100" type="text" name="email" placeholder="Email" />
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                        <input class="input100" type="password" name="pass" placeholder="Password" />
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			
            </div>
        </div>
    ) */
	