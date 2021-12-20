import React from 'react'
import FirstImage from './assets/Group 1578.png'
import { URL_ROOT } from '../../utils/js'
import ArrowUp from './assets'


const ManageStudyProgram = () => {
    
    const getSubjectDiv = (counter) =>{
        return <div className='row'>

            <div className='col-xl-5'>
                {counter}.
                  <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>

            <div className='col-xl-6 row'>
                <div className='col-xl-2 d-flex justify-content-center align-items-center'>
                    <h5>Content</h5>
                </div>
                <div className='col-xl-3'>

                </div>
            </div>            
        
        </div>
    }
    
    return (
        <div>
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
                
            </div>
        </div>
    )
}


export default ManageStudyProgram