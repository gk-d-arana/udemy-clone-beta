import {SET_MAIN_DATA, SET_TOP_SELLING_COURSES} from './mainDataTypes'




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