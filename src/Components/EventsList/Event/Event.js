import React, { PureComponent } from 'react'
import './Event.css'

import Conversion from '../../../Algorithms/Date/24HourTo12'

class Event extends PureComponent {
    render() {
        let { name, startTime, endTime, location } = this.props
        startTime = Conversion(startTime)
        endTime = Conversion(endTime)
        return (
            <section className='event'>
                <div className='eventName'>{name}</div>
                <div className='eventLocation'>{location}</div>
                <div className='eventTimes'>{`${startTime} - ${endTime}`}</div>
                <button className='eventDetails'>Details</button>
            </section>
        );
    }
}

export default Event