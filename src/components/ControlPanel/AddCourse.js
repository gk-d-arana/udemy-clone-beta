import axios from 'axios'
import React, { useEffect, useState } from 'react'
import plusImg from './assets/Group 1598.png'
import { URL_ROOT }  from '../../utils/js'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'
import { Checkbox } from '@mui/material';
import PlusImg from '../payment/assets/Group 1579.png'


const AddCourse = () => {
    const [testName, setTestName] = useState("")
    const [testPrice, setTestPrice] = useState(0)
    const [instructorId, setInstructorId] = useState("")
    const [testDescription, setTestDescription] = useState("")
    const ti = useSelector(state => state.mainData.topInstructors)
    const [parentCategoryId, setParentCategoryId] = useState("")
    const tpc = useSelector(state => state.mainData.topPcats)
    const [categoryId, setCategoryId] = useState("")
    const tc = useSelector(state => state.mainData.topCats)
    const [level, setLevel] = useState("Begginer")
    const [testGoal, setTestGoal] = useState("")
    const [testRequires, setTestRequires] = useState("")
    const [testForWho, setTestForWho] = useState("")

    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    

    const [sections, setSections] = useState([{
      section_name : "",
      showArticle: false,
      videos : [],
      hasTests: false,
      choiceQuestions: [
            {
              question: "",
              answers : [
                "", "", "", ""
              ]    
            }
          ],
      EditorQuestions: [
            {
              question : "", 
              answer : ""
            }
          ]
    }])

    const handleChangeMQuestion = (question, mqId, index) =>{
      let sections_ = sections
      sections_[index].choiceQuestions[mqId].question = question
      setSections([...sections_]) 
    }

    
    const handleChangeMAnswer = (answer, mqId, index, i) =>{
      let sections_ = sections
      sections_[index].choiceQuestions[mqId].answers[i] = answer
      setSections([...sections_]) 
    }

    
    const handleAddAnotherMq = (index) => {
      let sections_ = sections
      sections_[index].choiceQuestions[(sections_[index].choiceQuestions.length+1)] = {
        question: "",
        answers : [
          "", "", "", ""
        ] 
      }
      setSections([...sections_]) 
    }



    const handleChangeEQuestion = (question, mqId, index) =>{
      let sections_ = sections
      sections_[index].EditorQuestions[mqId].question = question
      setSections([...sections_]) 
    }

    
    const handleChangeEAnswer = (answer, mqId, index) =>{
      let sections_ = sections
      sections_[index].EditorQuestions[mqId].answer = answer
      setSections([...sections_]) 
    }

    
    const handleAddAnotherEq = (index) => {
      let sections_ = sections
      sections_[index].EditorQuestions[(sections_[index].EditorQuestions.length+1)] = {
        question: "",
        answer : ""
      }
      setSections([...sections_]) 
    }



    const handleAddSection = ()=>{
      let sections_ = sections
      sections_.push({
        section_name : "",
        showArticle: false,
        videos : [],
        hasTests: false,
        choiceQuestions: [
              {
                question: "",
                answers : [
                  "", "", "", ""
                ]    
              }
            ],
        EditorQuestions: [
              {
                question : "", 
                answer : ""
              }
            ]
      })
      setSections([...sections_])
    }



    
    const handleShowArticle = (index) => {
      let sections_ = sections
      sections_[index].showArticle = !sections_[index].showArticle
      setSections([...sections_]) 
    }




    const handleSectionNameChange = (section_name, index)=> {
      let sections_ = sections
      sections_[index].section_name = section_name
      setSections([...sections_]) 
    }

    const handleAddVideo = (video, index) => {
      let sections_ = sections
      sections_[index].videos.push({
        'video_name' : '',
        "video_file" : video
      })
      setSections([...sections_]) 
    }

    const handleShowTest = index => {
      let sections_ = sections
      sections_[index].hasTests = !sections_[index].hasTests
      setSections([...sections_]) 
    }
  
    const { path } = useRouteMatch()

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData()
        form.append('category_name', testName)
        form.append('category_description', testDescription)
        form.append('category_image', document.querySelector('#customCheckFile-d').files[0])

        form.append('parent_category_id', instructorId)
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
                <li className="breadcrumb-item">Add New Course</li>
              </ol> 
            </nav>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='d-flex align-items-center mb-5'>
                        <h5 className='ms-5' style={{color:'#1080D4'}}>Course Name :</h5>
                  <input placeholder="Enter Course Name" className="login-input col-xl-6" value={testName} onChange={(e)=>setTestName(e.target.value)} required/>      
            </div>
            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-2' style={{color:'#1080D4'}}>Description :</h5>
                  <textarea placeholder="Enter Test Description" className="login-input col-xl-7" value={testDescription} onChange={(e)=>setTestDescription(e.target.value)} required rows="5"/>      
            </div>
            <div className='d-flex  my-5 justify-content-evenly align-items-center'>
            <div className='d-flex col-xl-4 align-items-center ps-4'>
                        <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Instructor :</h5>
                        <select onChange={(e)=>{setInstructorId(e.target.value)}} className="form-select col-xl-7" aria-label="Default select example" required>
                          <option hidden selected>Choose Instructor</option>
                          {ti.map(instruc => <option value={instruc.id}>{instruc.user.username}</option>)}
                        </select>
            </div>
            <div className='d-flex col-xl-4 align-items-center'>

                        <h5 className='ms-5' style={{color:'#1080D4'}}>Test Price :</h5>
                  <input placeholder="Enter Test Name" className="login-input col-xl-4 text-center  " value={testPrice} onChange={(e)=>{
                    if(!isNaN(parseInt(e.target.value)))
                      setTestPrice(parseInt(e.target.value))
                    else
                    setTestPrice(0)
                  }} required/>      
            </div>
            </div>
          
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex w-50 align-items-center ps-4 my-5'>
                          <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Parent Category :</h5>
                          <select onChange={(e)=>{setParentCategoryId(e.target.value)}} className="form-select col-xl-7" aria-label="Default select example" required>
                            <option hidden selected>Choose Parent Category</option>
                            {tpc.map(pcat => <option value={pcat.parent_category_id}>{pcat.parent_category_name}</option>)}
                          </select>
              </div>
              <div className='d-flex w-50 align-items-center ps-4 my-5'>
                          <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Language :</h5>
                          <select onChange={(e)=>{setParentCategoryId(e.target.value)}} className="form-select col-xl-7" aria-label="Default select example" required>
                            <option hidden selected>Choose Language</option>
                            {tpc.map(pcat => <option value={pcat.parent_category_id}>{pcat.parent_category_name}</option>)}
                          </select>
              </div>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex w-50 align-items-center ps-4 my-5'>
                          <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Category :</h5>
                          <select onChange={(e)=>{setCategoryId(e.target.value)}} className="form-select col-xl-7" aria-label="Default select example" required>
                            <option hidden selected>Choose Category</option>
                            {tc.map(cat => <option value={cat.category_id}>{cat.category_name}</option>)}
                          </select>
              </div>
              <div className='d-flex w-50 align-items-center ps-4 my-5'>
                          <h5 className='ms-4 pe-3' style={{color:'#1080D4'}}>Level :</h5>
                          <select onChange={(e)=>{setLevel(e.target.value)}} className="form-select col-xl-7" aria-label="Default select example" required>
                            <option hidden selected>Choose Level</option>
                            <option value="Begginer">Begginer</option>
                            <option value="Intermidiate">Intermidiate</option>
                            <option value="Expert">Expert</option>
            
                          </select>
              </div>
            </div>
        
            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-3' style={{color:'#1080D4'}}>What Students Will Learn?:</h5>
                  <textarea placeholder="Enter What Students Will Learn ?" className="login-input col-xl-7" value={testGoal} onChange={(e)=>setTestGoal(e.target.value)} required rows="5"/>      
            </div>

            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-3' style={{color:'#1080D4'}}>What Are The Requirements ? :</h5>
                  <textarea placeholder="Enter What Are The Requirements ?" className="login-input col-xl-7" value={testRequires} onChange={(e)=>setTestRequires(e.target.value)} required rows="5"/>      
            </div>

            <div className='d-flex align-items-center ps-4 my-5'>
                        <h5 className='ms-4 col-xl-3' style={{color:'#1080D4'}}>Who Is This Course For ? :</h5>
                  <textarea placeholder="Enter Who Is This Course For ?" className="login-input col-xl-7" value={testForWho} onChange={(e)=>setTestForWho(e.target.value)} required rows="5"/>      
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

{/* Add Sections And Tests */}
{sections.map(((section, index) => 
<div className='ps-4 my-5 ms-4'>
              <h5 className='col-xl-3' style={{color:'#C65700'}}>Section {index+1}</h5>
              <div className='d-flex w-100 justify-content-between'>
                <div className='col-xl-4'><div className='d-flex align-items-center justify-content-evenly'>  
                <Checkbox type='checkbox' checked={section.showArticle} style={{color:'#F69F0C'}} onChange={()=>handleShowArticle(index)}/> Add Article
                {section.showArticle && <><label htmlFor={"img-for-article"+index}  className={"btn form-label click-to-show2" + index}
                         style={{cursor:'pointer'}}><button className='btn' type='button' style={{pointerEvents:'none', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>Upload:</button></label>
                          <input type="file" required onChange={(e)=>{                                                  
                              document.querySelector(`.show-image-for-me-d${index}`).src=URL.createObjectURL(e.target.files[index])
                            }} className="col-xl-4 form-file-input" id={"img-for-article"+index} style={{opacity:'0', position:'absolute', zIndex:'-1'}}/></>}
                </div>
                
                <div className='w-100 d-flex justify-content-center'>
                      <img alt='' className={'w-50 show-image-for-me-d'+index}/>
                    </div>
                    </div>
                <div className='col-xl-6'>
                  Section Name
                  <input placeholder="Enter Section Name" className="login-input" value={section.section_name} onChange={(e)=>handleSectionNameChange(e.target.value, index)} required/>      
                  <div className='d-flex'>
                    <b onClick={()=>{document.querySelector(`.descsc-${index}`).classList.toggle('bolder-class')}} className='mx-2' style={{color:'#000', cursor:'pointer', fontWeight:'bolder'}}>B</b>
                    <i onClick={()=>{document.querySelector(`.descsc-${index}`).classList.toggle('italic-class')}} style={{color:'#000', cursor:'pointer'}}>I</i>
                  </div>
                  
                  <textarea placeholder='Article About Section' rows="7" className={'form-control descsc-'+index}></textarea>
              
                </div>
              </div>
{/* Videos */}
              <div className='my-5'>
              <label htmlFor={"uploadVideoArticle"+index}  className={"btn form-label click-to-show2" + index}
                       style={{cursor:'pointer'}}><button className='btn' type='button' style={{pointerEvents:'none', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>Upload Videos:</button></label>
                        <input type="file" required onChange={(e)=>{             
                          for(let i = 0; i< e.target.files.length;i++){
                            handleAddVideo(URL.createObjectURL(e.target.files[i]), index)
                        }
                        }} className="col-xl-4 form-file-input" multiple id={"uploadVideoArticle"+index} style={{opacity:'0', position:'absolute', zIndex:'-1'}}/>
                            
                    <div className='col-xl-5 d-flex justify-content-start'>
                      {section.videos.map(video=>
                      <video src={video.video_file} controls alt='' className={'w-50 show-image-for-me-d-vidart'+index}/>
                        )}
                    </div>
                    </div>

{/* Test */}

<div className='mt-5' >
<Checkbox type='checkbox'checked={section.hasTests} style={{color:'#F69F0C'}} onChange={()=>handleShowTest(index)}/> 
  
  Add Tests
  </div>
{section.hasTests &&<div className='ms-5'>
  <button className='px-4 py-2 mt-5 btn text-white' style={{backgroundColor:'#0E564E', borderRadius:'20px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', pointerEvents:'none'}}>Choices</button>
    <div className='d-flex justify-content-between'>
    <div className='col-xl-4'>
  {section.choiceQuestions.map((mq, indexOfMq) => <div key={"mq-"+indexOfMq} className="">
      <input type="text" className="m-3 w-100 form-control" value={mq.question}  onChange={(e)=>handleChangeMQuestion(e.target.value, indexOfMq, index)} placeholder="Enter Your Question Here" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      <input type="text" className="m-3 w-50 form-control" value={mq.answers[0]} onChange={(e)=>handleChangeMAnswer(e.target.value, indexOfMq, index, 0)} placeholder="First Choice" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      <input type="text" className="m-3 w-50 form-control" value={mq.answers[1]} onChange={(e)=>handleChangeMAnswer(e.target.value, indexOfMq, index, 1)} placeholder="Second Choice" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      <input type="text" className="m-3 w-50 form-control" value={mq.answers[2]} onChange={(e)=>handleChangeMAnswer(e.target.value, indexOfMq, index, 2)} placeholder="Third Choice" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      <input type="text" className="m-3 w-50 form-control" value={mq.answers[3]} onChange={(e)=>handleChangeMAnswer(e.target.value, indexOfMq, index, 3)} placeholder="Fourth Choice" aria-label="Input group example" aria-describedby="btnGroupAddon" />
  </div>)}
    </div>
    <div className='col-xl-4 d-flex justify-content-center align-items-center'>
    <button type='button' className='px-5 py-2 btn text-white' onClick={()=>handleAddAnotherMq(index)} style={{backgroundColor:'#F67D20',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>Add Another</button>
    </div>
    </div>
    


    <button className='px-4 py-2 mt-5 btn text-white' style={{backgroundColor:'#0E564E', borderRadius:'20px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', pointerEvents:'none'}}>Questions</button>
    <div className='d-flex justify-content-between'>
    <div className='col-xl-4'>
  {section.EditorQuestions.map((eq, indexOfEq) => <div key={"eq-"+indexOfEq} className="">
    <input type="text" className="m-3 w-100 form-control" value={eq.question}  onChange={(e)=>handleChangeEQuestion(e.target.value, indexOfEq, index)} placeholder="Enter Your Question Here" aria-label="Input group example" aria-describedby="btnGroupAddon" />
    <input type="text" className="m-3 w-50 form-control" value={eq.answer}  onChange={(e)=>handleChangeEAnswer(e.target.value, indexOfEq, index)} placeholder="Answer" aria-label="Input group example" aria-describedby="btnGroupAddon" />
    <label htmlFor={"customCheckFileOfQuestionEd"+index+indexOfEq} className={`click-to-showEd${index+indexOfEq} form-label col-xl-4`} style={{cursor:'pointer'}}></label>
                        <input type="file" required onChange={(e)=>{             
                                     
                            document.querySelector(`.show-image-for-me-edit${index+indexOfEq}`).src=URL.createObjectURL(e.target.files[0])
                          }} className="col-xl-4 form-file-input" id={"customCheckFileOfQuestionEd"+index+indexOfEq} style={{opacity:'0', position:'absolute', zIndex:'-1'}}/>
                        
                    <div className='w-100 d-flex justify-content-start'>
                      <img alt='' className={`w-50 show-image-for-me-edit${index+indexOfEq}`}/>
                    </div>
                    <div className='w-100 d-flex justify-content-center my-5'>
                    <img style={{cursor:"pointer"}} alt='' src={PlusImg} className='col-xl-4' onClick={()=>{document.querySelector(`.click-to-showEd${index+indexOfEq}`).click();}}/>
                    </div>

  </div>)}
    </div>
    <div className='col-xl-4 d-flex justify-content-center align-items-center'>
    <button type='button' className='px-5 py-2 btn text-white' onClick={()=>handleAddAnotherEq(index)} style={{backgroundColor:'#F67D20',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>Add Another</button>
    </div>
    </div>



</div>

}


            </div>
))}



<div className='my-4  align-items-center d-flex justify-content-center'>

                        Add Another Section<img style={{cursor:"pointer"}} alt='' src={PlusImg} className='col-xl-1' onClick={()=>handleAddSection()}/>

                    </div>
            <div className='my-4 d-flex justify-content-end'>
                <button className='btn text-white px-5 py-3' style={{backgroundColor:'#C345DD'}} type="submit"><i>Publish Course</i></button>
            </div>
            </form>
        </div>
    )
}

export default AddCourse
