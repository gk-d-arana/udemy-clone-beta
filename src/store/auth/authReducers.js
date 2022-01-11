import {
    SET_TOKEN,
    SET_INSTRUCTOR_INFO,
    SET_STUDY_PROGRAM
}  from "./authTypes"; 

const initialState = {
    token : `${localStorage.getItem('token')}`,
    instructor : {},
    studyProgram : undefined
}



const authReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_TOKEN: return {
            ...state,
            token : `${action.payload}`
        }
        case SET_INSTRUCTOR_INFO: return {
            ...state,
            instructor : {
                "user": {
                    "username" : `${action.payload.username}`,
                    "first_name" : `${action.payload.firstName}`,
                    "last_name" : `${action.payload.lastName}`,
                    "email" : `${action.payload.email}`,
                },
                "bio" : `${action.payload.bio}`,
                "total_students": action.payload.total_students,
                "total_reviews": action.payload.total_reviews,
                "total_rate": action.payload.total_rate,
                "badges": `${action.payload.badges}`,
                "student_count": action.payload.student_count,
                'facebook_link' : action.payload.facebook_link,
                'job_role' : action.payload.job_role,

                "profile_image" : `${action.payload.profile_image}`
            }
        }
        case SET_STUDY_PROGRAM : return {
            ...state,
            studyProgram : action.payload
        }
        default: return state
    }
}


export default authReducer