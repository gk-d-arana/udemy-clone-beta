import {SET_INSTRUCTOR_INFO, SET_STUDY_PROGRAM, SET_TOKEN} from './authTypes'


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


export const setStudyProgram = data => {
    return {
        type: SET_STUDY_PROGRAM,
        payload: data
    }
}