import React, { useState } from 'react'
import FirstImage from './assets/Group 1578.png'
import { URL_ROOT } from '../../utils/js'
import ArrowUp from './assets/Group 1523.png'
import ArrowDown from './assets/Group 1522.png'
import PlusImg from '../payment/assets/Group 1579.png'
import parse from 'html-react-parser'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useSelector } from 'react-redux'




const ManageStudyProgram = () => {
    const history = useHistory()
    const [days, setDays] = useState([1,2])
    const [obligations, setObligations] = useState([1])
    const studyProgram = useSelector(state => state.auth.studyProgram)


    const [subjects, setSubjects] = useState([
        {
            subject_name : "",
            lessons_count : "",
            not_studied_lessons_count : ""
        },
        {
            subject_name : "",
            lessons_count : "",
            not_studied_lessons_count : ""
        }
    ])

    const [offDays, setOffDays] = useState([
        {
            day : "Sunday",
            duration : "",
            note : ""
        }
    ])

    const [subjectsPerDay, setSubjectsPerDay] = useState("")
    const [startHour, setStartHour] = useState("")
    const [endHour, setEndHour] = useState("")
    const [notes, setNotes] = useState("")



    const handleChangeSubjectName = (val, i) => {
        let subjects_ = subjects
        subjects_[i].subject_name=val
        setSubjects([...subjects_])
    }

    
    
    const handleChangeLessonsCount = (val, i) => {
        let subjects_ = subjects
        subjects_[i].lessons_count=val
        setSubjects([...subjects_])
    }
    
    const handleChangeUnexaminedLessonsCount = (val, i) => {
        let subjects_ = subjects
        subjects_[i].not_studied_lessons_count=val
        setSubjects([...subjects_])
    }
    
    const handleAddSubject = () => {
        setSubjects([...subjects, {
            subject_name : "",
            lessons_count : "",
            not_studied_lessons_count : ""
        }])

    }
    

    const handleChangeOffDay = (val, i) => {
        let offDays_ = offDays
        offDays_[i].day = val
        setOffDays([...offDays_])
    }

    
    const handleChangeOffDayDuration = (val, i) => {
        let offDays_ = offDays
        offDays_[i].duration = val
        setOffDays([...offDays_])
    }


    const getSubjectDiv = () =>{
        return subjects.map((subject, index) => 
            <div className='row my-3 justify-content-center'>

            <div className='col-xl-4 ms-5 mb-5 p-5 d-flex align-items-center'>
            <span style={{color:'#C65700', fontSize:'1.25rem'}}>{index+1}.Subject Name</span>
              <input type="text" class="mx-3 col-xl-6 form-control" name="" value={subject.subject_name} onChange={(e=>handleChangeSubjectName(e.target.value, index))} id="" aria-describedby="helpId" placeholder=""/>
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

                <div class="mb-5 pb-5 pt-4 d-flex align-items-center">
                  <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Number Of Lessons</label>
                  <input type="text" class="form-control" value={subject.lessons_count} onChange={e=>handleChangeLessonsCount(e.target.value, index)} name="" id="" aria-describedby="helpId" placeholder="" />
                </div>
                
                <div class="mb-3 d-flex align-items-center">
                  <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Unexamined lessons:</label>
                  <input type="text" class="form-control" value={subject.not_studied_lessons_count} onChange={e=>handleChangeUnexaminedLessonsCount(e.target.value, index)} name="" id="" aria-describedby="helpId" placeholder="" />
                </div>

                </div>
            </div>            
        
        </div>
            
            )
    }
    

    const getObligationsDiv = () => {
        return offDays.map((offDay, index) =>  <div className='my-4 row w-100 align-items-center px-5 mx-3'>
        <div className="mb-3 col-xl-5 align-items-center d-flex row">
              <label htmlFor="" className="col-xl-5 m-0 form-label">Certain Obligations:  In day:</label>                    
              <select className="form-control col-xl-5" aria-label="Default select example" onChange={e=>handleChangeOffDay(e.target.value, index)}>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
            </div>
            <div className="mb-3 col-xl-5 align-items-center d-flex row justify-content-evenly">
              <label htmlFor="" className="m-0 col-xl-2 form-label">Duration(minutes)</label>                    
              <input value={offDay.duration}  onChange={e=>handleChangeOffDayDuration(e.target.value, index)}  className="form-control col-xl-5" aria-label="Default select example" />
                
            </div>
            <img alt='' src={PlusImg}  style={{width:'8%', cursor:'pointer'}} onClick={()=>setOffDays([...offDays, {day:"Sunday", duration:"", note:""}])}/>

        </div>
    )
}


    const getQuestions = () => {
    
        return <>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">How many subjects do you prefer to study per day?</label>                    
              <input value={subjectsPerDay} onChange={e=>setSubjectsPerDay(e.target.value)} className="form-control col-xl-3" aria-label="Default select example" />
              
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">What time would you like to start your course?</label>                    
              <input type='time' value={startHour} onChange={e=>setStartHour(e.target.value)} className="form-control col-xl-3" aria-label="Default select example" />
                 
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">What time would you like to finish your course?</label>                    
              <input type='time' value={endHour} onChange={e=>setEndHour(e.target.value)} className="form-control col-xl-3" aria-label="Default select example" />
                  
            </div>
            <div className="mx-3 px-5 my-5 align-items-center d-flex row">
              <label htmlFor="" className="m-0 col-xl-4 form-label">Are you interested in literary or scientific subjects ?</label>                    
              <select className="form-control col-xl-3" aria-label="Default select example">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
            </div>
        </>
    }


    const handleAddStudyProgram =() => {
        let data = JSON.stringify({
            subjects : subjects,
            off_days : offDays,
            number_of_subjects_per_day : parseInt(subjectsPerDay),
            start_hour : `${startHour}:00`, 
            end_hour : `${endHour}:00`,
            notes : notes
        })

        axios({
            method: 'POST',
            url: URL_ROOT + '/manage_study_program/',
            headers: {
                Authorization : `${localStorage.getItem('token')}`
            },
            data: data
          }).then(res=>{
            history.push('/')
          }).catch(err=>console.log(err))



    }

     
    return (
        <div>
        {studyProgram ? "" :
        
            <form onSubmit={(e)=>{
                e.preventDefault()
                handleAddStudyProgram()
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
                    {getSubjectDiv()}
                    </div>
                    <div className='d-flex w-100 justify-content-center align-items-center'>
                        <img alt='' src={PlusImg}  style={{width:'8%', cursor:'pointer'}} onClick={()=>handleAddSubject()}/>
                    </div>

                    {obligations.map(e => getObligationsDiv(e))}

                    {getQuestions()}

                
                    <div class="mb-5 px-5 mx-3 d-flex align-items-center">
                    <label for="" class="form-label mx-2" style={{width:'max-content', flexShrink:'0'}}>Notes:</label>
                    <textarea onChange={e=>setNotes(e.target.value)} type="text" class="form-control col-xl-4" rows='8'  aria-describedby="helpId" placeholder="">{notes}</textarea>
                    </div>

                    <div className='d-flex w-100 justify-content-end align-items-center'>
                    <button type='submit' className='px-4 py-2 my-4' 
        style={{fontSize:'1.3rem',color:'#fff', backgroundColor:'#084B97', border:'none'}}>Submit</button>
        
                    </div>


                </div>
            </form>
        }
        </div>
    )
}


export default ManageStudyProgram