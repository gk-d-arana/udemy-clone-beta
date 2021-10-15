import React from 'react'
import { connect } from 'react-redux'
import './assets/css/styles.css'
import course from './assets/images/course.png'
import home from './assets/images/home.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const starIcon = () => {
    return (
        <div>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        </div>
    )
}

export const Home = (props) => {



    return (
        <div>
            <ul className="categories-ul">
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
                <li className="category-item">Development</li>
            </ul>
        <div className="home-img" style={{backgroundImage: `url("${home}")`}}></div>
        <button type="button" className="to-learn-btn">To Learn Next</button>
        <div className="category-courses">   

    </div>

    <div className="container">
    <h1 className="color-gold">Physics Course</h1>    

    </div>
    <Carousel>
    
    <div>


    <div className="container">
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6         <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">55000 SP</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div> 
</div>

    </Carousel>

    <div className="container">
    <h1 className="color-gold">Physics Course</h1>    

    </div>
    <Carousel>
    
    <div>


    <div className="container">
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6         <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">55000 SP</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div> 
</div>

    </Carousel>

    <div className="container">
    <h1 className="color-gold">Physics Course</h1>    

    </div>
    <Carousel>
    
    <div>


    <div className="container">
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6         <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">55000 SP</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div> 
</div>

    </Carousel>


    <button type="button" className="to-learn-btn">Short Courses</button>
    
    
    <div className="container">
    <h1 className="color-gold">Physics Course</h1>    

    </div>
    <Carousel>
    
    <div>


    <div className="container">
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6         <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">55000 SP</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div>
    </div>
    
    <div>
    <div className="container">
        
    <div className="row">
    <div className="card col-4">
    <img src={course} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
      <br />  
      By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
      </div>
      <a href="#" className="btn color-gold">Go somewhere</a>
    </div>
  </div>

  <div className="card col-4">
  <img src={course} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
    <br />    
    By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
    </div>
    <a href="#" className="btn color-gold">Go somewhere</a>
  </div>
</div>


<div className="card col-4">
<img src={course} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <div className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.
  <br />      
  By Teacher: <span className="teacher-name"> </span>
        <div className="rating-div">
            4.6 <span>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            </span>
        </div>
  </div>
  <a href="#" className="btn color-gold">Go somewhere</a>
</div>
</div>

    </div>

</div> 
</div>

    </Carousel>



        </div>
    )
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


