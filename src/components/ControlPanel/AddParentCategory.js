import axios from 'axios'
import React, { useState } from 'react'
import plusImg from './assets/Group 1598.png'
import { URL_ROOT }  from '../../utils/js'
import { useHistory, useRouteMatch } from 'react-router'

const AddParentCategory = () => {
    const [parentCategoryName, setParentCategoryName] = useState("")
    const [parentCategoryDescription, setParentCategoryDescription] = useState("")
    const { path } = useRouteMatch()

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData()
        form.append('parent_category_name', parentCategoryName)
        form.append('parent_category_description', parentCategoryDescription)
        form.append('parent_category_image', document.querySelector('#customCheckFile-h').files[0])
        axios({
            method : 'POST',
            url : URL_ROOT + '/parent_category_manager/',
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            },
            data:form
          }).then(res=>{
              document.querySelector('.to-dash').click()
            history.push(path.split('/add_parent_category')[0])
          }).catch(err=>console.log(err))
    }
    return (
        <div className='container'>
            <nav className='bc-dv d-flex justify-content-between align-items-center' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">Courses</li>
                <li className="breadcrumb-item">Add Parent Category</li>
              </ol> 
            </nav>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='d-flex align-items-center mb-5'>
                        <h5 className='ms-5' style={{color:'#1080D4'}}>Parent Category Name :</h5>
                  <input placeholder="Enter Parent Category Name" className="login-input col-xl-6" value={parentCategoryName} onChange={(e)=>setParentCategoryName(e.target.value)} required/>      
            </div>
            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-2' style={{color:'#1080D4'}}>Description :</h5>
                  <textarea placeholder="Enter Parent Category Description" className="login-input col-xl-7" value={parentCategoryDescription} onChange={(e)=>setParentCategoryDescription(e.target.value)} required rows="5"/>      
            </div>

            <div className="ms-2 ps-5 mb-3 row align-items-center">
                      <label htmlFor="customCheckFile-h"  className="click-to-show form-label col-xl-3"
                       style={{cursor:'pointer'}}><h5 style={{color:'#1080D4'}}>Photo:</h5></label>
                        <input type="file" required onChange={(e)=>{             
                          document.querySelector('.show-image-for-me-d').parentElement.classList.add('col-xl-3')
                                     
                            document.querySelector('.show-image-for-me-d').src=URL.createObjectURL(e.target.files[0])
                          }} className="col-xl-4 form-file-input" id="customCheckFile-h" style={{opacity:'0', position:'absolute', zIndex:'-1'}}/>
                        
                    <div className='col-xl-1 d-flex justify-content-start'>
                      <img alt='' className='w-50 show-image-for-me-d'/>
                    </div>

                        <img style={{cursor:"pointer"}} alt='' src={plusImg} className='col-xl-1' onClick={()=>{document.querySelector('.click-to-show').click();}}/>
                    </div>
                    <div className='my-4 d-flex justify-content-evenly'>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}} type="submit">Add Parent Category</button>
               </div>
            </form>
        </div>
    )
}

export default AddParentCategory
