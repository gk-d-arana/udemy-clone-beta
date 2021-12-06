import React, { useEffect } from 'react'
import aboutImage from './assets/20944999@2x.png'

import './assets/styles.css'

export const AboutUs = () => {
    useEffect(()=>{
        window.scrollByLines(-window.scrollY)
    })
    
    return (
        <div className='row mx-auto my-5'>
            <div className='col-xl-6 mx-3'>
                <h3>About Us</h3>
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
                <img className='contact-img' src={aboutImage} alt="mobile" />
                
             
                </div>
            </div>
        </div>
    )
}
