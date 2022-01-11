import axios from 'axios'
import React from 'react'
import {URL_ROOT} from '../../utils/js'
import Next from './assets/next.png'

const TransComp = ({ transes, setTranses }) => {

    const rejectTrans = trans => { 
        console.log(trans)
        let data = JSON.stringify({temp_wallet_id:trans.id})
        axios({
            method: "DELETE",
            headers : {
                Authorization : `${localStorage.getItem('token')}`,
                "Content-Type" : "application/json",
              },
            url : `${URL_ROOT}/transes/`,
            data:data
          }).then(res=>{
            let new_transes = transes
            new_transes.splice(new_transes.indexOf(trans), 1)
            setTranses([...new_transes])
          }).catch(err=>console.log(err))
    }

    const approveTrans = trans => { 
        console.log(trans)
        let data = JSON.stringify({temp_wallet_id:trans.id, instructor_id:trans.instructor.id})
        axios({
            method: "PUT",
            headers : {
                Authorization : `${localStorage.getItem('token')}`,
                "Content-Type" : "application/json",
              },
            url : `${URL_ROOT}/transes/`,
            data:data
          }).then(res=>{
            let new_transes = transes
            new_transes.splice(new_transes.indexOf(trans), 1)
            setTranses([...new_transes])
          }).catch(err=>console.log(err))
    }

    return (
        <div className='container mt-5'>
            {transes.length > 0 ? transes.map(trans => <div key={trans.id}>
            <div className='d-flex justify-content-between'>
                <div className='d-flex col-xl-8'>
                <div className='col-xl-5'  style={{height:'150px'}}>
                    <div className='h-100 w-100'  style={{backgroundPosition: 'center', 
                            borderRadius:'20px', backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  trans.instructor.profile_image}')`}}>
                    </div>
                </div>
                <div className='col-xl-6 d-flex justify-content-evenly' style={{flexDirection:'column'}}>
                    <h5>{trans.instructor.user.username}</h5>
                    <h5>Total Amount:{trans.money_before_edit}</h5>
                </div>
                </div>
                <div className='d-flex justify-content-center' style={{flexDirection:'column'}}>
                    <h5>{trans.created_at}</h5>
                    <h5 style={{color:'#08406A'}}>{trans.instructor.website_role}</h5>
                </div>
                </div>
                <div className='m-5 col-xl-4 d-flex justify-content-between'>
                    { trans.transaction_choice === 'add_money' ?<h5 style={{color:'#0E564E'}}><i>Wallet Charging:</i></h5> : 
                    <h5 style={{color:'#CE0505'}}><i>Cut Off From Wallet:</i></h5> }
                    <h5><i>{trans.money_amount}</i></h5>
                </div>
                <div className='m-5 col-xl-12 d-flex justify-content-between align-items-center'>
                { trans.transaction_choice === 'cut_off_money' && trans.payment_company_cut_off === null ? <div className='w-100 d-flex justify-content-evenly align-items-center'>
                   <div className='d-flex align-items-center'> <img alt='' src={Next} />
                    <h5 style={{color:'#084B97', margin:0}}>Syriatel Cash</h5></div>
                    <h5 style={{margin:0}}>Account Number: {trans.number}</h5>
                </div> :
                    <h5 style={{margin:0}}>Transfer Number: {trans.number}</h5> }
                    <h5 style={{margin:0, width:'18rem'}}>Region: {trans.region}</h5>
                </div>
                <div className='mx-5 mt-5 align-items-center justify-content-evenly d-flex col-xl-5'>
                    <h5>Check Photo: </h5><a href={URL_ROOT + trans.check_image} rel='noreferrer' target='_blank'><img alt='' src={URL_ROOT + trans.check_image} className='w-100'/></a>
                    
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='my-4 d-flex justify-content-evenly col-xl-5'>
                        <button className='btn text-white px-5 py-3' onClick={()=>{approveTrans(trans)}} style={{backgroundColor:'#0E564E'}}>Approve</button>
                        <button className='btn text-white px-5 py-3' onClick={()=>{rejectTrans(trans)}} style={{backgroundColor:'#CE0505'}}>Reject</button>
                    </div>
                </div> 
            </div>): <h5 className='mx-auto' style={{width:'fit-content'}}>No Transactions</h5>} 
        </div>
        
    )
} 

export default TransComp
