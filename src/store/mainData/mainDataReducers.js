import {
    SET_MAIN_DATA,
    SET_HOME_COURSES
}  from "./mainDataTypes"; 

const initialState = {
    data : [],
    homeCourses : []
}



const mainDataReducer = (state=initialState, action) => {
    console.log(action.payload)
    switch(action.type){
        case SET_MAIN_DATA: return {
            ...state,
            data : action.payload
        }
        case SET_HOME_COURSES: return {
            ...state,
            homeCourses : action.payload
        }
        default: return state
    }
}


export default mainDataReducer