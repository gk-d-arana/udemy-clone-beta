import React, { useEffect } from 'react'
import './assets/styes.css'
import { Link, useRouteMatch, Route, useHistory} from 'react-router-dom'
import Logo1 from './assets/Group 610@2x.png'
import Logo2 from './assets/Group 958.png'
import Dashboard from './Dashboard'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import './assets/main'
import TopCourses from './TopCourses'
import TopRatings from './TopRatings'
import TopInstructors from './TopInstructors'
import InstructorInfo from './InstructorInfo'
import Notifications from './Notifications'
import AllCourses from './AllCourses'
import AddCourse from './AddCourse'
import AddCategory from './AddCategory'
import AddParentCategory from './AddParentCategory'
import AllTests from './AllTests'
import CheckTrans from './CheckTrans'
import AddTest from './AddTest'
import AllStudents from './AllStudents'
import StudentInfo from './StudentInfo'
import AllInstructors from './AllInstructors'
import CourseInfo from './CourseInfo'


const ControlPanelWrapper = () => {
    const { path } = useRouteMatch()
    const dispatch = useDispatch()
    const history = useHistory()
    const notifs = useSelector(state => state.mainData.notifications.length)
    
    useEffect(() => {
      window.scrollByLines(-window.scrollY)
      if(localStorage.getItem('token') === null){
        history.push('/')
      } 
      else{
        axios({
          method : 'GET',
          url : URL_ROOT + '/check_is_admin/',
          headers : {
            Authorization : `${localStorage.getItem('token')}`
          },
        }).then(res=>{
          if(!res.data.isAdmin)history.push('/')
        }).catch(err =>history.push('/'))
      }
      axios({
        method: "GET",
        url : `${URL_ROOT}/top_pcats/`
      }).then(res=>{
        dispatch({
          type : "SET_TOP_PCATS",
          payload : res.data
        })
  
      }).catch(err=>console.log(err))
  
  
      axios({
        method: "GET",
        url : `${URL_ROOT}/top_cats/`
      }).then(res=>{
        dispatch({
          type : "SET_TOP_CATS",
          payload : res.data
        })
      }).catch(err=>console.log(err))
    
      axios({
        method : 'GET',
        url : URL_ROOT + '/notifications_manager/',
        headers : {
          Authorization : `${localStorage.getItem('token')}`
        }
      }).then(res=>{
        dispatch({
          type : "SET_NOTIFICATIONS",
          payload : res.data.messages
        })
      }).catch(err=>{
          console.log(err)
          history.push('/control_panel')
      })


    
      
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

          axios({
            method : 'GET',
            url : URL_ROOT + '/ratings_by_value/',
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
          }).then(res=>{
            dispatch({
              type : "SET_RATINGS",
              payload : res.data
            })
          }).catch(err => {
            console.log(err)
          })


          axios({
            method : 'GET',
            url : URL_ROOT + '/instructors_by_rating/',
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
          }).then(res=>{
            dispatch({
              type : "SET_TOP_INSTRUCTORS",
              payload : res.data
            })
          }).catch(err => {
            console.log(err)
          })

    }, [])

    return (
        <div className='d-wrapper'>
                
    <header className="header" id="header">
            
            <img src={Logo2} alt="" />
            <div className="d-flex justify-content-between align-items-center">
                <Link style={{margin:'0px'}} to={path+'notifications'}><i className="bx bx-bell me-2" style={{color:notifs > 0  ? 'red' : '#000', fontSize:'1.7rem'}}></i></Link>
                
                <div className="header_img ms-3 me-2"> A  </div>
                Admin   
            </div>
    </header>


    <div className="l-navbar show" id="nav-bar" style={{borderRadius:'0 40px 40px 0'}}>
        <nav className="nav">
            
            <div> 
                <Link to={path} className="nav_logo"> 
                    <img src={Logo1} alt=''/>
                </Link>
            
                <div className="nav_list"> 
                    <Link to={path}  className="to-dash nav_link nav_l active-d"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </Link> 
                    <Link to={path+'all_courses'}  className="to-courses nav_link nav_l"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Courses</span> </Link> 
                    <Link to={path + 'all_students'}  className="to-students nav_link nav_l"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Students</span> </Link> 
                    <Link to={path + 'all_instructors'}  className="to-instrucs nav_link nav_l"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Instructors</span> </Link> 
                    <Link to={path+'all_tests'}  className="to-tests nav_link nav_l"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Tests</span> </Link> 
                    <Link to={path+'check_transactions'}  className="to-trans nav_link nav_l"> <i className='bx bx-money nav_icon'></i> <span className="nav_name">Transactions</span> </Link> 
                </div>
            </div>

        </nav>
    </div>
    
    <div className="height-100 bg-white cx-c">
            <Route component={Dashboard} path={path} exact/>
            <Route component={TopCourses} path={path + 'top_courses'}/>
            <Route component={TopRatings} path={path + 'top_ratings'}/>
            <Route component={TopInstructors} path={path + 'top_instructors'}/>
            <Route component={InstructorInfo} path={path + 'instructor_info/:instructor_id'}/>
            <Route component={Notifications} path={path + 'notifications'}/>
            <Route component={AllCourses} path={path + 'all_courses'}/>
            <Route component={AddParentCategory} path={path + 'add_parent_category'}/>
            <Route component={AllTests} path={path + 'all_tests'}/>
            <Route component={AllStudents} path={path + 'all_students'}/>
            <Route component={AllInstructors} path={path + 'all_instructors'}/>
            <Route component={AddCategory} path={path + 'add_category'}/>
            <Route component={AddCourse} path={path +   'add_course'}/>
            <Route component={AddTest} path={path + 'add_test'}/>
            <Route component={CheckTrans} path={path + 'check_transactions'}/>
            <Route component={StudentInfo} path={path + 'student_info/:student_id'}/>
            <Route component={CourseInfo} path={path + 'course_info/:course_id'}/>

    </div>

        </div>  
    )
}

export default ControlPanelWrapper