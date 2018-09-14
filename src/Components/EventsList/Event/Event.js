import React, { PureComponent } from 'react'
import './Event.css'

class Event extends PureComponent {
    render() {
        const { name, date, time, location, description } = this.props
        return (
            <section className='event'>
                <div>{name}</div>
                <div>{date}</div>
                <div>{time}</div>
                <div>{location}</div>
                <div>{description}</div>
            </section>
        );
    }
}

export default Event