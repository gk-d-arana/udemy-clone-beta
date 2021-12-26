import React, { useState } from 'react'
import FirstImage from './assets/Group 1578.png'
import { URL_ROOT } from '../../utils/js'
import ArrowUp from './assets/Group 1523.png'
import ArrowDown from './assets/Group 1522.png'
import PlusImg from '../payment/assets/Group 1579.png'
import parse from 'html-react-parser'




const ManageStudyProgram = () => {
    
    const [days, setDays] = useState([1,2])
    const [obligations, setObligations] = useState([1])


    const getSubjectDiv = (counter) =>{
        return <div className='row my-3 justify-content-center'>

            <div className='col-xl-4 ms-5 mb-5 p-5 d-flex align-items-center'>
            <span style={{color:'#C65700', fontSize:'1.25rem'}}>{counter}.Subject Name</span>
              <input type="text" class="mx-3 col-xl-6 form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>

            <div className='col-xl-6 row'>
                <div className='col-xl-1 d-flex justify-content-center align-items-center'>
                    <h5>Content:</h5>
                </div>
                <div className='col-xl-2'>
                    <img alt='' style={{width:'100%', marginTop:'20px'}} src={ArrowUp}/> <br/>
                    <img alt='' style={{width:'100%'}} src={ArrowDown}/>
                </div>

                <div className='col-xl-8'>

                <div class="mb-5 d-flex align-items-center">
                  <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Number Of Lessons</label>
                  <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                </div>
                
                <div class="mb-3 pt-5 d-flex align-items-center">
                  <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Unexamined lessons:</label>
                  <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                </div>

                </div>
            </div>            
        
        </div>
    }
    

    const getObligationsDiv = () => {
        return  <div className='my-4 row w-100 align-items-center px-5 mx-3'>
        <div className="mb-3 col-xl-5 align-items-center d-flex row">
              <label htmlFor="" className="col-xl-5 m-0 form-label">Certain Obligations:  In day:</label>                    
              <select className="form-select col-xl-5" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
            <div className="mb-3 col-xl-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-2 form-label">Duration</label>                    
              <select className="form-select col-xl-5" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
            <img alt='' src={PlusImg}  style={{width:'8%', cursor:'pointer'}} onClick={()=>setObligations([...obligations, obligations[obligations.length-1]+1])}/>

        </div>
    }


    const getQuestions = () => {
        return <>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">How many subjects do you prefer to study per day?</label>                    
              <select className="form-select col-xl-3" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">What time would you like to start your course?</label>                    
              <select className="form-select col-xl-3" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">What time would you like to finish your course?</label>                    
              <select className="form-select col-xl-3" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">Are you interested in literary or scientific subjects ?</label>                    
              <select className="form-select col-xl-3" aria-label="Default select example">
                  <option value="Damascus">Damascus</option>
                  <option value="Allepo">Allepo</option>
                  <option value="Homs">Homs</option>
                </select>
            </div>
        </>
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log('click')
        }}>
            <div className='w-100 mb-4' style={{height:'230px',backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundImage: `url('${FirstImage}')`}}>
                <h3 className='px-4 py-4' style={{color:'#fff'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. 
                </h3>


            </div>
            <div className='p-3'>
                <h5>Some information we need to design your study program</h5>
                <div className='programs-cont'>
                {days.map(e => getSubjectDiv(e))}
                </div>
                <div className='d-flex w-100 justify-content-center align-items-center'>
                    <img alt='' src={PlusImg}  style={{width:'8%', cursor:'pointer'}} onClick={()=>setDays([...days, days[days.length-1]+1])}/>
                </div>

                {obligations.map(e => getObligationsDiv(e))}

                {getQuestions()}

            
                <div class="mb-5 px-5 mx-3 d-flex align-items-center">
                  <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Notes:</label>
                  <textarea type="text" class="form-control col-xl-4" rows='8'  aria-describedby="helpId" placeholder=""></textarea>
                </div>

                <div className='d-flex w-100 justify-content-end align-items-center'>
                <button type='submit' className='px-4 py-2 my-4' 
     style={{fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97', border:'none'}}>Submit</button>
    
                </div>


            </div>
        </form>
    )
}


export default ManageStudyProgram