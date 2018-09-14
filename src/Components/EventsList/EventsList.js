import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventsList.css'

import Event from './Event/Event'
import MakeDate from '../../Algorithms/Date/MakeDate'

import { monthNames, dayNames } from '../../Enums/Date/DateNames'

class Events extends Component {
    render() {
        const { events } = this.props
        return (
            <section className='events'>
                {events.map(({date, events}, i) => {
                    const d = MakeDate(date)
                    const day = dayNames[d.getDay()]
                    const month = monthNames[d.getMonth()]
                    const dateNum = d.getDate()
                    return (<div 
                        key={date}
                        className='eventListDay'
                    >
                        <div className='eventListDate'>{`${day}, ${month} ${dateNum}`}</div>
                        <div className='eventWrapper'>
                            {events.map(({ name, date, time, location, description }, j) =>
                                <Event
                                    key={j}
                                    i={i}
                                    j={j}
                                    name={name}
                                    date={date}
                                    time={time}
                                    location={location}
                                    description={description}
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