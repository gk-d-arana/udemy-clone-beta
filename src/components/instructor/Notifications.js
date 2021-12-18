import React, { useEffect, useState } from 'react'
import cartImage from './assets/—Pngtree—spam sms new message internet_6658750.png'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import cartEmptyImage from '../payment/assets/folder (2)@2x.png'
import { Link } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'




export const Notifications = (props) => {
    const [notifications, setNotifications] = useState([])

    useEffect(()=>{
        axios({
            method : 'GET',
            url :URL_ROOT + '/notification_manager/',
            headers : {
                Authorization : `${localStorage.getItem('token')}`
              }
        }).then(res => {
            setNotifications(res.data)
        }).catch(err => console.log(err))
    },[])

    

    const emptyCart = () =>
        <div className='my-5 d-flex justify-content-center align-items-center'>
            <div className='my-5'>
            <img className='my-5' src={cartEmptyImage} alt="empty-cart"/>
            <h5 className='my-5'>No Notifications</h5>
            <Link className='my-5' to="/" 
            style={{background:'#CA5B5B', color:'#fff', padding: '10px 20px', borderRadius:'20px'}}>
                Back Home</Link>
            </div>
        </div>
     
    const handleOkNotification = (e) =>{
        let notfs = notifications
        notfs.splice(notifications.indexOf(notifications.find(n => n.id === 1)), 1)
        setNotifications(notfs)

    }


    return (
        <div className='cart-wrapper' style={{backgroundColor:'#E9EBFD'}}>
           
           {notifications ?  <div className='p-5 '>
            <h3>Notifications</h3>
            <div className="card card-notif col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {notifications.length === 0 ? emptyCart() : <ul className='notif-list'> 
                    {notifications.map(n=>
                        <>
                            <li className={`notf-${n.id}`} id={n.id} onClick={(e)=>{
                                document.querySelector(`.btn-notf-${e.target.id}`).classList.toggle('hidden')
                            }} style={{ fontSize: '1.3rem', cursor:'pointer' }}>{n.message}</li>
                            <div className='d-flex justify-content-end'>
                            <button className={ 'hidden btn-notf-' + n.id +' px-5 py-2'} id={n.id} onClick={(e)=>handleOkNotification(e)}
                                style={{borderRadius:'20px',border:'none', color:'#fff', backgroundColor:'#CA5B5B'}}>Ok</button>

                            </div>
                        </>
                    )}
                    
                 
                  </ul> }

              </div>
            </div>
            </div>
            
            : ""}
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={cartImage} alt='cart' />
            </div>
            </div>
    )
}



export default Notifications