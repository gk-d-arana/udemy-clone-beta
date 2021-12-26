import React, { useEffect, useState } from 'react'
import './assets/styes.css'
import { URL_ROOT }  from '../../utils/js'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import PaginationComp from '../utilComponents/Pagination';
import SearchImage from './assets/search (1).png'



const AllTests = () => {
    const [tests, setTests] = useState([])
    const [page, setPage]= useState(1)
    const [count, setCount]= useState(1)
    const { path } = useRouteMatch()

    useEffect(()=>{
        axios({
            method: "GET",
            url : `${URL_ROOT}/tests/?page=` + page
          }).then(res=>{
            setTests(res.data.results)
            setCount(Math.ceil(res.data.count/10))
          }).catch(err=>console.log(err))    
    },[page])

      return (
        <div className='mt-3' style={{minHeight:'90vh', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                {tests.length > 0 ? <div className='gridded-goals2-t mx-auto col-xl-8' style={{gridColumnGap:'18%'}}>
                {tests.map(test => <div className='py-3 px-4' style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    border:'1px solid #000', borderRadius:'20px'
                    }} key={test.id}>
                    <div className='d-flex justify-content-between'>
                        <div className='align-items-center d-flex'>
                            <img alt='' src={SearchImage} />
                            <h5>{test.name}</h5>
                        </div>
                        <i className='bx bx-trash' style={{color:'red', fontSize:'1.3rem', cursor:'pointer', flexDirection:'column', display:'flex', justifyContent:'center'}} id={test.id}></i>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <h5 style={{color:'#F67D20'}}>{test.parent_category? test.parent_category.parent_category_name : ""}</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>{test.multiple_choice_questions.length + ' '}Choices</h5>
                        <h5>{test.editorial_questions.length + ' '} Questions</h5>

                    </div>
                </div>)}
                </div>: <p style={{color:'#1080D4'}}>No Tests</p>}
                    <div>
            <PaginationComp count={count} setPage={setPage}/>
            <div className='my-4 d-flex justify-content-evenly'>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add Test</button>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#C345DD'}}>Edit Test</button>
            </div>
            </div>
        </div>
    )
}

export default AllTests
