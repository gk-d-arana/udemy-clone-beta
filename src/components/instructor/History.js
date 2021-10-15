import React, { Component } from 'react'
import { connect } from 'react-redux'

export class History extends Component {
    render() {
        return (
            <div>
                History
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
