import {
    SET_TOKEN,
    SET_INSTRUCTOR_INFO
}  from "./authTypes"; 

const initialState = {
    token : `${localStorage.getItem('token')}`,
    instructor : {}
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
                    "fisrt_name" : `${action.payload.firstName}`,
                    "last_name" : `${action.payload.lastName}`,
                    "email" : `${action.payload. email}`,
                },
                "bio" : `${action.payload.bio}`,
                "total_students": action.payload.total_students,
                "total_reviews": action.payload.total_reviews,
                "total_rate": action.payload.total_rate,
                "badges": `${action.payload.badges}`,
                "student_count": action.payload.student_count,
                "profile_image" : `${action.payload.profile_image}`
            }
        }

        default: return state
    }
}


export default authReducer