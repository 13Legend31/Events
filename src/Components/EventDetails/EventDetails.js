import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './EventDetails.css'

import Action from '../../Redux/Action'
import Conversion from '../../Algorithms/Date/24HourTo12'

import MakeDate from '../../Algorithms/Date/MakeDate'
import ReadableDate from '../../Algorithms/Date/ReadableDate'

/*
date
name
startTime - endTime
host
location
*/

class EventDetails extends Component {    
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        const { events } = this.props
        const path = this.props.history.location.pathname
        const nodes = path.split('/')
        const i = parseInt(nodes[1], 10)
        const j = parseInt(nodes[2], 10)
        
        let details = (events[i] && events[i].events[j]) ? events[i].events[j] : null
        let readableDate
        if (details) {
            const d = MakeDate(details.date)
            readableDate = ReadableDate(d)
        }
        return (
            <section className='eventDetailedInfo'>
                <div className='detailedInfoWrapper'>
                {details &&
                    <React.Fragment>
                        <div className='eventDetailsDate'>{readableDate}</div>
                        <div className='eventDetailsName'>{details.name}</div>
                        <div className='eventDetailsHost'>{`Hosted by ${details.host}`}</div>
                        <div className='eventDetailsLocation'>{details.location}</div>
                        <div className='eventDetailsTime'>{`${Conversion(details.startTime)} - ${Conversion(details.endTime)}`}</div>
                        <div className='eventDescription'>{details.description}</div>
                    </React.Fragment>
                }
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