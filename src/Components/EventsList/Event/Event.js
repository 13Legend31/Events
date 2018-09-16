import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Event.css'

import Action from '../../../Redux/Action'
import Conversion from '../../../Algorithms/Date/24HourTo12'

import  { events } from '../../../Redux/Constants'

class Event extends PureComponent {
    Delete = () => {
        const { i, j } = this.props
        const eventsList = this.props.events
        eventsList[i].events.splice(j, 1)
        if (eventsList[i].events.length === 0) {
            eventsList.splice(i, 1)
        }
        this.props.Action([...eventsList], events)
    }

    render() {
        let { name, startTime, endTime, location, i, j } = this.props
        startTime = Conversion(startTime)
        endTime = Conversion(endTime)
        return (
            <section className='event'>
                <button
                    className='deleteEvent'
                    onClick={this.Delete}
                >
                    X
                </button>
                <div className='eventName'>{name}</div>
                <div className='eventLocation'>{location}</div>
                <div className='eventTimes'>{`${startTime} - ${endTime}`}</div>
                <NavLink 
                    className='eventDetails'
                    to={`/${i}/${j}/${name.replace(/\s/g, '-')}`}
                >
                    Details
                </NavLink>
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

export default connect(mapStateToProps, mapActionsToProps)(Event)