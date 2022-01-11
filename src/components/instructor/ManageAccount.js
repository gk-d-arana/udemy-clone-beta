import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'


const ManageAccount = () => {
    
    const instructor = useSelector(state => state.auth.instructor)
    const [email, setEmail] = useState(instructor.user?instructor.user.email:"")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newConfirmPassword, setNewConfirmPassword] = useState("")
    const [notMatchedPasswords, setNotMatchedPasswords] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFailure, setIsFailure] = useState(false)

    const handleChangeAccount = () => {
        setNotMatchedPasswords(false)
        if(newPassword !==  "" && newPassword !== newConfirmPassword){
            setNotMatchedPasswords(true)
        }
        let data = JSON.stringify({
            email : email,
            password : oldPassword,
            new_password : newPassword
        })

        axios({
            method: 'PUT',
            url: URL_ROOT + '/update_account/',
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${localStorage.getItem('token')}`

            },
            data: data
          }).then(res=>{
            setIsSuccess(true)
          }).catch(err=>setIsFailure(true))
    }

    const viewPass = (e) => {
        e.target.previousElementSibling.type === "text" ? e.target.previousElementSibling.type = "password" : e.target.previousElementSibling.type = "text" 
    }



    return (
        <div className='mp-wrapper'>
            {isSuccess && <div class="alert alert-info alert-dismissible fade show" role="alert">
            Updated Successfully
            <button type="button" class="btn-close" onClick={()=>setIsSuccess(false)} aria-label="Close"></button>
            </div>}
            {isFailure&&<div class="alert alert-danger alert-dismissible fade show" role="alert">
            Something Went Wrong Please Try Again
            <button type="button" class="btn-close" onClick={()=>setIsFailure(false)} aria-label="Close"></button>
            </div>}
            <div className='text-center'>
                <h2 className='active-h'><i>Account Settings</i></h2>
                <h5>Edit your email and change password here</h5>
            </div>
            <hr style={{height:'2.5px'}}/>
            <h4>Email:</h4>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Your Email" type="email" className="login-input" 
                        value={email} onChange={(e)=>setEmail(e.target.value)} required/>
						<i className="fa fa-pencil"></i>
					</div>
            </div>
            <hr style={{height:'2.5px'}}/>
            <h4>Password:</h4>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Current Password" type="password" className="login-input" 
                        value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={(e)=>viewPass(e)}></i>
				
                	</div>
            </div>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter New Password" type="password" className="login-input" 
                        value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={(e)=>viewPass(e)}></i>
					
                    </div>
            </div>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Confirm New Password" type="password" className="login-input"
                         value={newConfirmPassword} onChange={(e)=>setNewConfirmPassword(e.target.value)} required/>
					<i className="fa fa-eye" style={{cursor:'pointer'}} onClick={(e)=>viewPass(e)}></i>
			
            		</div>
            </div>
            <div className='d-flex justify-content-center w-100'>
					{ notMatchedPasswords &&  <p style={{color:'red'}}>Passwords Must Match</p>}
            </div>
            <div className='d-flex justify-content-center w-100'>
        
            <button onClick={()=>handleChangeAccount()} className="save">Save Changes</button>
                 
            </div>
        </div>
    )
}

export default ManageAccount