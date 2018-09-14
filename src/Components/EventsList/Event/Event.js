import React, { PureComponent } from 'react'
import './Event.css'

class Event extends PureComponent {
    render() {
        const { name, startTime, endTime, location } = this.props
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