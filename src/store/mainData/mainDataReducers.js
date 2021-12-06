import {
    SET_MAIN_DATA,
    SET_TOP_SELLING_COURSES,
    COURSE_FAVOURITE
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
        case COURSE_FAVOURITE : {
            let newState = state
            let index = newState.topSellingCourses.indexOf(tc => tc.course.course_id === action.payload)
            newState.topSellingCourses[index].in_wishlist = !newState.topSellingCourses[index].in_wishlist
            return newState
        }
        default: return state
    }
}


export default mainDataReducer