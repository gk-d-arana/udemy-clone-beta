import {
    SET_MAIN_DATA,
    SET_TOP_SELLING_COURSES
}  from "./mainDataTypes"; 

const initialState = {
    data : [],
    topSellingCourses : []
}



const mainDataReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_MAIN_DATA: return {
            ...state,
            data : action.payload
        }
        case SET_TOP_SELLING_COURSES: return {
            ...state,
            topSellingCourses : action.payload
        }
        default: return state
    }
}


export default mainDataReducer