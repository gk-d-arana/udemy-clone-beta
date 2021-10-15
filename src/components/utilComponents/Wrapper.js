import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import LanguageIcon from '@mui/icons-material/Language';
import Home from '../../pages/Home';
import {Route, Link} from 'react-router-dom'
import Footer from './Footer'
import Login from '../auth/Login';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../auth/Register';
import axios from 'axios';



const Wrapper = () => {
   const instructor = useSelector(state => state.auth.instructor) || {}
   const dispatch = useDispatch()
    const [token, setToken] =  useState(localStorage.getItem('token')) 
    const handleLogout = () => {
      setToken(null)
      localStorage.removeItem('token')
      let sideBar = document.querySelector('#sidebar')
      sideBar.classList.add('active')
    }
  
    useEffect(() => {
    
    
      if(localStorage.getItem('token') != null ){
        axios({
          url : "http://localhost:8000/profile/",
          method : "GET",
          headers : {
            Authorization : `${localStorage.getItem('token')}`
          }
        }).then(res => {
        
          let instruc = {
            "username" : `${res.data.user.username}`,
            "fisrt_name" : `${res.data.user.firstName}`,
            "last_name" : `${res.data.user.lastName}`,
            "email" : `${res.data.user.email}`,
            "bio" : `${res.data.bio}`,
            "total_students": res.data.total_students,
            "total_reviews": res.data.total_reviews,
            "total_rate": res.data.total_rate,
            "badges": `${res.data.badges}`,
            "student_count": res.data.student_count ,
            "profile_image" : `http://localhost:8000${res.data.profile_image}`
        }
          
        dispatch({
            type : "SET_INSTRUCTOR_INFO",
            payload : instruc
          })

        
        
        }).catch(e => console.log(e))
      }
    
    
    },[])
    
    
    //https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg
    return (
    
      <div className="wrapper d-flex align-items-stretch">
			<nav id="sidebar" className="active">
				<div className="p-4 pt-5">
		  		<a href="#" className="img logo rounded-circle mb-2" style={{backgroundImage: `url(${instructor.profile_image})`}}></a>
	        <ul className="list-unstyled components mb-5">
	          <li className="active">
	            <a href="#homeSubmenu" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
              data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
              </li>
	          <li>
	              <a href="#">Profile</a>
	          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">My Courses</a>
        </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Messages</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Account Settings</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Credits</a>
</li>

	          <li>
              <a href="#">Notifications</a>
	          </li>
            <li onClick={handleLogout} style={{marginTop: 24,
              border: "none"
            }}>
            <a href="#" style={{border: "none"}}>Logout</a></li>
	        </ul>


	      </div>
    	</nav>

      <div id="content" className="p-4">

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
  
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
            

            <div className="dropdown">
            <h3 className="dropbtn">
            Categories
            <i className='bx bxs-chevron-down'></i>
  
            </h3>
            <ul className="dropdown-content">
              <li className="inner-li">
              <p className="first-li-p">Development  <i className="bx bxs-chevron-right"></i> </p>
                <ul>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
    
                </ul>
              </li>
              <li className="inner-li">
              <p className="first-li-p">Development  <i className="bx bxs-chevron-right"></i> </p>
                <ul>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
    
                </ul>
              </li>
           
              <li className="inner-li">
              <p className="first-li-p">Development  <i className="bx bxs-chevron-right"></i> </p>
                <ul>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
    
                </ul>
              </li>
           
              <li className="inner-li">
              <p className="first-li-p">Development  <i className="bx bxs-chevron-right"></i> </p> 
                <ul>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
    
                </ul>
              </li>
           
              <li className="inner-li">
              <p className="first-li-p"> Development  <i className="bx bxs-chevron-right"></i> </p>
                <ul>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
                  <li>
                    <p className="first-li-p">Compter Science <i className="bx bxs-chevron-right"></i> </p>
                  </li>
    
                </ul>
              </li>
           
           
              </ul>
          </div>



            <div className="input-field mx-4 choices-text-preset-values-div">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <input className="form-control w-650" id="choices-text-preset-values" type="text" placeholder="Type to search..." />
          </div>

            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
          
          
            <div className="collapse navbar-collapse w-270 snd_nav snd_nav1" id="navbarSupportedContent">
         
         
            <ul className="nav navbar-nav p-0">

{  token  &&       <li className="nav-item">

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <FavoriteBorderOutlined />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              </Box>
              <a href="#" className="nav-item username" onClick={toggleSideBar}>{ instructor.user ?  instructor.user.username : "Username"}</a>
                </li>
              }  

{  token == null &&  <li className="nav-item active  p-0" >
                <a className="nav-link" href="#"><Link query={{ setToken: setToken }} className="nav-link" to="/login">Login</Link>  </a>   
            </li>
           } 
{   token == null &&      <li className="nav-item active signup-li  p-0">
            <a className="nav-link home-btn signup-link" href="#"><Link query={{ setToken: setToken }} className="nav-link signup-link" to="/signup">Signup</Link></a>
              
            </li>}
            
{ token == null &&           <li className="nav-item active">
            <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
              <LanguageIcon />

          </IconButton>
            </li>}
              
            
            </ul>
            </div>
          
            </div>
        </nav>

      <Route component={Home} path="/" exact/>
     
      <Route 
      component={
        routeProps => <Login setToken={setToken} />} path="/login" exact  />     
      
        <Route 
        component={
          routeProps => <Register setToken={setToken} />} path="/signup" exact  />     
       
      <Footer />
      <div className="know-top"></div>

        </div>
        </div>
      
      
        )
}



async function toggleSideBar1(sideBar) {
   sideBar.classList.toggle('active')

  // let footerContainer = document.querySelector('.contain')
  //footerContainer.classList.toggle('w-1400')
}


const toggleSideBar = () =>{

  let sideBar = document.querySelector('#sidebar') 
  let inputField = document.querySelector('.choices-text-preset-values-div')
 // inputField.classList.toggle('w-370')
  //let kt = document.querySelector('.footer')
  //console.log(kt.offsetTop + 320)
  //sideBar.style.height = `${kt.offsetTop + 246}px`
 // $('#sidebar').css('height', `${$('.know-top').offset().top}`) 
/*   let snd_nav = document.querySelector('.snd_nav')
  snd_nav.classList.toggle('snd_nav2')
  snd_nav.classList.toggle('snd_nav1')  */

  toggleSideBar1(sideBar).then(()=>{
    return setTimeout(() => {
   //  inputField.classList.toggle('w-650') 
    }, 100);
  })


}



export default Wrapper




