import React, { useEffect, useState } from 'react'
import './assets/styles.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URL_ROOT } from '../../utils/js'


const CloseAccount = () => {
    
    const instructor = useSelector(state => state.auth.instructor)


    

    return (
        <div className='mp-wrapper'>

            <div className='text-center'>
                <h2 className='active-h'><i>Close Account</i></h2>
            </div>
            <hr style={{height:'2.5px'}}/>
            <h5 className='pt-5 px-5'>
                If you close your account, you will be unsubscribed from all your courses,
                and will lose access forever.
            </h5>
            <div className='px-5 py-5 d-flex justify-content-start w-100'>
            <button onClick={()=>{
                document.querySelector('.close-modal').style.display = 'block'
            }} className="save px-5">Close Account</button>
            </div>
            <div className="modal fade close-modal" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Confirm Closing Your Account</h5>
                        <button type="button" className="btn-close" onClick={()=>{
                                document.querySelector('.close-modal').style.display = 'none'
                        }} aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <button type="button" className="save" data-bs-dismiss="modal">Yes Close My Account</button>            
                        </div>
                    </div>
                  </div>
                </div>

        </div>
    )
}

export default CloseAccount