import {SET_INSTRUCTOR_INFO, SET_TOKEN} from './authTypes'


export const setToken = token => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}



export const setInstructorInfo = user => {
    return {
        type: SET_INSTRUCTOR_INFO,
        payload: user
    }
}