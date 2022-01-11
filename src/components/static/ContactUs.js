import React, { useEffect } from 'react'
import contactImage from './assets/6340@2x.png'

import './assets/styles.css'

export const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    
    return (
        <div className='row mx-auto my-5'>
            <div className='col-xl-6 mx-3'>
                <h3>Contact Us</h3>
                <h5 style={{lineHeight: '40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud
 exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit
 in voluptate velit esse cillum dolore eu fugiat
 nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim
 id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud
 exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit
 in voluptate velit esse cillum dolore eu fugiat
 nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim
 id est laborum.    
                </h5>

            </div>
            <div className='col-xl-5 d-flex justify-content-center align-items-center'>
                <div>
                <img className='contact-img' src={contactImage} alt="mobile" />
                <div className='d-flex w-100 justify-content-center align-items-center'>    
                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook/" />
              <img style={{marginLeft:10}} src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram"/>
                </div>
             
                </div>
            </div>
        </div>
    )
}
