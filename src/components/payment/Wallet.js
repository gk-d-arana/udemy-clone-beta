import React, { useEffect, useState } from 'react'
import cartImage from './assets/10107.png'
import './assets/styles.css'
import axios from 'axios'
import { URL_ROOT }  from '../../utils/js'
import { Link, useHistory } from 'react-router-dom'
import { getRatingDiv } from '../course/CourseContent'
import cartEmptyImage from './assets/folder (2)@2x.png'
import PlusImg from './assets/Group 1579.png'
import { Checkbox } from '@mui/material'
import Syr from './assets/Group 1577.png'
import PayC from './assets/Group 1567.png'

/* 
{
    "transaction_choice":"cut_off_money",
    "money_to_cut" : 1000,
    "region" : "Damascus",
    "number": "+963937817839"
}

{
    "transaction_choice":"cut_off_money",
    "money_to_cut" : 1000,
    "payment_company_id" : 1,
    "branch_id" : 2,
    "full_name" : "shareef hussami",
    "region" : "Damascus",
    "number": "+963937817839"
}


*/

export const Wallet = (props) => {
    const [moneyForCut, setMoneyForCut] = useState(0.00)
    const [selectedPId, setSelectedPId] = useState(1)
    const [paymentCompanyId, setPaymentCompanyId] = useState(null)
    const [branchId, setBranchId] = useState(null)
    const [fullName, setFullName] = useState(null)
    const [region, setRegion] = useState("Damascus")
    const [phoneNumberPayComp, setPhoneNumberPayComp] = useState("")
    const [pComps, setPComps] = useState([])
    const [showSuccessDiv, setShowSuccessDiv ] = useState(true)
    const history = useHistory()  
    const [moneyAmount, setMoneyAmount] = useState(0.00)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [toPhoneNumber, setToPhoneNumber] = useState('937817839')
    const [showCutOffMoney, setShowCutOffMoney] = useState(false)
    const [moneyForTransfer, setMoneyForTransfer] = useState(0.00)
    const [firstDiv, setFirstDiv] = useState(true)
    const [secondDiv, setSecondDiv] = useState(false)
    const [thirdDiv, setThirdDiv] = useState(false)
    const [cutOffMoney, setCutOffMoney] = useState(0)
    const [syrPhoneNumber, setSyrPhoneNumber] = useState("")

  
    const handleSubmitCutOff = () => {
      let data = ""
      if(paymentCompanyId){
      data = JSON.stringify({
    transaction_choice:"cut_off_money",
    money_to_cut : moneyForCut,
    payment_company_id : paymentCompanyId,
    branch_id : branchId,
    full_name : `${fullName}`,
    region : `${region}`,
    number: `${phoneNumberPayComp}`
      })
    }
      else{
        data = JSON.stringify({
          transaction_choice:"cut_off_money",
          money_to_cut : `${cutOffMoney}`,
          region : `${region}`,
          number: `${syrPhoneNumber}`
        })
      }
      axios({
        method : 'PUT',
        url :URL_ROOT + '/wallet_manager/',
        headers : {
            Authorization : `${localStorage.getItem('token')}`
          },
          data:data
    }).then(res => {
      setShowSuccessDiv(true)
      setShowCutOffMoney(!showCutOffMoney)
              
              if(!showCutOffMoney === false) document.querySelector('.showCutOffMoneyBtn').click()
              document.querySelectorAll('.modal-backdrop').forEach(mb=>{
                mb.remove()
            })
    }).catch(err => console.log(err))
    }


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
      
      axios({
        method : 'GET',
        url :URL_ROOT + '/all_p_comps/',
    }).then(res => {
      setPComps(res.data)

    }).catch(err => console.log(err))
    
      },[])


      const handleUpdateWallet = () =>{
        let form = new FormData()
        form.append('money_amount', moneyForTransfer)
        form.append('number', phoneNumber)
        form.append('number_sent_to', phoneNumber)
        form.append('region', region)
        form.append('transaction_choice', 'add_money')

        form.append('check_image', document.querySelector('#customCheckFile').files[0])
        axios({
          method : 'POST',
          url :URL_ROOT + '/wallet_manager/',
          headers : {
              Authorization : `${localStorage.getItem('token')}`
            },
            data:form
      }).then(res => {
        console.log(res)
      setShowSuccessDiv(true)

      }).catch(err => console.log(err))
      
      }

    return (
        <div className='p-4 cart-wrapper'>
            <h3>Your Wallet</h3>
            <div className="card card-notif m-3 col-6 bg-white" style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <div className="card-body">
                {showSuccessDiv && <div class="alert alert-success alert-dismissible w-100 mb-4 fade show" role="alert">
                  Your Request Has Been Sent Please Wait For Admin Approval
                  <button type="button" class="btn-close" onClick={()=>{setShowSuccessDiv(false)}} aria-label="Close"></button>
                </div>}
                <div  className='link-div w-100 text-center'> 
                  {moneyAmount? moneyAmount  === 0 ? <>
                    
                    <img alt='' src={cartEmptyImage} style={{width:'15%'}}/>
                    <h3 style={{fontSize:'1.3rem'}}>Your Wallet Is Empty</h3>
                    <h3 style={{fontSize:'1.3rem'}}>Please Fill It</h3> </> : <> 
                    <form onSubmit={(e)=>{e.preventDefault();handleUpdateWallet()}}>
                    <div className="mb-3">
                      <h5>You Have In Your Wallet {moneyAmount}</h5>
                      <input value={moneyForTransfer} onChange={(e)=>{
                        try{
                          parseFloat(e.target.value) >= 0 ? setMoneyForTransfer(parseFloat(e.target.value)) : setMoneyForTransfer(0.0)
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
            <div className='w-100 d-flex justify-content-end align-items-center'>
            <Checkbox type='checkbox' checked={showCutOffMoney} style={{color:'gold'}} onChange={()=>{
              setShowCutOffMoney(!showCutOffMoney)
              
              if(!showCutOffMoney === true) document.querySelector('.showCutOffMoneyBtn').click()
              document.querySelectorAll('.modal-backdrop').forEach(mb=>{
                mb.classList.add('w-100')
            })
              }}/><i>Do You want to cut off your wallet</i>
            
            </div>

            <button type="button" style={{display:'none'}} className="showCutOffMoneyBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#showCutOffMoneyModal">
              Launch demo modal
            </button>
            <div className="modal w-100 fade" data-bs-backdrop="static" data-bs-keyboard="false" id="showCutOffMoneyModal" taIbndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content my-5">
                  {firstDiv && <div className="text-center modal-body py-3 my-5">
                  <h5>Choose The Way To Cut Off The Amount You Want</h5>
                  <button className='btn px-5 py-0 my-5 text-white p-3' onClick={()=>{
                    setSecondDiv(true)
                    setFirstDiv(false)
                  }}  style={{height:'fit-content', backgroundColor:'#084B97'}}>Syriatel Cash</button>
                    <h5 className='or-div'><i>Or</i></h5>
                  <button className='btn px-5 py-0 my-5 text-white p-3' onClick={()=>{
                    setThirdDiv(true)
                    setFirstDiv(false)
                  }}  style={{height:'fit-content', backgroundColor:'#084B97'}}>Payment Company</button>
                  </div>
                  }
                  {secondDiv && <form onSubmit={()=>handleSubmitCutOff()} className="modal-body py-3 px-4">
                  <img alt='' src={Syr} className='mt-2 col-xl-4'/>
                  <h5>The Total Amount Is: {moneyAmount + 'sp'}</h5>
                  <div className='d-flex my-4'>
                    <h5>How much do u want to cut off :</h5>
                    <input required type="text" className="col-xl-5 ms-3 form-control" onChange={(e)=>setCutOffMoney(e.target.value)} value={cutOffMoney} aria-label="Input group example" aria-describedby="btnGroupAddon" />

                  </div>
                  <div className='d-flex my-4'>
                    <h5> Enter number of your account in syriatel cash :</h5>
                    <input required type="text" className="col-xl-4 ms-3 form-control" onChange={(e)=>setSyrPhoneNumber(e.target.value)} value={syrPhoneNumber} aria-label="Input group example" aria-describedby="btnGroupAddon" />
                  </div>
                  <div className='text-end px-4'>
                  <button className='btn px-5 py-0 my-5 text-white p-3' type="submit" style={{height:'fit-content', backgroundColor:'#084B97'}}>Confirm</button>
                  </div>
                  </form>
                  }

                  {thirdDiv && <form onSubmit={()=>handleSubmitCutOff()} className="modal-body my-4">
                    <div className='d-flex'>

                   <i className='bx bx-left-arrow-alt'></i> 
                  <img alt='' src={PayC} className='mt-2 col-xl-4'/>
                    </div>
                  <div className='d-flex my-4'>
                    <h5>How much do u want to cut off :</h5>
                    <input type="text" className="col-xl-5 ms-3 form-control" onChange={(e)=>setCutOffMoney(e.target.value)} value={cutOffMoney} aria-label="Input group example" aria-describedby="btnGroupAddon" required/>

                  </div>
                  <div className='d-flex my-4'>
                    <h5> Choose Payment Company :</h5>
                    <select class="col-xl-4 ms-3 form-select" aria-label="Default select example">
                      {pComps.map(pcc => <option onClick={(e)=>{setSelectedPId(parseInt(e.target.id));setPaymentCompanyId(e.target.id)}} id={pcc.id} value={pcc.name} key={pcc.id}>{pcc.name}</option>)}
                    </select>
                  </div>

                  <div className='d-flex my-4'>

                    <h5> Enter your Full Name :</h5>
                    <input required type="text" className="col-xl-4 ms-3 form-control" onChange={(e)=>setFullName(e.target.value)} value={fullName} aria-label="Input group example" aria-describedby="btnGroupAddon" />
                  </div>
                  <div className='d-flex my-4'>
                    <h5> Enter your number :</h5>
                    <input required type="text" className="col-xl-4 ms-3 form-control" onChange={(e)=>setPhoneNumberPayComp(e.target.value)} value={phoneNumberPayComp} aria-label="Input group example" aria-describedby="btnGroupAddon" />
                  </div>
                  <div className='d-flex my-4'>
                    <h5> Choose Your Region :</h5>
                    <select class="col-xl-4  form-select ms-3" aria-label="Default select example">
                      <option value="Damascus">Damascus</option>
                    </select>
                  </div>
                  <div className='d-flex my-4'>
                    <h5>choose the appropriate branch for you :</h5>
                    <select class="col-xl-4  form-select ms-3" aria-label="Default select example">
                      {pComps[selectedPId-1 ] ? pComps[selectedPId-1].branches.map(arr => 
                         <option value={arr.branch_name} onClick={(e)=>setBranchId(e.target.id)} key={arr.id}>{arr.branch_name}</option>) : ""}
                    </select>
                  </div>
                  <div className='text-end px-4'>
                  <button className='btn px-5 pt-0 mt-5 text-white p-3' type="submit"  style={{height:'fit-content', backgroundColor:'#084B97'}}>Confirm</button>
                  </div>
                  </form>
                  }
                  
                </div>
              </div>
            </div>
            </div>
    )
}



export default Wallet