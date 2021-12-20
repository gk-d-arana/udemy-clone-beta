import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import LanguageIcon from '@mui/icons-material/Language';
import Home from '../../pages/Home';
import {Route, Link, useHistory} from 'react-router-dom'
import Footer from './Footer'
import Login from '../auth/Login';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../auth/Register';
import axios from 'axios';
import {URL_ROOT} from '../../utils/js'
import CourseContent from '../course/CourseContent';
import ForgotPassword from '../auth/ForgotPassword';
import Profile from '../instructor/Profile';
import Cart from '../payment/Cart';
import Wishlist from '../instructor/Wishlist';
import Checkout from '../payment/Checkout';
import { HelpAndSupport } from '../static/HelpAndSupport';
import { GetTheApp } from '../static/GetTheApp';
import { PrivacyAndPolicy } from '../static/PrivacyAndPolicy';
import { ContactUs } from '../static/ContactUs';
import { AboutUs } from '../static/AboutUs'
import { TeachWithUs } from '../static/TeachWithUs';
import MyCourses from '../instructor/MyCourses';
import CourseDetails from '../course/CourseDetails';
import Account from '../instructor/Account';
import Notifications from '../instructor/Notifications';
import CourseByPC from '../../pages/CourseByPC';
import Search from '../../pages/Search';
import Wallet from '../payment/Wallet';
import ManageStudyProgram from '../instructor/ManageStudyProgram';

const Wrapper = () => {
   const instructor = useSelector(state => state.auth.instructor) || {}
   const data = useSelector(state => state.mainData.data) || []
   const history = useHistory()
   //const [instructor, setInstructor] = useState(_instructor)
   const dispatch = useDispatch()
    const [token, setToken] =  useState(localStorage.getItem('token')) 
    const handleLogout = () => {
      setToken(null)
      localStorage.removeItem('token')
      window.location.reload()

    }
  
    useEffect(() => {
      window.scrollByLines(-window.scrollY)

      axios({
        method : 'GET',
        url : URL_ROOT + '/course_by_selling_times',
        headers : {
          Authorization : `${localStorage.getItem('token')}`
        }
      }).then(res=>{
        dispatch({
          type : "SET_TOP_SELLING_COURSES",
          payload : res.data
        })
      }).catch(err => {
        console.log(err)
      })
      if(localStorage.getItem('token') != null ){
        axios({
          url : URL_ROOT + "/profile/",
          method : "GET",
          headers : {
            Authorization : `${localStorage.getItem('token')}`
          }
        }).then(res => {
        
          let instruc = {
            "username" : `${res.data.user.username}`,
            "firstName" : `${res.data.user.first_name}`,
            "lastName" : `${res.data.user.last_name}`,
            "email" : `${res.data.user.email}`,
            "bio" : `${res.data.bio}`,
            "total_students": res.data.total_students,
            "total_reviews": res.data.total_reviews,
            "total_rate": res.data.total_rate,
            "badges": `${res.data.badges}`,
            "student_count": res.data.student_count ,
            'facebook_link' : res.data.facebook_link,
            'job_role' : res.data.job_role,
            "profile_image" : `${URL_ROOT +   res.data.profile_image}`
        }
          
        dispatch({
            type : "SET_INSTRUCTOR_INFO",
            payload : instruc
          })

        
        
        }).catch(e => console.log(e))

        axios({
          method : 'GET',
          url :URL_ROOT + '/my_learnings/',
          headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
      }).then(res => {
        dispatch({
          type: 'SET_MY_COURSES',
          payload : res.data.courses
        })
      }).catch(err => console.log(err))
      
      }

      axios({
        method: "GET",
        url : `${URL_ROOT}/pcats_and_cats_and_topics/`
      }).then(res=>res.data).then(res=>{
        dispatch({
          type : "SET_MAIN_DATA",
          payload : res.data
        })

      })
    
    },[])
    
    
    //https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg
    return (
    
      <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar" className="active">
            <div className="p-4 pt-5">
              <span href="#" className="img logo rounded-circle mb-2" style={{backgroundImage: `url(${instructor.profile_image})`}}></span>
              <ul className="list-unstyled components mb-5">
                <li className="active">
                  <Link to="/"  className="dropdown-toggle">Home</Link>
                  </li>
                <li>
                    <Link to="/edit_profile">Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/my_courses">My Courses</Link>
            </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Messages</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Account Settings</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/wallet">My Wallet</Link>
    </li>

                <li>
                  <Link to="/study_program">Study Program</Link>
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
      
              <Link className='text-center' to="/">
                  <h3>
                    <i>
                      E
                      <span style={{color:'red'}}>O</span>
                      E
                    </i>
                  </h3>
                  <h6 style={{color:'#000'}}>
                    <i style={{paddingRight:'3px', color:'#1080D4'}}>E</i>mpire
                    <i style={{paddingRight:'3px', color:'red'}}>O</i>nline 
                    <i style={{paddingRight:'3px', color:'#1080D4'}}>E</i>ducation
                  </h6>
                </Link>

                <div className="dropdown">
                <h3 className="dropbtn">
                Categories
                <i className='bx bxs-chevron-down'></i>
      
                </h3>
              
              
                <ul className="dropdown-content">
                
                {data.map(pcat =>   <li className="inner-li" id={pcat.parent_category.parent_category_id} key={pcat.parent_category.parent_category_id}>
                  <p className="first-li-p" > <Link className="pcat_li" to={{
                    pathname : `/${pcat.parent_category.parent_category_id}/${pcat.parent_category.parent_category_name}/courses/`,
                  }}>{pcat.parent_category.parent_category_name} </Link><i className="bx bxs-chevron-right"></i> </p>
                    <ul>
                    {pcat.categories.map(cat => 
                      <li id={cat.category.category_id} key={cat.category.category_id}>
                        <p className="first-li-p"><Link className="pcat_li" to={"/" + cat.category.category_id + '/' + cat.category.category_name + '/courses/'}>{cat.category.category_name} <i className="bx bxs-chevron-right"></i> </Link></p>
                      </li>
                    )}

                    </ul>
                  </li>
                )}

                  </ul>
            
            
              </div>



                <form className="input-field mx-4 choices-text-preset-values-div" onSubmit={(e)=>{
                  e.preventDefault()
                  history.push('/courses/search/'+e.target.search_cont.value)
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                  <input name='search_cont' className="form-control w-650" id="choices-text-preset-values" type="text" placeholder="Type to search..." />
                  <input type="submit" hidden />
              </form>

                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
              
              
                <div className="collapse navbar-collapse w-270 snd_nav snd_nav1" id="navbarSupportedContent">
            
            
                <ul className="nav navbar-nav p-0">

    {  token  &&       <li className="nav-item justify-content-evenly" style={{flexBasis : 'max-content'}}>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link to="/wishlist" style={{color:'gray'}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="error">
                        <FavoriteBorderOutlined />
                      </Badge>
                    </IconButton>
                    </Link>
                    <Link style={{color:'gray'}} to="/cart">
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton>
                    </Link>
                    <Link style={{color:'gray'}} to="/notifications">
                    <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  </Link>
                  </Box>
                  <div style={{cursor:'pointer'}} className="nav-item username" onClick={toggleSideBar}>{ instructor.user ?  instructor.user.username : "Username"}</div>
                    </li>
                  }  

    {  token == null &&  <li className="nav-item active  p-0" style={{flexBasis : 'max-content'}}>
                    <a className="nav-link" href="#"><Link query={{  setToken: setToken }} className="nav-link" to="/login">Login</Link>  </a>   
                </li>
              } 
    {   token == null &&      <li className="nav-item active signup-li  p-0" style={{flexBasis : 'max-content'}}>
                <a className="nav-link home-btn signup-link" href="#"><Link query={{ setToken: setToken }} className="nav-link signup-link" to="/signup">Signup</Link></a>
                  
                </li>}
                
    { token == null &&           <li className="nav-item active" style={{flexBasis : 'max-content'}}>
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



              {/*

                  Definig Routes
              
              */}


          <Route component={Home} path="/" exact/>
        <Route component={CourseDetails} path="/course/:course_name/:course_id"/>
        <Route component={CourseContent} path="/:course_name/:course_id/course_content"/>
        <Route component={CourseByPC} path="/:obj_id/:obj_name/courses"/>
        
        <Route component={Search} path="/courses/search/:course_name/"/>

        <Route component={Profile} path="/instructor/:instructor_name/:instructor_id"/>
        <Route component={Cart} path="/cart"/>
        <Route component={Wallet} path="/wallet"/>
        <Route component={MyCourses} path="/my_courses"/>
        <Route component={Wishlist} path="/wishlist"/>
        <Route component={Checkout} path="/checkout"/>
        <Route component={HelpAndSupport} path="/help_and_support"/>
        <Route component={PrivacyAndPolicy} path="/privacy_and_policy"/>
        <Route component={GetTheApp} path="/get_the_app"/>
        <Route component={ContactUs} path="/contact_us"/>
        <Route component={AboutUs} path="/about_us"/>
        <Route component={TeachWithUs} path="/teach_with_us"/>
        <Route component={Account} path="/edit_profile"/>
        <Route component={Notifications} path="/notifications"/>
        
        <Route component={ManageStudyProgram} path="/study_program"/>
        
          <Route 
          component={
            routeProps => <Login setToken={setToken} />} path="/login" exact  />     
          
            <Route 
            component={
              routeProps => <Register setToken={setToken} />} path="/signup" exact  />     
          
          <Route component={ForgotPassword} path="/forgot_password" exact />

          <Footer />
          <div className="know-top"></div>

          </div>
      </div>
      
      
        )
}



async function toggleSideBar1(sideBar) {
  await sideBar.classList.toggle('active')
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




