import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CourseDetails extends Component {
    render() {
        return (
            <div>
                CourseDetails
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails)
