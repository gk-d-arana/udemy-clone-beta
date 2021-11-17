import {SET_MAIN_DATA, SET_HOME_COURSES} from './mainDataTypes'




export const setMainData = data => {
    return {
        type: SET_MAIN_DATA,
        payload: data
    }
}


export const setHomeCourses = data => {
    return {
        type: SET_HOME_COURSES,
        payload: data
    }
}