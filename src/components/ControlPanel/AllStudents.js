import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import { URL_ROOT } from '../../utils/js'
import PaginationComp from '../utilComponents/Pagination';


const AllStudents = () => {

    const [students, setStudents] = useState([])
    const [page, setPage]= useState(1)
    const [count, setCount]= useState(1)
    const { path } = useRouteMatch()
    

    useEffect(()=>{
        console.log()
        axios({
            method: "GET",
            url : `${URL_ROOT}/api_all_students/?page=` + page
          }).then(res=>{
            setStudents(res.data.results)
            setCount(Math.ceil(res.data.count/10))
            //setPage(res.data.next ?parseInt( res.data.next.split('?')[1].split('=')[1]) : 1)
          }).catch(err=>console.log(err))
    },[page])



    return (
        <div className='mt-3' style={{minHeight:'100vh', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                {students.length > 0 ? <div className='gridded-goals2-tc mx-auto col-xl-10' style={{gridColumnGap:'18%'}}>
                {students.map(student => <Link to={'/control_panel/student_info/' + student.id} className='py-3 px-4' style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    border:'1px solid #000', borderRadius:'20px'
                    }} key={student.id}>
                    <div className='d-flex justify-content-evenly'>
                        <div className='align-items-center d-flex w-100 justify-content-between '>
                            <div  style={{backgroundPosition: 'center', 
                                 width:'10rem', height:'100px' ,backgroundSize: 'cover' ,backgroundImage: `url('${URL_ROOT +  student.profile_image}')`, display:'block',  borderRadius:'40px'}}>
                            </div>
                            <div className='text-center'>

                        <h5 /* style={{color:'#F67D20'}} */>{student.user? student.user.username : ""}</h5>
                        <h5>{new Date(student.user.date_joined).toLocaleDateString()}
                    
                        </h5>
                        <i className='bx bx-trash' style={{color:'red', fontSize:'1.3rem', cursor:'pointer', flexDirection:'column', display:'flex', justifyContent:'center'}} id={student.id}></i>
                            </div>
                        </div>
                    </div>{/* 
                    <div className='d-flex justify-content-between'>
                        <h5>{student.multiple_choice_questions.length + ' '}Choices</h5>
                        <h5>{student.editorial_questions.length + ' '} Questions</h5>
                    </div> */}
                </Link>)}
                </div>: <p className='mx-auto' style={{color:'#1080D4', width:'fit-content'}}>No students</p>}
                    <div>
            <PaginationComp count={count} setPage={setPage}/>
            <div className='my-4 d-flex  justify-content-evenly'>
                <Link to="/control_panel/add_student"><button className='btn text-white px-5 py-3' style={{backgroundColor:'#0E564E'}}>Add student</button></Link>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#C345DD'}}>Edit student</button>
            </div>
            </div>
        </div>
    )
}

export default AllStudents
