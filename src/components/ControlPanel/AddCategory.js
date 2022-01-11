import axios from 'axios'
import React, { useState } from 'react'
import plusImg from './assets/Group 1598.png'
import { URL_ROOT }  from '../../utils/js'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")
    const [parentCategoryId, setParentCategoryId] = useState("")
    const tpc = useSelector(state => state.mainData.topPcats)
    const { path } = useRouteMatch()

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData()
        form.append('category_name', categoryName)
        form.append('category_description', categoryDescription)
        form.append('category_image', document.querySelector('#customCheckFile-d').files[0])

        form.append('parent_category_id', parentCategoryId)
        axios({
            method : 'POST',
            url : URL_ROOT + '/category_manager/',
            headers : {
              Authorization : `${localStorage.getItem('token')}`
            },
            data:form
          }).then(res=>{
              document.querySelector('.to-dash').click()
            history.push(path.split('/add_category')[0])
          }).catch(err=>console.log(err))
    }
    return (
        <div className='container'>
            <nav className='bc-dv d-flex justify-content-between align-items-center' style={{fontSize:'2rem'}} aria-label="breadcrumb ">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">Courses</li>
                <li className="breadcrumb-item">Add Category</li>
              </ol> 
            </nav>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='d-flex align-items-center mb-5'>
                        <h5 className='ms-5' style={{color:'#1080D4'}}>Category Name :</h5>
                  <input placeholder="Enter Category Name" className="login-input col-xl-6" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} required/>      
            </div>
            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-2' style={{color:'#1080D4'}}>Description :</h5>
                  <textarea placeholder="Enter Category Description" className="login-input col-xl-7" value={categoryDescription} onChange={(e)=>setCategoryDescription(e.target.value)} required rows="5"/>      
            </div>
            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Parent Category :</h5>
                        <select onChange={(e)=>{setParentCategoryId(e.target.value)}} class="form-select col-xl-4" aria-label="Default select example" required>
                          <option hidden selected>Choose Parent Category</option>
                          {tpc.map(pcat => <option value={pcat.parent_category_id}>{pcat.parent_category_name}</option>)}
                        </select>
            </div>
            <div className="ms-2 ps-5 mb-3 row align-items-center">
                      <label htmlFor="customCheckFile-d"  className="click-to-show form-label col-xl-3"
                       style={{cursor:'pointer'}}><h5 style={{color:'#1080D4'}}>Photo:</h5></label>
                        <input type="file" required onChange={(e)=>{             
                          document.querySelector('.show-image-for-me-d').parentElement.classList.add('col-xl-3')
                                     
                            document.querySelector('.show-image-for-me-d').src=URL.createObjectURL(e.target.files[0])
                          }} className="col-xl-4 form-file-input" id="customCheckFile-d" style={{opacity:'0', position:'absolute', zIndex:'-1'}}/>
                        
                    <div className='col-xl-1 d-flex justify-content-start'>
                      <img alt='' className='w-50 show-image-for-me-d'/>
                    </div>

                        <img style={{cursor:"pointer"}} alt='' src={plusImg} className='col-xl-1' onClick={()=>{document.querySelector('.click-to-show').click();}}/>
                    </div>
                    <div className='my-4 d-flex justify-content-evenly'>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}} type="submit">Add Category</button>
               </div>
            </form>
        </div>
    )
}

export default AddCategory
