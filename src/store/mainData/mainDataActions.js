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
} from './mainDataTypes'




export const setMainData = data => {
    return {
        type: SET_MAIN_DATA,
        payload: data
    }
}


export const setTopSellingCourses = data => {
    return {
        type: SET_TOP_SELLING_COURSES,
        payload: data
    }
}

export const addCourseToFavourite = data => { 
    return {
        type : COURSE_FAVOURITE,
        payload: data
    }
}


export const setMyCourses = data => {
    return {
        type: SET_MY_COURSES,
        payload: data
    }
}


export const setRatingsByValue = data => {
    return {
        type: SET_RATINGS,
        payload: data
    }
}


export const setTopInstructors = data => {
    return {
        type: SET_TOP_INSTRUCTORS,
        payload: data
    }
}



export const setTopPcats = data => {
    return {
        type: SET_TOP_PCATS,
        payload: data
    }
}


export const setTopCats = data => {
    return {
        type: SET_TOP_CATS,
        payload: data
    }
}


export const setTests = data => {
    return {
        type: SET_TESTS,
        payload: data
    }
}


