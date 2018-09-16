import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventsList.css'

import Event from './Event/Event'
import MakeDate from '../../Algorithms/Date/MakeDate'
import ReadableDate from '../../Algorithms/Date/ReadableDate'

class Events extends Component {
    render() {
        const { events } = this.props
        return (
            <section className='events'>
                {events.map(({date, events}, i) => {
                    const d = MakeDate(date)
                    const readableDate = ReadableDate(d)
                    return (<div 
                        key={date}
                        className='eventListDay'
                    >
                        <div className='eventListDate'>{readableDate}</div>
                        <div className='eventWrapper'>
                            {events.map(({ name, startTime, endTime, location }, j) =>
                                <Event
                                    key={j}
                                    i={i}
                                    j={j}
                                    name={name}
                                    startTime={startTime}
                                    endTime={endTime}
                                    location={location}
                                    />
                            )}
                        </div>
                    </div>
                )})}
            </section>
        );
    }
}

const mapStateToProps = ({ events }) => ({
    events
})

export default connect(mapStateToProps)(Events)