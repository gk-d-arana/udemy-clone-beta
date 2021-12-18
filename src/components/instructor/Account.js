import React from 'react'
import { useSelector } from 'react-redux'
import './assets/styles.css'
import ManageAccount from './ManageAccount'
import CloseAccount from './CloseAccount'
import ManageProfile from './ManageProfile'
import ManagePhoto from './ManagePhoto'
import ManagePrivacy from './ManagePrivacy'


export const Account = () => {
    const instructor = useSelector(state => state.auth.instructor)

    const handleChangeComp = (e) => {
        document.querySelectorAll('.h-side').forEach(h=>{
            h.classList.remove('active-h')
        })
        document.querySelectorAll('.p-divs').forEach(d => {
            d.classList.add('hidden')
        })
        e.target.classList.add('active-h')
        document.querySelector(`.${e.target.id}-div`).classList.remove('hidden')
    }

    return (
        <div>
            <div className='d-flex p-5 justify-content-center align-items-center'>
                    <div className='p-3 div-1-pr' style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:"50px 50px 20px 20px", border:'solid 2px #686EAD'}}>
                 
                 { instructor.user ?  
                 <div className='text-center'>
                     <div style={{margin:'0 auto'}} className="nav-item username">{instructor.user.username}</div>
                       <h3>{instructor.user.first_name !== "undefined" ? instructor.user.first_name : "" } {instructor.user.last_name !== "undefined" ? instructor.user.last_name : ""}</h3> 
                        <hr style={{backgroundColor:'#0F39E1', height:1}}/>
                 </div>
                 
                     : ""}
                                         
                        <h5 style={{cursor:'pointer'}} onClick={(e)=>handleChangeComp(e)} id="profile" className='h-side p-2 active-h'>Profile</h5>
                        <h5 style={{cursor:'pointer'}} onClick={(e)=>handleChangeComp(e)} id="photo" className='h-side p-2'>Photo</h5>
                        <h5 style={{cursor:'pointer'}} onClick={(e)=>handleChangeComp(e)} id="account" className='h-side p-2'>Account</h5>
                        <h5 style={{cursor:'pointer'}} onClick={(e)=>handleChangeComp(e)} id="privacy" className='h-side p-2'>Privacy</h5>
                        <h5 style={{cursor:'pointer'}} onClick={(e)=>handleChangeComp(e)} id="close_account" className='h-side p-2'>Close Account</h5>
                    </div>


                    <div className='p-5 div-2-pr w-100' style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius:"50px 50px 20px 20px"}}>

                        <div className='px-5 p-divs profile-div'>
                            <ManageProfile />
                        </div>
                        <div className='px-5 hidden p-divs photo-div'>
                            <ManagePhoto />
                        </div>
                        <div className='hidden p-divs h-100 account-div'>
                        <div className='px-5 w-100 h-100'>
                                <ManageAccount/>
                            </div>
                        </div>
                        <div className='px-5 hidden p-divs privacy-div'>
                            <ManagePrivacy/>
                        </div>
                        <div className='hidden p-divs close_account-div'><CloseAccount/></div>
                    
                    </div>
            </div>
        </div>
    )
}

export default Account


/*                  { instructor.user ?  

                 ""
                     : ""} */