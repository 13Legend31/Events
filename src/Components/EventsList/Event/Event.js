import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import './Event.css'

import Conversion from '../../../Algorithms/Date/24HourTo12'

class Event extends PureComponent {
    render() {
        let { name, startTime, endTime, location, i, j } = this.props
        startTime = Conversion(startTime)
        endTime = Conversion(endTime)
        return (
            <section className='event'>
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

export default Event