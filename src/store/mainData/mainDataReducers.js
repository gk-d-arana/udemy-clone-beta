import {
    SET_MAIN_DATA,
    SET_TOP_SELLING_COURSES,
    COURSE_FAVOURITE,
    SET_MY_COURSES,
    SET_RATINGS,
    SET_TOP_INSTRUCTORS,
    SET_TOP_PCATS,
    SET_TOP_CATS,
    SET_TESTS
}  from "./mainDataTypes"; 

const initialState = {
    data : [],
    topSellingCourses : [],
    myCourses: [],
    ratingsByValue: [],
    topInstructors: [],
    topPcats : [],
    topCats : [],
    tests: []
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
        
        case SET_RATINGS: return {
            ...state,
            ratingsByValue : action.payload
        }
        
        case SET_TESTS: return {
            ...state,
            tests : action.payload
        }
        case SET_TOP_INSTRUCTORS: return {
            ...state,
            topInstructors : action.payload
        }
        
        case SET_TOP_PCATS: return {
            ...state,
            topPcats : action.payload
        }
        
        case SET_TOP_CATS: return {
            ...state,
            topCats : action.payload
        }

        case COURSE_FAVOURITE : {
            let newState = state
            let index = newState.topSellingCourses.indexOf(tc => tc.course.course_id === action.payload)
            newState.topSellingCourses[index].in_wishlist = !newState.topSellingCourses[index].in_wishlist
            return newState
        }
        case SET_MY_COURSES: return {
            ...state,
            myCourses : action.payload
        }
        default: return state
    }
}


export default mainDataReducer