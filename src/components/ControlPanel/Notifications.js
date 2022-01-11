import axios from 'axios'
import React, { useEffect } from 'react'
import { URL_ROOT } from '../../utils/js'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


const Notifications = () => {
    const notifications = useSelector(state => state.mainData.notifications)
    const dispatch = useDispatch()
    const history = useHistory()
    const sawInbox = ()=>{
        axios({
            method : 'DELETE',
            url : URL_ROOT + '/notifications_manager/',
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
          }).then(res=>{
            dispatch({
                type : "SET_NOTIFICATIONS",
                payload : []
              })
          }).catch(err=>{
              console.log(err)
              history.push('/control_panel')
          })
    }


    return (
        <div className='mt-4 container'>
            <h3><i>Notifications</i></h3>
 {notifications.length>0 ? <><ul className='notif-c'>
                {notifications.map(notif => <li key={notif.message.id} className='my-2'>{notif.message}</li>)}
            </ul>
            <button className='btn' onClick={()=>sawInbox()}>Clear Inbox</button>
            </> : <p>Your Inbox Is Empty</p>}       
        </div>
    )
}
export default Notifications