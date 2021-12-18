import React from 'react'
import './assets/css/footer.css'
import { Link } from 'react-router-dom'
import FooterLogo from './assets/images/Group 610.png'


const Footer = () => {
    return (
        <div className="footer">
        <div className="contain container m-0 justify-content-evenly p-4 w-1400">
  
          <div className="row justify-content-evenly w-100" >

            <div className="col col-xl-3  col-2 col-md-6 col-lg-6 col-sm-6  col-12">
              <h1 style={{fontSize:'1.6rem'}}>
                <span style={{padding:'0.5rem'}}>
                  E<span style={{color:'red'}}>O</span>E
                </span>
                </h1>
              <ul>
              <li><Link to="/teach_with_us">Teach On CourseiT</Link></li>
            <li><Link to="/get_the_app">Get The App</Link></li>
              </ul>
            </div>
            <div className="col col-xl-3 col-2 col-md-6 col-lg-6 col-sm-6  col-12">
            <h1>Terms Of Use</h1>
            <ul>
              <li><Link to="/privacy_and_policy">Privacy Policy</Link></li>
              <li><Link to="help_and_support">Help And Support</Link></li>
            </ul>
          </div>
          
            <div className="col col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
              <h1>Our Company</h1>
              <ul>
                <li><Link to="/contact_us">Contact Us</Link></li>
                <li><Link to="/about_us">About Us</Link></li>

              </ul>
            </div>
            <div className="col col-xl-3 col-2 col-md-6 col-lg-6 col-sm-6  col-12">
              <h1>Follow Us</h1>
              <ul>
              <li>
              <img width="40" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook"/>
              <img width="45" style={{marginLeft:10}} src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram"/>
             
              </li>
              </ul>
            </div>
          
          

            </div>
  
  
  

        </div>
        <div className="logo d-flex justify-content-end"> 
        <span className='pe-3'>
        <img src={FooterLogo} alt="logo"/>
      </span>   
        </div>
      </div>
    
    
      )
}

export default Footer
