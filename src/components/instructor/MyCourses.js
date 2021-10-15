import React from 'react'
import { connect } from 'react-redux'

export const MyCourses = (props) => {
    return (
        <div>
            My Courses
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCourses)
