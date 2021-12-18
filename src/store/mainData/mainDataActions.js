import {SET_MAIN_DATA, SET_TOP_SELLING_COURSES, COURSE_FAVOURITE, SET_MY_COURSES} from './mainDataTypes'




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


