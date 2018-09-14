import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './EventDetails.css'

import Action from '../../Redux/Action'

class EventDetails extends Component {
    state = {
        details:null
    }
    
    componentDidMount = () => {
        const path = this.props.history.location.pathname
        const nodes = path.split('/')
        const i = parseInt(nodes[1], 10)
        const j = parseInt(nodes[2], 10)
        const { events } = this.props
        if (events[i] && events[i].events[j]) {
            this.setState({
                details: events[i].events[j]
            })
        }
    }

    render() {
        return (
            <section className='eventDetailedInfo'>
                <div className='detailedInfoWrapper'>

                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ events }) => ({
    events
})

const mapActionsToProps = {
    Action
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter((EventDetails)))