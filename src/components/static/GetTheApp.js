import React, { useEffect } from 'react'
import MobileImage from './assets/5666022@2x.png'
import AndroidImage from './assets/Group 679@2x.png'
import IosImage from './assets/Group 680@2x.png'
import './assets/styles.css'
import { Link } from 'react-router-dom'

export const GetTheApp = () => {
    useEffect(()=>{
        window.scrollByLines(-window.scrollY)
    })
    
    return (
        <div className='row container mx-auto my-5'>
            <div className='col-xl-8'>
                <h3>Learn More With Us On IOS & Android</h3>
                <ul>
                   <li className='list-item-of-get-app my-3'>
                   <h5>Build your skill with over 2,000 videos. </h5>
                   </li>

                   <li className='list-item-of-get-app my-3'>
                   <h5>Learn Offline anywhere.    </h5>
                   </li> 

                   <li className='list-item-of-get-app my-3'>
                   <h5>Improve your experience.</h5>
                   </li> 

                </ul>
               <Link to="/"> <img className='get-app-img my-5' src={AndroidImage} alt="android" /> </Link>
               <Link to="/"> <img className='get-app-img my-5' src={IosImage} alt="ios" /> </Link>


            </div>
            <div className='col-xl-3 d-flex justify-content-center align-items-center'>
                <img src={MobileImage} alt="mobile" />
            </div>
        </div>
    )
}
