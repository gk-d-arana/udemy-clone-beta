import React, { useEffect, useState } from 'react'
import cartImage from './assets/10107.png'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import { Link, useHistory } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'
import cartEmptyImage from './assets/folder (2)@2x.png'
import PlusImg from './assets/Group 1579.png'


export const Wallet = (props) => {
    const history = useHistory()
    const [moneyAmount, setMoneyAmount] = useState(0.00)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [toPhoneNumber, setToPhoneNumber] = useState('937817839')

    useEffect(()=>{
        if(localStorage.getItem('token') === undefined)history.push('/')          
        axios({
          method : 'GET',
          url :URL_ROOT + '/wallet_manager/',
          headers : {
              Authorization : `${localStorage.getItem('token')}`
            }
      }).then(res => {
        setMoneyAmount(res.data.money_amount)
        setPhoneNumber(res.data.number)

      }).catch(err => console.log(err))
      },[])


      const handleUpdateWallet = () =>{
        let form = new FormData()
        form.append('money_amount', moneyAmount)
        form.append('number', phoneNumber)
        form.append('number_sent_to', phoneNumber)

        form.append('check_image', document.querySelector('#customCheckFile').files[0])
        axios({
          method : 'PUT',
          url :URL_ROOT + '/wallet_manager/',
          headers : {
              Authorization : `${localStorage.getItem('token')}`
            },
            data:form
      }).then(res => {
        console.log(res)
      }).catch(err => console.log(err))
      
      }

    return (
        <div className='p-4 cart-wrapper'>
            <h3>Your Wallet</h3>
            <div className="card card-notif m-3 col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                <div  className='link-div w-100 text-center'> 
                  {moneyAmount? moneyAmount  === 0 ? <>
                    
                    <img alt='' src={cartEmptyImage} style={{width:'15%'}}/>
                    <h3 style={{fontSize:'1.3rem'}}>Your Wallet Is Empty</h3>
                    <h3 style={{fontSize:'1.3rem'}}>Please Fill It</h3> </> : <> 
                    <form onSubmit={(e)=>{e.preventDefault();handleUpdateWallet()}}>
                    <div className="mb-3">
                      <input value={moneyAmount} onChange={(e)=>{
                        try{
                          parseFloat(e.target.value) >= 0 ? setMoneyAmount(parseFloat(e.target.value)) : setMoneyAmount(0.0)
                        }
                        catch(e){
                          console.log(e)
                        }
                        }} type="text" style={{
                          margin:'0 auto', width:'25%', textAlign:'center'
                        }} className="walletMoney form-control" name="moneyAmount" id="" aria-describedby="moneyAmount" placeholder="0.00" />
                    </div>

                    <div className="mb-3 align-items-center row">
                      <label htmlFor="" className="col-xl-3 form-label">Enter Your Region</label>                    
                      <select className="form-select col-xl-5" aria-label="Default select example">
                          <option value="Damascus">Damascus</option>
                          <option value="Allepo">Allepo</option>
                          <option value="Homs">Homs</option>
                        </select>
                    </div>
                    <div className="mb-3 row align-items-cetner">
                      <label htmlFor="" className="form-label col-xl-4">Enter The Transfer Number:</label>
                      <input type="text" className="form-control col-xl-1 px-1" style={{width:'max-content'}} name="" id="" aria-describedby="helpId" placeholder="" value="+963" disabled/>
                      <input type="text" className="form-control col-xl-5" name="" onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} id="" aria-describedby="helpId" placeholder=""  required/>
                    </div>
                    <div className="mb-3 row align-items-cetner">
                      <label htmlFor="" className="form-label col-xl-1">To:</label>
                      <input type="text" className="form-control col-xl-1 px-1" style={{width:'max-content'}} name="" id="" aria-describedby="helpId" placeholder="" value="+963" disabled/>
                      <input type="text" className="form-control col-xl-5" name="" onChange={(e)=>setToPhoneNumber(e.target.value)} value={toPhoneNumber} id="" aria-describedby="helpId" placeholder=""  required/>
                    </div>
                    <div className="mb-3 row align-items-center">
                      <label htmlFor="customCheckFile" className="click-to-show form-label col-xl-4" style={{cursor:'pointer'}}>Add The Check Photo:</label>
                        <input type="file" required onChange={(e)=>{             
                          document.querySelector('.show-image-for-me').parentElement.classList.add('col-xl-8')
                                     
                            document.querySelector('.show-image-for-me').src=URL.createObjectURL(e.target.files[0])
                          }} className="col-xl-4 form-file-input" id="customCheckFile" style={{opacity:'0', position:'absolute', zIndex:'-1'}}/>
                        
                    <div className='col-xl-1 d-flex justify-content-start'>
                      <img alt='' style={{width:'25%'}} className='show-image-for-me'/>
                    </div>

                        <img style={{cursor:"pointer"}} alt='' src={PlusImg} className='col-xl-2' onClick={()=>{document.querySelector('.click-to-show').click();}}/>
                    </div>
                    <div className='d-flex'>
                    <button type='submit' style={{border:'none', width:'fit-content'}} className="my-5 nav-item username mx-auto">
                    Update Wallet
                  </button>
                    </div>
                    </form>
                  </>: ""}
              </div>
            </div>
            </div>
            <div className='position-absolute ct-c text-center'>
              <img className='cart-img ' src={cartImage} alt='cart' />
            </div>
            </div>
    )
}



export default Wallet