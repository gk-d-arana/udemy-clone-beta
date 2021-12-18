import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'


const ManagePhoto = () => {
    
    const instructor = useSelector(state => state.auth.instructor)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFailure, setIsFailure] = useState(false)


    const handleChangeAccount = () => {
        let form = new FormData()
        form.append('profile_image', document.querySelector('.imggg').files[0])
        axios({
            method: 'PUT',
            url: URL_ROOT + '/update_profile_image/',
            headers: {
                Authorization : `${localStorage.getItem('token')}`
            },
            data: form
          }).then(res=>{
            setIsSuccess(true)
          }).catch(err=>setIsFailure(true))
    }

    return (
        <div className='mp-wrapper h-100'>
 {isSuccess && <div className="alert alert-info alert-dismissible fade show" role="alert">
            Updated Successfully
            <button type="button" className="btn-close" onClick={()=>setIsSuccess(false)} aria-label="Close"></button>
            </div>}
            {isFailure&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
            Something Went Wrong Please Try Again
            <button type="button" className="btn-close" onClick={()=>setIsFailure(false)} aria-label="Close"></button>
            </div>}
            <div className='text-center'>
                <h2 className='active-h'><i>Photo</i></h2>
                <h5>Add photo to your profile.</h5>
            </div>
            <hr style={{height:'2.5px'}}/>
            <div className='w-100 h-100 m-5 p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                <div className='ms-5 p-img col-xl-3' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${instructor.profile_image}')`}}>
                </div>
                <div className='col-xl-6'>
                    <input  className='imggg' type='file' onChange={(e)=>{
                        const file = e.target.files[0]
                        console.log(file, URL.createObjectURL(file))
                        document.querySelector('.p-img').style.backgroundImage = "url('" + URL.createObjectURL(file) +  "')"
                    }}/>
                </div>
                </div>
                <div className='d-flex justify-content-center w-100'>
            
            <button onClick={()=>handleChangeAccount()} className="save px-5">Save</button>
            </div>
            </div>
        </div>
    )
}

export default ManagePhoto