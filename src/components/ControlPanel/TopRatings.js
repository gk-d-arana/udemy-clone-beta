import React, { useEffect } from 'react'
import './assets/styes.css'
import { getRatingDiv } from '../course/CourseContent'
import { URL_ROOT }  from '../../utils/js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopRatings = () => {
    const tr = useSelector(state => state.mainData.ratingsByValue)

    return (
        <div>
          <div className='gridded-goals2-t container my-5'>
          {tr.map((rating,index)=>{
             if(index>5)return ""
              return<div  style={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} id={rating.rating_id} className='row r1 p-4'>
              <div className='d-flex justify-content-between w-100 align-items-center'>
                <div className='rating-p-img' style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover', backgroundImage: `url('${URL_ROOT + rating.instructor.profile_image}')`
                }}>
                </div>
                <h5>{rating.instructor.user.username}</h5>
                <span className='col-6'>{getRatingDiv(rating.rating_value)}</span>     
              </div>
              <div className='d-flex justify-content-end'><i className='bx bx-trash' style={{color:'red', fontSize:'1.4rem', cursor:'pointer'}}></i></div>
              <div className='my-3'>
                <p>{rating.rating_content}</p>
              </div>
            </div>
         }
          )}
        </div>
        </div>
    )
}

export default TopRatings