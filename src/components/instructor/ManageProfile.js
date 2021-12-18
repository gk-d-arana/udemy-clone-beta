import React, { useState } from 'react'
import './assets/styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'


const ManageProfile = () => {
    
    const instructor = useSelector(state => state.auth.instructor)
    const [facebooLink, setFacebookLink] = useState(instructor.user?instructor.facebook_link:"")
    const [firstName, setFirstName] = useState(instructor.user?instructor.user.first_name:"")
    const [lastName, setLastName] = useState(instructor.user?instructor.user.last_name:"")
    const [jobRole, setJobRole] = useState(instructor.user?instructor.job_role:"")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFailure, setIsFailure] = useState(false)

    const handleChangeAccount = () => {
        let data = JSON.stringify({
            first_name : firstName,
            last_name : lastName,
            job_role : jobRole,
            facebook_link : facebooLink
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
                <h2 className='active-h'><i>Public Profile</i></h2>
                <h5>Add information about yourself</h5>
            </div>
            <hr style={{height:'2.5px'}}/>

            <h4>First Name:</h4>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Your First Name" type="email" className="login-input" 
                        value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
						<i className="fa fa-pencil"></i>
					</div>
            </div>
            <h4>Last Name:</h4>

            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Your Last Name" type="email" className="login-input" 
                        value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
						<i className="fa fa-pencil"></i>
					</div>
            </div>
            <h4>Job Role:</h4>

            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Your Job Role" type="email" className="login-input" 
                        value={jobRole} onChange={(e)=>setJobRole(e.target.value)} required/>
					</div>
            </div>

            <h4>Facebook Link:</h4>
            <div className='mx-5 px-5'>
            <div className="login-input-div">
						<input style={{border:'none'}} placeholder="Enter Your Facebook Link" type="email" className="login-input" 
                        value={facebooLink} onChange={(e)=>setFacebookLink(e.target.value)} required/>
					</div>
            </div>


            <div className='d-flex justify-content-center w-100'>
        
            <button onClick={()=>handleChangeAccount()} className="save px-5">Save</button>
                 
            </div>
        </div>
    )
}

export default ManageProfile