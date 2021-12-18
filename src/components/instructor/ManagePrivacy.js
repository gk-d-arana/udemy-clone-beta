import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'
import { Checkbox } from '@mui/material';
const ManagePrivacy = () => {
    
    const instructor = useSelector(state => state.auth.instructor)

    const [showProfile, setShowProfile] = useState(false)
    const [showCourses, setShowCourses] = useState(false)

    const handleChangeAccount = () => {

    }

    return (
        <div className='mp-wrapper h-100'>

            <div className='text-center'>
                <h2 className='active-h'><i>Privacy </i></h2>
                <h5>Modify your privacy settings here.</h5>
            </div>
            <hr style={{height:'2.5px'}}/>
            <div className='w-100 h-100 m-5 p-5'>
                <div>
                    <h5>Privacy Settings</h5>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={showProfile} style={{color:'gold'}} onChange={()=>setShowProfile(!showProfile)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.3rem'}}>Show your profile to logged in users.</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Checkbox type='checkbox' checked={showCourses} style={{color:'gold'}} onChange={()=>setShowCourses(!showCourses)}/>
                        <p className='mx-2 my-0' style={{fontSize:'1.3rem'}}>Show courses you're taking on your profile.</p>
                    </div>

                </div>
                <div className='d-flex justify-content-center mt-4 w-100'>
            
            <button onClick={()=>handleChangeAccount()} className="save px-5">Save</button>
            </div>
            </div>
        </div>
    )
}

export default ManagePrivacy