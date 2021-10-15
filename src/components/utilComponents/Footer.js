import React from 'react'
import './assets/css/footer.css'


const Footer = () => {
    return (
        <div className="footer">
        <div className="contain container m-0 justify-content-evenly p-4 w-1400">
  
          <div className="row justify-content-evenly w-100" >

            <div className="col col-xl-3  col-2 col-md-6 col-lg-6 col-sm-6  col-12">
              <h1>CourseiT</h1>
              <ul>
              <li><a href="#">Teach On CourseiT</a></li>
            <li><a href="#">Get The App</a></li>
              </ul>
            </div>
            <div className="col col-xl-3 col-2 col-md-6 col-lg-6 col-sm-6  col-12">
            <h1>Terms Of Use</h1>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help And Support</a></li>
            </ul>
          </div>
          
            <div className="col col-xl-3 col-md-6 col-lg-6 col-sm-6 col-12">
              <h1>Our Company</h1>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>

              </ul>
            </div>
            <div className="col col-xl-3 col-2 col-md-6 col-lg-6 col-sm-6  col-12">
              <h1>Follow Us</h1>
              <ul>
              <li>
              <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
              <img style={{marginLeft:10}} src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
              </li>
              </ul>
            </div>
          
          

            </div>
  
  
  

        </div>
        <div className="logo"> 
        <a href="#">
        <h1>
          <span style={{color:'blue'}}>C</span>
          <span style={{color:'red'}}>o</span>
          <span>u</span>
          <span>r</span>
          <span>s</span>
          <span>e</span>
          <span>i</span>
          <span style={{color:'blue'}}>T</span>
        </h1>
      </a>   
        </div>
      </div>
    
    
      )
}

export default Footer
