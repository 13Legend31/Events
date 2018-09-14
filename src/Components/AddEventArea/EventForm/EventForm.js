import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventForm.css'

import Action from '../../../Redux/Action'
import Insert from '../../../Algorithms/Events/Insert'

import { events } from '../../../Redux/Constants'

const type = [
    'name',
    'date',
    'startTime',
    'endTime',
    'location',
    'host'
]

const originalState = {
    name:'',
    date:'',
    startTime:'',
    endTime:'',
    location:'',
    host:'',
    description:'' // need specialized
}

const lengths = {
    name:70,
    date:20,
    startTime:20,
    endTime:20,
    location:50,
    host:20,
    description:500
}

class EventForm extends Component {
    state = {
        ...originalState
    }

    ModifyDetails = (key, value) => {
        const state = this.state
        if (value.length < lengths[key]) {
            state[key] = value
            this.setState(state)
        }
    }

    AddEvent = () => {
        // validate date, times
        const eventDetails = this.state
        if (!eventDetails.date) {
            alert('Invalid Date!')
        } else if (!eventDetails.startTime || !eventDetails.endTime) {
            alert('Invalid Times!')
        } else {
            Insert(this.props.events, eventDetails)
            this.setState({...originalState})
            this.props.Action([...this.props.events], events)
        }
    }

    render() {
        const todayDate = new Date()
        const year = todayDate.getFullYear()
        const month = todayDate.getMonth() + 1 < 10 ? `0${todayDate.getMonth() + 1}` : todayDate.getMonth() + 1
        const date = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate()
        return (
            <section className='eventForm'>
                {type.map((type) => {
                    let inputType = 'text'
                    if (type === 'date') {
                        inputType = 'date'
                    } else if (type === 'startTime' || type === 'endTime') {
                        inputType = 'time'
                    }
                    return (
                        <React.Fragment key={type}>
                            {(type === 'startTime' || type === 'endTime') &&
                                <div>{type === 'startTime' ? 'Start Time' : 'End Time'}</div>
                            }
                            <input
                                key={type}
                                className='eventFormInput'
                                placeholder={type[0].toUpperCase() + type.substring(1)}
                                type={inputType}
                                value={this.state[type]}
                                min={`${year}-${month}-${date}`}
                                onChange={(e) => this.ModifyDetails(type, e.target.value)}
                            />
                        </React.Fragment>
                    )
                })}
                <textarea
                    className='eventFormDescription'
                    value={this.state.description}
                    placeholder='Description'
                    onChange={(e) => this.ModifyDetails('description', e.target.value)}
                />
                <button
                    className='eventFormSave'
                    onClick={this.AddEvent}
                >
                    Save
                </button>
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

export default connect(mapStateToProps, mapActionsToProps)(EventForm)